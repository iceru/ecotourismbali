import React from 'react';
import { useTranslation } from 'react-i18next';

function ForumCard({ topic }) {
  const { t } = useTranslation();
  return (
    <div className="p-6 drop-shadow-lg bg-white rounded-2xl even:bg-lightPrimary even:bg-opacity-50">
      <div className="grid gap-3 mb-6 pb-6 border-b border-lightPrimary">
        <div>{topic?.date}</div>
        <h3>{topic?.title}</h3>
        <p>{topic?.description}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <img src="" alt="" />
          Kelapot Indonesia
        </div>
        <div className="flex text-primary items-center">
          {topic?.comments} {t('comments')}
        </div>
      </div>
    </div>
  );
}

export default ForumCard;
