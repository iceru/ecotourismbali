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
        Schema::table('member_assessments', function (Blueprint $table) {
            $table->ulid('assessment_session_id');
            $table->foreign('assessment_session_id')->references('id')->on('assessment_sessions')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('member_assessments', function (Blueprint $table) {
            //
        });
    }
};
