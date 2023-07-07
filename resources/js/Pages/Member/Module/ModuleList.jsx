import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';
import { router } from '@inertiajs/react';

function ModuleList({ modules }) {
  const { t } = useTranslation();
  console.log(modules[0].completed);
  return (
    <MemberLayout>
      <AdminSection>
        <TitleSection title="e_learning" className="mb-6" />
        <h1 className="mb-6 text-center font-bold text-primary text-2xl">
          {t('list_modules')}
        </h1>
        <section className="grid lg:grid-cols-2">
          {modules?.map(module => {
            return (
              <div className="p-6  bg-lightPrimary bg-opacity-50 rounded-2xl flex">
                <div className="mr-4 lg:w-1/3">
                  <img src={'/storage/modules/' + module.image} alt="" />
                </div>
                <div className="lg:w-2/3">
                  <div className="text-xl font-bold mb-3 flex items-center">
                    {module.title}
                    {module.member_module[0] && module.member_module[0].completion === 1 && (
                      <span className="rounded-3xl ml-3 text-xs py-1 px-3 bg-secondary inline-block text-white">
                        {t('finished')}
                      </span>
                    )}
                  </div>
                  <div className="mb-3 text-sm">{module.description}</div>
                  {module.member_module[0] && module.member_module[0].completion === 1 ? (
                    <PrimaryButton
                      as="link"
                      href={route('member.module.detail', module.id)}
                    >
                      {t('read_material')}
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton
                      as="link"
                      href={route('member.module.pre-test', module.id)}
                    >
                      {t('start_learning')}
                    </PrimaryButton>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </AdminSection>
    </MemberLayout>
  );
}

export default ModuleList;
