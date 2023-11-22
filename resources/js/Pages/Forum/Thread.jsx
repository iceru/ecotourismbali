import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/Components/Button';
import Guest from '@/Layouts/GuestLayout';
import { Link } from '@inertiajs/react';
import moment from 'moment';
import { badgeColor } from '@/Helper/BadgeColor';
import Comment from './Components/Comment';

function Thread({ thread, comments, member }) {
  const { t } = useTranslation();

  console.log(comments);

  return (
    <Guest>
      <main className="grid gap-8 container">
        <section className="flex items-center gap-3">
          <Link href={route('member.forum.index')} className="text-primary">
            {t('member_forums')}
          </Link>
          <div>/</div>
          <div className="font-bold">{thread?.title}</div>
        </section>
        <section className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">{thread?.title}</h1>
          <Button color="lightPrimary">
            <div>{t('report_topics')}</div>
          </Button>
        </section>
        <section className="grid gap-6">
          <Comment comment={thread} type="thread" />
          {comments &&
            comments?.map(comment => {
              return <Comment comment={comment} member={member} />;
            })}
          <Comment type="input" member={member} thread={thread} />
        </section>
      </main>
    </Guest>
  );
}

export default Thread;
