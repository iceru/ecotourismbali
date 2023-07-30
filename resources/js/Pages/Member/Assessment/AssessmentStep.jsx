import React from 'react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';

import konten from '../../../../images/hotel/konten.png';
import form from '../../../../images/hotel/form.png';
import PrimaryButton from '@/Components/PrimaryButton';

function AssessmentStep() {
  const { t } = useTranslation();
  return (
    <MemberLayout>
      <AdminSection>
        <TitleSection title="assessment" />

        <div className="text-center">
          <TitleSection title="short_tutorial" className="mb-2 !text-2xl" />
          <p className="mb-8">{t('short_tutorial_text')}</p>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-bold">{t('content_tutorial')}</h4>
          <div>
            <img src={konten} />
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-xl font-bold">{t('form_tutorial')}</h4>
          <div>
            <img src={form} />
          </div>
        </div>
        <PrimaryButton
          as="link"
          href={route('member.assessment.data')}
          className="flex w-full justify-center p-5 mt-6 text-lg"
        >
          {t('next')}
        </PrimaryButton>
      </AdminSection>
    </MemberLayout>
  );
}

export default AssessmentStep;
