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
        Schema::create('pre_test_module_answers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->unsignedBigInteger('member_id');
            $table->foreign('member_id')->references('id')->on('members')->onDelete('restrict');
            $table->unsignedBigInteger('pre_test_question_id');
            $table->foreign('pre_test_question_id')->references('id')->on('pre_test_questions')->onDelete('restrict');
            $table->unsignedBigInteger('pre_test_option_id');
            $table->foreign('pre_test_option_id')->references('id')->on('pre_test_options')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pre_test_module_answers');
    }
};
