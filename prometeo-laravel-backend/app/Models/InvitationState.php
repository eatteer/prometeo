<?php

namespace App\Models;

use App\Models\Invitation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class InvitationState extends Model
{
    use HasFactory;

    public function invitations()
    {
        return $this->hasMany(Invitation::class);
    }
}
