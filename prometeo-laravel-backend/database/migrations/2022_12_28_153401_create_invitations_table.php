<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('host_id');
            $table->unsignedBigInteger('guest_id');
            $table->unsignedBigInteger('board_id');
            $table->unsignedBigInteger('invitation_state_id');
            $table->foreign('host_id')->references('id')->on('users');
            $table->foreign('guest_id')->references('id')->on('users');
            $table->foreign('board_id')->references('id')->on('boards');
            $table->foreign('invitation_state_id')->references('id')->on('invitation_states');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invitations');
    }
};
