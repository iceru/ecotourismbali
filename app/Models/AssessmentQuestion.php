<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AssessmentQuestion extends Model
{
    protected $table = 'assessment_questions';

    public function assessment(): BelongsTo
    {
        return $this->belongsTo(Assessment::class, 'assessment_id');
    }

    public function assessment_option(): HasMany
    {
        return $this->hasMany(AssessmentOption::class, 'assessment_question_id');
    }

    public function member_assessment_answer(): HasMany
    {
        return $this->hasMany(MemberAssessmentAnswer::class, 'assessment_question_id');
    }
}
