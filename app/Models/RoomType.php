<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class RoomType extends Model
{
    protected $table = 'room_types';

    public function room(): HasMany
    {
        return $this->hasMany(Room::class, 'room_type_id');
    }

    public function room_price(): HasMany
    {
        return $this->hasMany(RoomPrice::class, 'room_type_id');
    }
    
    public function hotel(): BelongsTo
    {
        return $this->belongsTo(Hotel::class, 'hotel_id');
    }
}
