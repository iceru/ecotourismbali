<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Program extends Model
{
    protected $table = 'programs';
    
    public function members(): HasMany
    {
        return $this->hasMany(Member::class, 'program_id');
    }
}
