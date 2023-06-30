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
        Schema::table('modules', function (Blueprint $table) {
            $table->string('attachment')->nullable()->change();
            $table->dropColumn('pre_total_question');
            $table->dropColumn('post_total_question');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('modules', function (Blueprint $table) {
            $table->string('attachment')->change();
            $table->integer('pre_total_question')->nullable();
            $table->integer('post_total_question')->nullable();
        });
    }
};
