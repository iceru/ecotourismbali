<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PostTestOption extends Model
{
    protected $table = 'post_test_options';

    public function post_test_question(): BelongsTo
    {
        return $this->belongsTo(PostTestQuestion::class, 'post_test_question_id');
    }

    public function post_test_module_answer(): HasMany
    {
        return $this->hasMany(PostTestModuleAnswer::class, 'post_test_option_id');
    }
}
