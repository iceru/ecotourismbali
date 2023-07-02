<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PreTestModuleAnswer extends Model
{
    protected $table = 'pre_test_module_answers';

    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    public function pre_test_question(): BelongsTo
    {
        return $this->belongsTo(PreTestQuestion::class, 'pre_test_question_id');
    }
    
    public function pre_test_option(): BelongsTo
    {
        return $this->belongsTo(PreTestOption::class, 'pre_test_option_id');
    }

}
