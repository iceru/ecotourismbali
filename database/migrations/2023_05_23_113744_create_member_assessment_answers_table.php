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
        Schema::create('member_assessment_answers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            
            $table->unsignedBigInteger('member_id');
            $table->foreign('member_id')->references('id')->on('members')->onDelete('restrict');
            $table->unsignedBigInteger('assessment_question_id');
            $table->foreign('assessment_question_id')->references('id')->on('assessment_questions')->onDelete('restrict');
            $table->unsignedBigInteger('assessment_option_id');
            $table->foreign('assessment_option_id')->references('id')->on('assessment_options')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member_assessment_answers');
    }
};
