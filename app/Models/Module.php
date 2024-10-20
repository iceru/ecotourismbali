<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Module extends Model
{
    protected $table = 'modules';
    protected $appends = ['completed'];
    public function member_module(): HasMany
    {
        return $this->hasMany(MemberModule::class, 'module_id');
    }
    
    public function pre_test_question(): HasMany
    {
        return $this->hasMany(PreTestQuestion::class, 'module_id');
    }
    
    public function post_test_question(): HasMany
    {
        return $this->hasMany(PostTestQuestion::class, 'module_id');
    }

    public function getCompletedAttribute($value)
    {  
        $this->attributes['completed'] = $value;
    }
}
