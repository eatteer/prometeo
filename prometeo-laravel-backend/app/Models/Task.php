<?php

namespace App\Models;

use App\Models\User;
use App\Models\BoardList;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory;

    public function boardList()
    {
        return $this->belongsTo(BoardList::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
}
