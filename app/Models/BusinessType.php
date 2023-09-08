<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BusinessType extends Model
{
    protected $table = 'business_types';

    public function member(): HasMany
    {
        return $this->hasMany(Member::class, 'business_type_id');
    }

    public function assessment(): HasMany
    {
        return $this->hasMany(Assessment::class, 'business_type_id');
    }
}
