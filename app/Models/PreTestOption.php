<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PreTestOption extends Model
{
    protected $table = 'pre_test_options';

    public function pre_test_question(): BelongsTo
    {
        return $this->belongsTo(PreTestQuestion::class, 'pre_test_question_id');
    }

    public function pre_test_module_answer(): HasMany
    {
        return $this->hasMany(PreTestModuleAnswer::class, 'pre_test_option_id');
    }
}
