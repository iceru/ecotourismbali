<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class AdminUserController extends Controller
{
    public function index()
    {
        $users = User::with(['member', 'roles'])
            ->whereDoesntHave('roles', function ($query) {
                $query->whereIn('name', ['administrator', 'superadministrator']);
            })
            ->get()
            ->map(function ($user) {
                $user->role_name = optional($user->roles->first())->display_name ?: optional($user->roles->first())->name;
                $user->member_name = optional($user->member)->business_name;
                return $user;
            });

        return Inertia::render('Admin/User/UserIndex', [
            'users' => $users,
        ]);
    }

    public function edit(string $id)
    {
        $user = User::with('roles')->findOrFail($id);

        if ($user->hasRole('administrator') || $user->hasRole('superadministrator')) {
            abort(403);
        }

        return Inertia::render('Admin/User/UserEdit', [
            'user' => $user,
        ]);
    }

    public function update(Request $request, string $id)
    {
        $user = User::findOrFail($id);

        if ($user->hasRole('administrator') || $user->hasRole('superadministrator')) {
            abort(403);
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:8|confirmed',
        ]);

        $user->name = $request->name;
        $user->email = $request->email;

        if ($request->password) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        return Redirect::route('admin.user.index');
    }

    public function destroy(string $id)
    {
        $user = User::with('member')->findOrFail($id);

        if ($user->hasRole('administrator') || $user->hasRole('superadministrator')) {
            abort(403);
        }

        if ((int) Auth::id() === (int) $user->id) {
            return Redirect::back()->withErrors([
                'delete' => 'You cannot delete your own account.',
            ]);
        }

        DB::transaction(function () use ($user) {
            if ($user->member) {
                $user->member->delete();
            }

            $user->delete();
        });

        return Redirect::route('admin.user.index');
    }
}
