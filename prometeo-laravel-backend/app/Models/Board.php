<?php

namespace App\Models;

use App\Models\User;
use App\Models\BoardList;
use App\Models\Invitation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Board extends Model
{
    use HasFactory;

    public function createdBy()
    {
        return $this->belongsTo(User::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }

    public function boardLists()
    {
        return $this->hasMany(BoardList::class);
    }

    public function invitations()
    {
        return $this->hasMany(Invitation::class);
    }
}
