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
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('address')->nullable();
            $table->string('website')->nullable();
            $table->string('business_name')->nullable();
            $table->string('job_title')->nullable();
            $table->integer('assess_attempts')->nullable();
            $table->string('status')->nullable();
            $table->date('assess_expire')->nullable();
            $table->string('description')->nullable();

            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('restrict');
            $table->unsignedBigInteger('program_id')->nullable();
            $table->foreign('program_id')->references('id')->on('programs')->onDelete('restrict');
            $table->unsignedBigInteger('badge_id')->nullable();
            $table->foreign('badge_id')->references('id')->on('badges')->onDelete('restrict');
            $table->unsignedBigInteger('category_id')->nullable();
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
