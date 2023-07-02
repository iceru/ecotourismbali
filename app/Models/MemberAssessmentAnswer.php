<?php

namespace App\Models;

use App\Models\AssessmentSession;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MemberAssessmentAnswer extends Model
{
    protected $table = 'member_assessment_answers';
    protected $fillable = ['member_id'];

    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class, 'member_id');
    }
    
    public function assessment_question(): BelongsTo
    {
        return $this->belongsTo(AssessmentQuestion::class, 'assessment_question_id');
    }

    public function assessment_option(): BelongsTo
    {
        return $this->belongsTo(AssessmentOption::class, 'assessment_option_id');
    }

    public function assessment_session(): BelongsTo
    {
        return $this->belongsTo(AssessmentSession::class, 'assessment_session_id');
    }
}
