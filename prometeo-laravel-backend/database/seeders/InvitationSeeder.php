<?php

namespace Database\Seeders;

use App\Models\Invitation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InvitationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $invitation = new Invitation;
        $invitation->invitationState()->associate(1);
        $invitation->board()->associate(1);
        $invitation->host()->associate(1);
        $invitation->guest()->associate(2);
        $invitation->save();
    }
}
