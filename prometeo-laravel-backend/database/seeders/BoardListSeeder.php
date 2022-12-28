<?php

namespace Database\Seeders;

use App\Models\BoardList;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BoardListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $list = new BoardList;
        $list->name = 'To do';
        $list->board()->associate(1);
        $list->save();
    }
}
