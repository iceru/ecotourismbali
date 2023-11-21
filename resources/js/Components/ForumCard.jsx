import { Link } from '@inertiajs/react';
import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';

function ForumCard({ thread }) {
  const { t } = useTranslation();

  return (
    <Link
      href={route('member.forum.thread.show', thread?.id)}
      className="p-6 drop-shadow-lg block pointer hover:scale-[101%] cursor-pointer transition bg-white rounded-2xl even:bg-lightPrimary even:bg-opacity-50"
    >
      <div className="grid gap-3 mb-6 pb-6 border-b border-lightPrimary">
        <h3 className="font-bold text-2xl">{thread?.title}</h3>
        <div className="text-sm text-gray-400">
          {moment(thread?.created_at).format('LLL')}
        </div>
        <p>{thread?.text}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={`/storage/member/images/${thread?.member?.image}`}
            className="h-[28px]"
            alt=""
          />
          {thread?.member?.business_name}
        </div>
        <div className="flex text-primary items-center">
          {thread?.total_comments || 0} {t('comments')}
        </div>
      </div>
    </Link>
  );
}

export default ForumCard;
