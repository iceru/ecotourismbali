import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { usePage } from '@inertiajs/react';
import Lottie from 'lottie-react';
import { saveAs } from 'file-saver';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import Button from '@/Components/Button';

import confetti from '../../../../images/confetti2.json';
import ResultPdf from './ResultPdf';
import Speedometer from '@/Components/Speedometer';

function AssessmentResult({ session, member, scores, totalMaxPoints }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  useEffect(() => {
    localStorage.clear('assessment');
  }, []);

  return (
    <MemberLayout>
      {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] z-0 h-[600px]">
        <Lottie
          animationData={confetti}
          loop={3}
          height={500}
          className="w-full h-full"
        />
      </div> */}
      {flash.success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl relative mb-3">
          <span className="inline">{flash.success}</span>
        </div>
      )}
      <AdminSection>
        <TitleSection title="assessment" className="mb-6" />

        <div className="mb-6 pb-6 border-b text-center relative z-[2]">
          <div className="text-3xl font-bold text-primary mb-4">
            {t('congrats')}
          </div>
          <p className="lg:w-2/3 text-start lg:text-center mx-auto py-4 px-6 rounded-lg mb-4 bg-lightPrimary text-primary">
            {t('finish_assessment_text')}
          </p>
          <p className="lg:w-2/3 mx-auto mb-2 text-primary text-lg font-bold">
            {t('obtain_score')}
          </p>

          <Button
            as="link"
            color="secondary"
            href={route('member.assessment.verifyEmail', session.id)}
            className="!px-12 flex justify-center text-lg"
          >
            {t('notify_us')}
          </Button>
        </div>
        {member?.status?.includes('active') ? (
          <div className="relative">
            <div className="relative z-[2] lg:mb-10">
              <div className="grid gap-6 xl:w-[80%] mx-auto">
                <div className="mb-4 pb-6 lg:pb-0 lg:mb-0 text-center grid lg:grid-cols-2 items-center">
                  <div className="mb-6 lg:mb-0">
                    <div className="mb-4 font-bold">
                      {t('your_assessment_scores')}&nbsp;
                    </div>
                    <div className=" text-7xl text-primary font-bold rounded-2xl inline-flex items-end mb-4">
                      <span>{session?.total_score}</span>&nbsp;
                      <span className="text-5xl text-gray-500">
                        / {totalMaxPoints}
                      </span>
                    </div>

                    <ResultPdf
                      scores={scores}
                      member={member}
                      session={session}
                    />
                  </div>

                  <Speedometer
                    score={session?.total_score}
                    maxScore={totalMaxPoints}
                  />
                </div>
              </div>
            </div>
            <Button
              as="link"
              href={route('member.dashboard')}
              className="w-full flex justify-center mt-6 relative z-5"
            >
              {t('back_to_dashboard')}
            </Button>
          </div>
        ) : (
          <>
            <div className="text-center">{t('result_preview_assessment')}</div>
            <Button
              as="link"
              href={route('member.dashboard')}
              className="w-full flex justify-center mt-6"
            >
              {t('back_to_dashboard')}
            </Button>
          </>
        )}
      </AdminSection>
    </MemberLayout>
  );
}

export default AssessmentResult;
