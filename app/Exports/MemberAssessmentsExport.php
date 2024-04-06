<?php

namespace App\Exports;

use App\Models\MemberAssessment;
use App\Models\AssessmentSession;
use App\Models\MemberAssessmentAnswer;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use App\Models\Member;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithTitle;

class Sheet1Export implements FromQuery, WithMapping, WithHeadings, WithTitle, ShouldAutoSize
{
    use Exportable;

    public function title(): string
    {
        return 'Member Answers';
    }

    public function headings(): array
    {
        return [
            'Title',
            'Question',
            'Answer',
            'Point'
        ];
    }

    public function __construct(int $id)
    {
        $this->id = $id;
    }

    public function query()
    {
        $session = AssessmentSession::where('member_id', $this->id)->where('completion', 'yes')->latest()->first();
        $answers = MemberAssessmentAnswer::query()->where(['member_id' => $this->id, 'assessment_session_id' => $session->id])
        ->with(['assessment_question', 'assessment_option', 'assessment_session', 'member'])->orderBy('assessment_question_id');
        return $answers;
    }

    public function map($answer): array
    {
        return [
            [
                $answer->assessment_question->title,
                str_replace('&nbsp;', ' ', strip_tags($answer->assessment_question->question)),
                $answer->assessment_option->option,
                $answer->assessment_option->point,
            ],
        ];
    }
}

class Sheet2Export implements FromQuery, WithMapping, WithHeadings, WithTitle, ShouldAutoSize
{
    use Exportable;

    public function title(): string
    {
        return 'Member & Total Score';
    }


    public function headings(): array
    {
        return [
            'Member',
            'Email',
            'Name',
            'Job Title',
            'Website',
            'Phone',
            'Address',
            'Business Type',
            'Total Point',
        ];
    }

    public function __construct(int $id)
    {
        $this->id = $id;
    }

    public function query()
    {
        $session = AssessmentSession::query()->where(['member_id' => $this->id, 'completion' => 'yes'])->with(['member']);
        return $session;
    }

    public function map($session): array
    {
        return [
            [
                $session->member->business_name,
                $session->member->user->email,
                $session->member->user->name,
                $session->member->job_title,
                $session->member->website,
                $session->member->phone,
                $session->member->address,
                $session->member->business_type->name,
                $session->total_score
            ],
        ];
    }
}


class Sheet3Export implements FromQuery, WithMapping, WithHeadings, WithTitle, ShouldAutoSize
{
    use Exportable;

    public function title(): string
    {
        return 'Assesments Point';
    }

    public function headings(): array
    {
        return [
            'Assessment Name',
            'Point',
        ];
    }

    public function __construct(int $id)
    {
        $this->id = $id;
    }

    public function query()
    {
        $session = AssessmentSession::where('member_id', $this->id)->where('completion', 'yes')->latest()->first();
        $assessments = MemberAssessment::query()->where(['member_id' => $this->id, 'completion' => 'yes', 'assessment_session_id' => $session->id])->with('assessment');
        return $assessments;
    }

    public function map($assessments): array
    {
        return [
            [
                $assessments->assessment->title,
                $assessments->score,
            ],
        ];
    }
}


class MemberAssessmentsExport implements WithMultipleSheets
{
    public function __construct(int $id)
    {
        $this->id = $id;
    }
    public function sheets(): array
    {
        return [
            'Member' => new Sheet2Export($this->id),
            'Assessment' => new Sheet3Export($this->id),
            'Answers' => new Sheet1Export($this->id),
        ];
    }
}
