import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/Components/Button';
import TitlePage from '@/Components/TitlePage';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faUser,
  faWarning,
} from '@fortawesome/free-solid-svg-icons';
import ForumCard from '@/Components/ForumCard';
import Guest from '@/Layouts/GuestLayout';
import { Link } from '@inertiajs/react';

function ForumIndex({ threads }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState();

  const sorts = [
    {
      label: 'Name - Ascending',
      value: 'name-ascending',
    },
    {
      label: 'Name - Descending',
      value: 'name-descending',
    },
  ];

  return (
    <Guest>
      <main className="grid gap-8 container">
        <section className="flex justify-between flex-wrap items-center">
          <div className="w-full lg:w-fit mb-6 lg:mb-0">
            <TitlePage title="member_forums" className="!mb-0" />
          </div>
          <div>
            <Button
              as="link"
              href="/member/forum/thread/create"
              color="primary"
            >
              {t('start_new_topic')}
            </Button>
          </div>
        </section>

        <section className="flex justify-between items-center flex-wrap">
          <div className="flex w-full lg:w-fit mb-4 lg:mb-0 gap-3 items-center">
            <label htmlFor="search_topic" className="min-w-[100px]">
              {t('search_topic')}
            </label>
            <TextInput />
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="sort" className="min-w-[100px] lg:min-w-fit">
              {t('sort')}
            </label>
            <SelectInput options={sorts} />
          </div>
        </section>

        <section className="flex gap-4 flex-wrap lg:flex-nowrap">
          <section className="w-full lg:w-1/5 mb-4 lg:mb-0">
            <div className="grid gap-3 border-b pb-3 mb-8 border-lightPrimary">
              <Link
                className={`flex items-center p-3 mb-1 gap-3 border-l-[10px] rounded ${
                  !filter &&
                  'bg-lightPrimary text-primary  border-l-primary font-bold'
                }`}
              >
                <FontAwesomeIcon icon={faHome} className="fa-fw" />
                {t('home')}
              </Link>
              <Link
                className={`flex items-center p-3 mb-1 gap-3 rounded border-l-[10px] border-l-transparent ${
                  filter === 'myTopics' &&
                  'bg-lightPrimary text-primary border-l-primary font-bold'
                }`}
              >
                <FontAwesomeIcon icon={faUser} className="fa-fw" />
                {t('my_topics')}
              </Link>
              <Link
                className={`flex items-center p-3 gap-3 rounded border-l-[10px] border-l-transparent ${
                  filter === 'announcements' &&
                  'bg-lightPrimary text-primary border-l-primary font-bold'
                }`}
              >
                <FontAwesomeIcon icon={faInfoCircle} className="fa-fw" />
                {t('announcements')}
              </Link>
            </div>
            <div>
              <h4 className="font-bold text-base mb-4">
                {t('most_active_users')}
              </h4>
              <div className="grid gap-6">
                <div className="flex">
                  <img src="" alt="" />
                  Codeomnia
                </div>
              </div>
            </div>
          </section>

          <section className="w-full lg:w-4/5 grid gap-8 lg:pl-6">
            {threads.map(thread => {
              return <ForumCard thread={thread} />;
            })}
          </section>
        </section>
      </main>
    </Guest>
  );
}

export default ForumIndex;
