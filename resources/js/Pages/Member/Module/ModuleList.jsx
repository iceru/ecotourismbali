import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import Button from '@/Components/Button';

function ModuleList({ modules }) {
  const { t } = useTranslation();

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  }

  return (
    <MemberLayout>
      <AdminSection>
        <TitleSection title="e_learning" className="mb-6" />
        <h1 className="mb-6 text-center font-bold text-primary text-2xl">
          {t('list_modules')}
        </h1>
        <section className="grid lg:grid-cols-2 gap-6">
          {modules?.map(module => {
            return (
              <div className="p-6  bg-lightPrimary bg-opacity-50 rounded-2xl flex flex-wrap lg:flex-nowrap">
                <div className="mr-4 lg:w-fit shrink-0 w-full mb-4 lg:mb-0">
                  <img
                    className="max-w-[130px] object-cover object-center"
                    src={'/storage/modules/' + module?.image}
                    alt=""
                  />
                </div>
                <div className=" w-full">
                  <div className="text-xl font-bold mb-3 flex items-center">
                    {module?.title}
                    {/* {module?.member_module[0] &&
                      module?.member_module[0].completion === 1 && (
                        <span className="rounded-3xl ml-3 text-xs py-1 px-3 bg-secondary inline-block text-white">
                          {t('finished')}
                        </span>
                      )} */}
                  </div>
                  <div className="mb-3 text-sm" title={module?.description}>
                    {truncateString(module.description, 80)}
                  </div>
                  {/* {module?.member_module[0] &&
                  module?.member_module[0].completion === 1 ? (
                    <Button
                      as="link"
                      href={route('member.module.detail', module?.id)}
                    >
                      {t('read_material')}
                    </Button>
                  ) : (
                    <Button
                      as="link"
                      href={route('member.module.pre-test', module?.id)}
                    >
                      {t('start_learning')}
                    </Button>
                  )} */}
                  <Button
                    as="link"
                    href={route('member.module.detail', module?.id)}
                  >
                    {t('read_material')}
                  </Button>
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
