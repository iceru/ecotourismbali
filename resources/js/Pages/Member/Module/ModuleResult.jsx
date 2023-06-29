import React from 'react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';

function ModuleResult({ memberModule }) {
  console.log(memberModule);
  const { t } = useTranslation();

  return (
    <MemberLayout>
      <AdminSection>
        <TitleSection title="e_learning" className="mb-6" />
        <div className="font-bold text-primary mb-6">
          {t('module_learning', { number: memberModule.module_id })}
        </div>
        <div className="text-center text-lg">
          Congratulations you already completed the Module
        </div>
        <div>
          Pre Test Score:&nbsp;
          <span className="font-bold">{memberModule.score_pre_test}</span>
        </div>
        <div>
          Post Test Score:&nbsp;
          <span className="font-bold">{memberModule.score_post_test}</span>
        </div>
        <PrimaryButton className="w-full flex justify-center mt-6">
          {t('back_to_list_module')}
        </PrimaryButton>
      </AdminSection>
    </MemberLayout>
  );
}

export default ModuleResult;
