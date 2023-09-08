<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AssessmentOption extends Model
{
    protected $table = 'assessment_options';

    public function assessment_question(): BelongsTo
    {
        return $this->belongsTo(AssessmentQuestion::class, 'assessment_question_id');
    }

    public function member_assessment_answer(): HasMany
    {
        return $this->hasMany(MemberAssessmentAnswer::class, 'assessment_option_id');
    }
}
