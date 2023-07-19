<?php

namespace App\Http\Controllers\Auth;

use Newsletter;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Member;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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
        return Inertia::render('Auth/Register');
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
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::min(8)->letters()],
        ]);

        if($request->subscribed) {
            Newsletter::subscribe($request->email);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        $member = Member::where('id', $user->id)->first();

        if (!$member) {
            $member = new Member;
            $member->user_id = $user->id;
            $member->business_name = $request->business_name;
            $member->slug = Str::slug($request->business_name);
            $member->subscribed = $request->subscribed;
            $member->save();
        }

        Auth::login($user);
        $user->addRole('member');

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
