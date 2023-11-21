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
        Schema::create('customer_rooms', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('total_price');
            
            $table->unsignedBigInteger('customer_id');
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('restrict');
            $table->unsignedBigInteger('room_id');
            $table->foreign('room_id')->references('id')->on('rooms')->onDelete('restrict');
            $table->unsignedBigInteger('room_price_id');
            $table->foreign('room_price_id')->references('id')->on('room_prices')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_rooms');
    }
};
