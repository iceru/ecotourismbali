<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class VerifiedBadge extends Model
{
    protected $table = 'verified_badges';

    public function members(): HasMany
    {
        return $this->hasMany(Member::class, 'verified_badge_id');
    }
}
