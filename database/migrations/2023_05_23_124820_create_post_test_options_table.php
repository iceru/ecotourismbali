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
        Schema::create('post_test_options', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title');

            $table->unsignedBigInteger('post_test_question_id');
            $table->foreign('post_test_question_id')->references('id')->on('post_test_questions')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_test_options');
    }
};
