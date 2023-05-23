<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Assessment extends Model
{
    protected $table = 'assessments';
    
    public function member_assessment(): HasMany
    {
        return $this->hasMany(MemberAssessment::class, 'assessment_id');
    }
    
    public function assessment_question(): HasMany
    {
        return $this->hasMany(AssessmentQuestion::class, 'assessment_id');
    }
}
