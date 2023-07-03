import React from 'react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';

function ModuleResult({ memberModule }) {
  const { t } = useTranslation();

  return (
    <MemberLayout>
      <AdminSection>
        <TitleSection title="e_learning" className="mb-6" />
        <div className="font-bold text-primary mb-6">
          {t('module_learning', { number: memberModule.module_id })}
        </div>
        <div className="text-center text-lg mb-4">{t('congrats_module')}</div>
        <div className="text-center text-lg mb-2">
          Pre Test Score:&nbsp;
          <span className="font-bold text-primary">
            {parseInt(memberModule.score_pre_test)}
          </span>
        </div>
        <div className="text-center text-lg">
          Post Test Score:&nbsp;
          <span className="font-bold text-primary">
            {parseInt(memberModule.score_post_test)}
          </span>
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
