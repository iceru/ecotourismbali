import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import Button from '@/Components/Button';

import konten from '../../../../images/hotel/konten.png';
import kontenId from '../../../../images/hotel/kontenId.png';

import kontenRes from '../../../../images/restaurant/konten.png';
import kontenResId from '../../../../images/restaurant/kontenId.png';
import tutorial from '../../../../images/tutorial.mp4';

import moment from 'moment';
import { router } from '@inertiajs/react';

function AssessmentStep({ member, remaining, dateAssessment }) {
  const { t, i18n } = useTranslation();
  const [kontenHotel, setKontenHotel] = useState(konten);
  const [kontenResto, setKontenResto] = useState(kontenRes);

  useEffect(() => {
    if (!member?.status?.includes('active')) {
      router.visit(route('member.dashboard'));
    }
  }, []);

  useEffect(() => {
    if (i18n?.language === 'id') {
      setKontenHotel(kontenId);
      setKontenResto(kontenResId);
    }
  }, [i18n?.language]);
  const business = member?.business_type?.name;

  return (
    <MemberLayout>
      {remaining > 0 ? (
        <AdminSection>
          <div>
            <div className="px-4 py-3 bg-lightSecondary rounded-md inline-flex mb-4">
              {member?.status?.includes('active')
                ? t('eligible_assessment', { number: remaining })
                : t('trial_assessment', { number: remaining })}
            </div>
          </div>
          <TitleSection title="assessment" className="mb-6" />
          <div className="text-center mb-6">
            <video src={tutorial} controls />
          </div>
          <div className="text-center">
            <TitleSection title="short_tutorial" className="mb-2 !text-2xl" />
            <p className="mb-8">{t('short_tutorial_text')}</p>
          </div>

          <div className="lg:w-[80%] m-auto">
            {/* <h4 className="mb-4 text-xl font-bold">{t('content_tutorial')}</h4> */}
            <div>
              <img src={business === 'Hotel' ? kontenHotel : kontenResto} />
            </div>
          </div>
          <Button
            as="link"
            href={route('member.assessment.data')}
            className="flex w-full justify-center p-5 mt-6 text-lg"
          >
            {t('next')}
          </Button>
        </AdminSection>
      ) : (
        <AdminSection className="grid gap-6">
          <div className="px-4 py-3 bg-red-300 rounded-md inline-flex">
            {t('not_eligible_assessment', { number: remaining })}
          </div>
          <div className="text-center text-lg">{t('cant_assessment')}</div>
          <div className="text-center text-2xl text-primary">
            {moment(dateAssessment).format('LL')}
          </div>
        </AdminSection>
      )}
    </MemberLayout>
  );
}

export default AssessmentStep;
