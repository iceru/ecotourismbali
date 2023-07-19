<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('members', function (Blueprint $table) {
            $table->integer('no_rooms')->nullable();
            $table->integer('no_outlets')->nullable();
            $table->integer('no_employees')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('members', function (Blueprint $table) {
            $table->dropColumn('no_rooms');
            $table->dropColumn('no_outlets');
            $table->dropColumn('no_employees');
        });
    }
};
