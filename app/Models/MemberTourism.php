<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MemberTourism extends Model
{
    use HasFactory;

    protected $fillable = ['source_id', 'id', 'name', 'business_name', 'category', 'email', 'phone', 'member_only', 'slug'];

    public function source(): BelongsTo
    {
        return $this->belongsTo(Source::class, 'source_id');
    }
}
