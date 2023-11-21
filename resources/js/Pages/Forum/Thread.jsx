import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/Components/Button';
import Guest from '@/Layouts/GuestLayout';
import { Link } from '@inertiajs/react';
import moment from 'moment';
import { badgeColor } from '@/Helper/BadgeColor';

function Thread({ thread }) {
  const { t } = useTranslation();
  console.log(thread);
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
        <section className="grid gap-4">
          <div className="p-6 rounded-xl bg-lightPrimary flex bg-opacity-30 shadow-lg flex-wrap">
            <div className="w-full lg:w-1/5 flex mb-4 lg:mb-0">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <h4 className="text-lg font-bold">
                  {thread?.member?.business_name}
                </h4>
                <div className="flex gap-2 items-center">
                  <div>
                    <img
                      className="max-h-[32px]"
                      src={'/storage/badges/' + thread?.member?.badge?.image}
                    />
                  </div>
                  <div
                    className={`text-center whitespace-nowrap  ${badgeColor(
                      thread?.member?.badge?.name,
                      'text'
                    )}`}
                  >
                    {thread?.member?.badge?.name} Member
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/5">
              <div className="font-bold text-sm text-primary mb-2">
                {moment(thread?.created_at).format('LLL')}
              </div>
              <div>{thread?.text}</div>
            </div>
          </div>
        </section>
      </main>
    </Guest>
  );
}

export default Thread;
