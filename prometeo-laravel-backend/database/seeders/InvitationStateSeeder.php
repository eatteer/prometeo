<?php

namespace Database\Seeders;

use App\Models\InvitationState;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InvitationStateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $invitationState = new InvitationState;
        $invitationState->name = 'Pending';
        $invitationState->save();

        $invitationState = new InvitationState;
        $invitationState->name = 'Accepted';
        $invitationState->save();

        $invitationState = new InvitationState;
        $invitationState->name = 'Rejected';
        $invitationState->save();
    }
}
