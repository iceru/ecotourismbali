<?php

namespace App\Models;

use App\Models\MemberAssessment;
use App\Models\MemberAssessmentAnswer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
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
}
