<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PostTestModuleAnswer extends Model
{
    protected $table = 'post_test_module_answers';
    protected $fillable = ['member_id'];

    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    public function post_test_question(): BelongsTo
    {
        return $this->belongsTo(PostTestQuestion::class, 'post_test_question_id');
    }
    
    public function post_test_option(): BelongsTo
    {
        return $this->belongsTo(PostTestOption::class, 'post_test_option_id');
    }

}
