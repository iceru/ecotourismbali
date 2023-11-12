import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/Components/Button';
import TitlePage from '@/Components/TitlePage';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ForumCard from '@/Components/ForumCard';
import Guest from '@/Layouts/GuestLayout';

function ForumIndex() {
  const { t } = useTranslation();
  return (
    <Guest>
      <main className="grid gap-8 container">
        <section className="flex justify-between flex-wrap items-center">
          <div className="w-full lg:w-fit mb-6 lg:mb-0">
            <TitlePage title="member_forums" className="!mb-0" />
          </div>
          <div>
            <Button as="link" color="primary">
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
            <label htmlFor="sort" className="min-w-[100px]">
              {t('sort')}
            </label>
            <SelectInput />
          </div>
        </section>

        <section className="flex gap-4 flex-wrap">
          <section className="w-full lg:w-1/5 mb-4 lg:mb-0">
            <div className="grid gap-3 border-b pb-3 mb-8 border-lightPrimary">
              <div className="flex items-center px-3.5 py-6 gap-3">
                <FontAwesomeIcon icon={faHome} />
                {t('home')}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-base mb-4">
                {t('most_active_users')}
              </h4>
              <div className="grid gap-6">
                <div className="flex">
                  <img src="" alt="" />
                  Kelapot Indonesia
                </div>
              </div>
            </div>
          </section>

          <section className="w-full lg:w-4/5 grid gap-8 lg:pl-6">
            <ForumCard />
          </section>
        </section>
      </main>
    </Guest>
  );
}

export default ForumIndex;
