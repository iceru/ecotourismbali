<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PreTestQuestion extends Model
{
    protected $table = 'pre_test_questions';

    public function module(): BelongsTo
    {
        return $this->belongsTo(Module::class, 'module_id');
    }

    public function pre_test_option(): HasMany
    {
        return $this->hasMany(PreTestOption::class, 'pre_test_question_id');
    }
}
