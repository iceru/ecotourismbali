<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Member extends Model
{
    protected $table = 'members';

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class, 'program_id');
    }

    public function badge(): BelongsTo
    {
        return $this->belongsTo(Badge::class, 'badge_id');
    }

    public function verified_badge(): BelongsTo
    {
        return $this->belongsTo(VerifiedBadge::class, 'verified_badge_id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function business_type(): BelongsTo
    {
        return $this->belongsTo(BusinessType::class, 'business_type_id');
    }

    public function member_slider(): HasMany
    {
        return $this->hasMany(MemberSlider::class, 'member_id');
    }

    public function member_payment(): HasMany
    {
        return $this->hasMany(MemberPayment::class, 'member_id');
    }

    public function member_assessment(): HasMany
    {
        return $this->hasMany(MemberAssessment::class, 'member_id');
    }

    public function member_assessment_answer(): HasMany
    {
        return $this->hasMany(MemberAssessmentAnswer::class, 'member_id');
    }
}
