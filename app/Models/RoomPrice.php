<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class RoomPrice extends Model
{
    protected $table = 'room_prices';

    public function customer_room(): HasMany
    {
        return $this->hasMany(CustomerRoom::class, 'room_price_id');
    }
    
    public function room_type(): BelongsTo
    {
        return $this->belongsTo(RoomType::class, 'room_type_id');
    }
}
