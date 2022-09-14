<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request){
        $credentials = $request->validate([
            'name' => 'required',
            'password' => 'required'
        ]);

        $user = User::where('Client_Name', $credentials['name'])->first();
        if($user){
            if($user->Password == $credentials['password']){
                Auth::login($user);
                $request->session()->regenerate();

                return response()->noContent();
            }else{
                return response()->json([
                    'fail' => true,
                ], 200);
            }
        }else{
            return response()->json([
                'fail' => true,
            ], 200);
        }
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
