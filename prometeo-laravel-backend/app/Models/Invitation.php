<?php

namespace App\Models;

use App\Models\User;
use App\Models\Board;
use App\Models\InvitationState;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Invitation extends Model
{
    use HasFactory;

    public function invitationState()
    {
        return $this->belongsTo(InvitationState::class);
    }

    public function board()
    {
        return $this->belongsTo(Board::class);
    }

    public function host()
    {
        return $this->belongsTo(User::class, 'host_id');
    }

    public function guest()
    {
        return $this->belongsTo(User::class, 'guest_id');
    }
}
