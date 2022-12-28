<?php

namespace Database\Seeders;

use App\Models\Board;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BoardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $board = new Board;
        $board->name = 'Prometeo Development';
        $board->createdBy()->associate(1);
        $board->save();
        $board->users()->attach(1);
    }
}
