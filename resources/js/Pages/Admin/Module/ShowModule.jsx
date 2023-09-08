import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import BackTo from '../Components/BackTo';

function ShowModule() {
  const { module } = usePage().props;
  const { t } = useTranslation();

  const items = (label, data, type) => {
    return (
      <div className="flex flex-wrap mb-4">
        <div className="w-full lg:w-1/4 mb-3 lg:mb-0">
          <div className="font-bold">{t(label)}</div>
        </div>
        {type === 'video' ? (
          <div className="w-full lg:w-3/4">
            <video
              className="max-h-[200px]"
              controls
              src={`/storage/modules/${data}`}
            />
            <div>{data || '-'}</div>
          </div>
        ) : type === 'image' ? (
          <div className="w-full lg:w-3/4">
            <img className="max-h-[200px]" src={`/storage/modules/${data}`} />
            <div>{data || '-'}</div>
          </div>
        ) : type === 'content' ? (
          <div className="w-full lg:w-3/4">
            <div dangerouslySetInnerHTML={{ __html: data }}></div>
          </div>
        ) : (
          <div className="w-full lg:w-3/4">{data || '-'}</div>
        )}
      </div>
    );
  };
  return (
    <AdminLayout>
      <BackTo link="/admin/module" title="back_to_list_modules" />
      <AdminSection>
        {items('title', module?.title)}
        {items('description', module?.description)}
        {items('author', module?.author)}
        {items('content', module?.content, 'content')}
        {items('image', module?.image, 'image')}
        {items('video', module?.video, 'video')}
        {items('attachment', module?.attachment)}
      </AdminSection>
    </AdminLayout>
  );
}

export default ShowModule;
