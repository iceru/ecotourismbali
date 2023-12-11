<?php

namespace App\Models;

use App\Models\Member;
use App\Models\MemberAssessment;
use App\Models\MemberAssessmentAnswer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AssessmentSession extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = ['member_id'];

    public function member_assessment(): HasMany
    {
        return $this->hasMany(MemberAssessment::class, 'assessment_session_id');
    }

    public function member_assessment_answer(): HasMany
    {
        return $this->hasMany(MemberAssessmentAnswer::class, 'assessment_session_id');
    }
    
    /**
     * Get the member that owns the AssessmentSession
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class, 'member_id');
    }
}
