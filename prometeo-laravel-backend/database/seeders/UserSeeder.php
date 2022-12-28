<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $user->name = 'Juan Vanegas';
        $user->email =  'eatteer@gmail.com';
        $user->password = Hash::make('123');
        $user->save();

        $user = new User;
        $user->name = 'Kevin Sotto';
        $user->email =  'vikler@gmail.com';
        $user->password = Hash::make('123');
        $user->save();
    }
}
