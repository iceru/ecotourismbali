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
        Schema::create('assessment_sessions', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('completion');
            $table->string('total_score')->nullable();
            $table->unsignedBigInteger('member_id');
            $table->foreign('member_id')->references('id')->on('members')->onDelete('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assessment_sessions');
    }
};
