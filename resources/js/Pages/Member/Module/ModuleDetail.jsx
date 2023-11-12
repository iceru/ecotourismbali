import React, { useEffect } from 'react';
import AdminSection from '@/Components/AdminSection';
import Button from '@/Components/Button';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import { useTranslation } from 'react-i18next';
import BackTo from '@/Pages/Admin/Components/BackTo';

function ModuleDetail({ module }) {
  const { t, i18n } = useTranslation();

  return (
    <MemberLayout>
      <AdminSection>
        <BackTo
          title="back_to_list_module"
          link={route('member.module.index')}
          className="text-sm"
        />
        {/* {module.member_module[0] &&
          module.member_module[0].completion === 1 && (
            <BackTo
              title="back_to_list_module"
              link={route('member.module.index')}
              className="text-sm"
            />
          )} */}
        <div className="grid">
          <TitleSection title="e_learning" className="mb-3" />
          <div className="font-bold text-primary mb-10">
            {t('module_learning', { number: module.id })}
          </div>
          <div className="text-center font-bold text-xl mb-3">
            {module.title}
          </div>
          <div className="mb-6 text-center text-sm text-gray-700">
            {t('form_label_author')}:{' '}
            <span className="font-bold">{module.author}</span>
          </div>
          <div className="flex justify-center mb-8">
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
            className="text-justify module__content"
            dangerouslySetInnerHTML={{
              __html:
                i18n.language === 'en' ? module.content_en : module.content,
            }}
          ></div>
          {/* {module.member_module[0] &&
          module.member_module[0].completion === 1 ? null : (
            <Button
              as="link"
              href={route('member.module.post-test', module.id)}
              className="flex justify-center mt-6"
            >
              {t('start_post_test')}
            </Button>
          )} */}
        </div>
      </AdminSection>
    </MemberLayout>
  );
}

export default ModuleDetail;
