<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $task = new Task;
        $task->name = 'Create database schema';
        $task->description = 'Create database schema with Laravel Eloquent';
        $task->boardList()->associate(1);
        $task->save();
        $task->users()->attach(1);

        $task = new Task;
        $task->name = 'Create frontend';
        $task->description = 'Create frontend with React';
        $task->boardList()->associate(1);
        $task->save();
        $task->users()->attach(1);
        $task->users()->attach(2);
    }
}
