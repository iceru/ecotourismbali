<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; // 1. Import the trait
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AssessmentOption extends Model
{
    use HasFactory, SoftDeletes; // 2. Use the trait here

    protected $table = 'assessment_options';

    // To ensure the deleted_at column is treated as a Carbon instance
    protected $dates = ['deleted_at'];

    public function assessment_question(): BelongsTo
    {
        return $this->belongsTo(AssessmentQuestion::class, 'assessment_question_id');
    }

    public function member_assessment_answer(): HasMany
    {
        return $this->hasMany(MemberAssessmentAnswer::class, 'assessment_option_id');
    }
}