import React from 'react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';

function AssessmentResult({ session, member }) {
  const { t } = useTranslation();

  return (
    <MemberLayout>
      <AdminSection>
        <TitleSection title="assessment" className="mb-6" />
        <div className="font-bold text-primary mb-6"></div>
        <div className="text-center text-2xl mb-4">
          {t('congrats_assessment')}
        </div>
        {member.status === 'active' ? (
          <>
            <div className="text-center text-lg mb-4">
              {t('your_assessment_scores')}&nbsp;
              <span className="font-bold text-primary">
                {session?.total_score}
              </span>
            </div>
            <div className="flex flex-col">
              {member?.badge?.image ? (
                <div className="flex flex-col items-center justify-center">
                  <div className="text-lg">
                    {t('your_badge_is')}{' '}
                    <span className="font-bold text-primary">
                      {member?.badge?.name}
                    </span>
                  </div>
                  <img
                    className="max-h-[320px]"
                    src={'/storage/badges/' + member?.badge?.image}
                    alt=""
                  />
                </div>
              ) : (
                <div className="text-center">{t('not_eligible_badge')}</div>
              )}
            </div>
            <PrimaryButton
              as="link"
              href={route('member.assessment.index')}
              className="w-full flex justify-center mt-6"
            >
              {t('back_to_assessment')}
            </PrimaryButton>
          </>
        ) : (
          <>
            <div className="text-center">{t('result_preview_assessment')}</div>
            <PrimaryButton
              as="link"
              href={route('member.dashboard')}
              className="w-full flex justify-center mt-6"
            >
              {t('back_to_dashboard')}
            </PrimaryButton>
          </>
        )}
      </AdminSection>
    </MemberLayout>
  );
}

export default AssessmentResult;
