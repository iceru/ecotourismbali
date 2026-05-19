<?php

namespace App\Http\Controllers\Auth;

use Newsletter;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Member;
use App\Models\Program;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;


class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $programs = Program::all();
        return Inertia::render('Auth/Register', [
            'programs' => $programs
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => ['required', 'confirmed', Rules\Password::min(8)->letters()],
            'business_name' => 'required|string|max:255',
            'program' => 'required',
        ]);

        if ($request->subscribed) {
            Newsletter::subscribe($request->email);
        }

        $user = null;

        DB::transaction(function () use ($request, &$user) {
            $user = User::withTrashed()->where('email', $request->email)->first();

            if ($user) {
                if (is_null($user->deleted_at)) {
                    throw ValidationException::withMessages([
                        'email' => 'The email has already been taken.',
                    ]);
                }

                $user->restore();
                $user->name = $request->name;
                $user->password = Hash::make($request->password);
                $user->email_verified_at = null;
                $user->save();
            } else {
                $user = User::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                ]);
            }

            $member = Member::withTrashed()
                ->where('user_id', $user->id)
                ->orWhere('business_name', $request->business_name)
                ->first();

            if ($member) {
                if (!is_null($member->deleted_at)) {
                    $member->restore();
                }
            } else {
                $member = new Member();
            }

            $member->user_id = $user->id;
            $member->business_name = $request->business_name;
            $member->slug = Str::slug($request->business_name);
            $member->subscribed = $request->subscribed;
            $member->program_id = $request->program;
            $member->save();
        });

        event(new Registered($user));
        
        Auth::login($user);
        if (!$user->hasRole('member')) {
            $user->addRole('member');
        }

        return redirect(route('member.dashboard'));
    }

    /**
     * Display the registration view.
     */
    public function createAdmin(): Response
    {
        // return Inertia::render('Auth/RegisterAdmin');
        return Inertia::render('Admin/Register/CreateAdmin', [
            'admin' => User::whereHasRole('administrator')->get(),
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function storeAdmin(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // event(new Registered($user));

        $user->addRole('administrator');

        return redirect(route('register.admin'));
    }
}
