import React from 'react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';

function ModuleResult({ memberModule, module }) {
  const { t } = useTranslation();

  return (
    <MemberLayout>
      <AdminSection>
        <TitleSection title="e_learning" className="mb-4" />
        <div className="font-bold text-primary mb-6">
          {t('module_learning', { number: memberModule.module_id })}
        </div>
        <div className="mb-6 pb-6 border-b">
          <div className="text-2xl mb-2 font-bold text-primary">
            {t('congrats')}
          </div>
          <p className="text-etbGray">
            {t('congrats_module')} <span>{module.title}</span>{' '}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 mb-6">
          <div className="mb-6 lg:mb-0">
            <div className="mb-3">{t('pre_score')}:&nbsp;</div>
            <div className="font-bold bg-lightPrimary px-6 py-4 rounded-2xl inline-flex text-2xl">
              {parseInt(memberModule.score_pre_test)} / 100
            </div>
          </div>
          <div>
            <div className="mb-3">{t('post_score')}:&nbsp;</div>
            <div className="font-bold bg-lightPrimary px-6 py-4 rounded-2xl inline-flex text-2xl">
              {parseInt(memberModule.score_post_test)} / 100
            </div>
          </div>
        </div>
        <PrimaryButton
          className="w-full flex justify-center mt-6"
          as="link"
          href={route('member.module.index')}
        >
          {t('back_to_list_module')}
        </PrimaryButton>
      </AdminSection>
    </MemberLayout>
  );
}

export default ModuleResult;
