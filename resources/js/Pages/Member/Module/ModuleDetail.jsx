import React, { useEffect } from 'react';
import AdminSection from '@/Components/AdminSection';
import PrimaryButton from '@/Components/PrimaryButton';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import { useTranslation } from 'react-i18next';
import BackTo from '@/Pages/Admin/Components/BackTo';

function ModuleDetail({ module, memberModule }) {
  const { t } = useTranslation();

  return (
    <MemberLayout>
      <AdminSection>
        {module.complete && (
          <BackTo
            title="back_to_list_module"
            link={route('member.module.index')}
          />
        )}
        <div className="grid gap-6">
          <TitleSection title="e_learning" />
          <div className="font-bold text-primary">
            {t('module_learning', { number: module.id })}
          </div>
          <div className="text-center font-bold text-xl">{module.title}</div>
          <div className="flex justify-center">
            {module.video ? (
              <video
                src={`/storage/modules/${module.video}`}
                alt={module.name}
                controls
              />
            ) : (
              <img src={`/storage/modules/${module.image}`} alt={module.name} />
            )}
          </div>
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: module.content }}
          ></div>
          {!module.complete && (
            <PrimaryButton
              as="link"
              href={route('member.module.post-test', module.id)}
              className="flex justify-center"
            >
              {t('start_post_test')}
            </PrimaryButton>
          )}
        </div>
      </AdminSection>
    </MemberLayout>
  );
}

export default ModuleDetail;
