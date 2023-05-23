<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PostTestQuestion extends Model
{
    protected $table = 'post_test_questions';

    public function module(): BelongsTo
    {
        return $this->belongsTo(Module::class, 'module_id');
    }

    public function post_test_option(): HasMany
    {
        return $this->hasMany(PostTestOption::class, 'post_test_question_id');
    }
}
