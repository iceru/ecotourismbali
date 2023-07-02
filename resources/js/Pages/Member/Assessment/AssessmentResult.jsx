import React from 'react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';

function AssessmentResult({ session, assessments }) {
  const { t } = useTranslation();

  console.log(assessments);

  return (
    <MemberLayout>
      <AdminSection>
        <TitleSection title="e_learning" className="mb-6" />
        <div className="font-bold text-primary mb-6"></div>
        <div className="text-center text-lg">{t('congrats_assessment')}</div>
        <div className="text-center">
          {t('your_assessment_scores')}&nbsp;
          <span className="font-bold">100</span>
        </div>
        <PrimaryButton
          as="link"
          href={route('member.assessment.index')}
          className="w-full flex justify-center mt-6"
        >
          {t('back_to_assessment')}
        </PrimaryButton>
      </AdminSection>
    </MemberLayout>
  );
}

export default AssessmentResult;
