import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/Components/Button';
import Guest from '@/Layouts/GuestLayout';

function TopicDetail({ topic }) {
  const { t } = useTranslation();
  return (
    <Guest>
      <main className="grid gap-8 container">
        <section className="flex items-center gap-3">
          <a href="" className="text-primary">
            {t('member_forums')}
          </a>
          <div>/</div>
          <div className="font-bold">{topic.title}</div>
        </section>
        <section className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">{topic?.title}</h1>
          <Button color="lightPrimary">
            <div>Report Topics</div>
          </Button>
        </section>
        <section className="grid gap-4">
          <div className="p-6 rounded-xl bg-lightPrimary flex bg-opacity-50">
            <div className="lg:w-1/5 flex">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                Kelapot Indonesia
                <div className="flex">
                  <img src="" alt="" />
                  Gold Member
                </div>
              </div>
            </div>
            <div className="lg:w-4/5">
              <div className="font-bold text-sm">{topic?.date}</div>
              <div>{topic?.content}</div>
            </div>
          </div>
        </section>
      </main>
    </Guest>
  );
}

export default TopicDetail;
