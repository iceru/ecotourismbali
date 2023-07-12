import React from 'react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';
import { badgeColor } from '@/Helper/BadgeColor';

function AssessmentResult({ session, member }) {
  const { t } = useTranslation();

  return (
    <MemberLayout>
      <AdminSection>
        <TitleSection title="assessment" className="mb-6" />
        <div className="font-bold text-primary mb-6"></div>

        <div className="mb-6 pb-6 border-b">
          <div className="text-2xl mb-2 font-bold text-primary">
            {t('congrats')}
          </div>
          <p className="text-etbGray">{t('finish_assessment')}</p>
        </div>
        {member.status === 'active' ? (
          <>
            <div className="grid lg:grid-cols-2">
              <div className="mb-4 lg:mb-0">
                <div className="mb-4">{t('your_assessment_scores')}&nbsp;</div>
                <div className="px-6 py-4 bg-lightPrimary text-3xl font-bold rounded-2xl inline-flex">
                  {session?.total_score}
                </div>
              </div>
              <div className="flex flex-col">
                {member?.badge?.image ? (
                  <div className="justify-center">
                    <div className="mb-4">{t('your_badge_is')}</div>
                    <div className="flex items-center">
                      <div>
                        <img
                          className="max-h-[120px] mr-4"
                          src={'/storage/badges/' + member?.badge?.image}
                          alt=""
                        />
                      </div>
                      <div>
                        <div
                          className={
                            'font-bold  text-2xl ' +
                            badgeColor(member.badge.name, 'text')
                          }
                        >
                          {member?.badge?.name}
                        </div>
                        <p>Badge</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">{t('not_eligible_badge')}</div>
                )}
              </div>
            </div>

            <PrimaryButton
              as="link"
              href={route('member.assessment.index')}
              className="w-full flex justify-center mt-6"
            >
              {t('back_to_dashboard')}
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
