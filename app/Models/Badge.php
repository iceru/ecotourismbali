<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Badge extends Model
{
    protected $table = 'badges';

    public function members(): HasMany
    {
        return $this->hasMany(Member::class, 'badge_id');
    }
}
