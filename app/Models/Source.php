<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Source extends Model
{
    use HasFactory;
    protected $fillable = ['id'];

    public function member_tourism(): HasMany
    {
        return $this->hasMany(MemberTourism::class, 'source_id');
    }
}
