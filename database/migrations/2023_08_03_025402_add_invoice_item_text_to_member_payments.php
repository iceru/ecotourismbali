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
        Schema::table('member_payments', function (Blueprint $table) {
            $table->text('invoice_item_text')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('member_payments', function (Blueprint $table) {
            $table->dropColumn('invoice_item_text');
        });
    }
};
