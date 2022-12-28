<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $credentials = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);
        return $credentials;
    }
}
