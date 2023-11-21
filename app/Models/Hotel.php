<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Hotel extends Model
{
    protected $table = 'hotels';

    public function room_type(): HasMany
    {
        return $this->hasMany(RoomType::class, 'hotel_id');
    }
}
