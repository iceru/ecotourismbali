import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import queryString from 'query-string';

import Button from '@/Components/Button';
import TitlePage from '@/Components/TitlePage';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import ForumCard from '@/Pages/Forum/Components/ForumCard';
import Guest from '@/Layouts/GuestLayout';
import { router } from '@inertiajs/react';

function ForumIndex({ threads }) {
  const { t } = useTranslation();
  const [category, setCategory] = useState();
  const [payload, setPayload] = useState({});
  const [keyword, setKeyword] = useState();
  const [sort, setSort] = useState();
  const qs = queryString.parse(location.search);

  useEffect(() => {
    if (qs?.keyword) {
      setKeyword(qs?.keyword);
    }
    if (qs?.category) {
      setCategory(qs?.category);
    } else {
      setCategory('home');
    }

    if (qs?.sort) {
      setSort(qs?.sort);
    }
  }, []);

  const sorts = [
    {
      label: 'Date - Ascending',
      value: 'date-ascending',
    },
    {
      label: 'Date - Descending',
      value: 'date-descending',
    },
    {
      label: 'Name - Ascending',
      value: 'name-ascending',
    },
    {
      label: 'Name - Descending',
      value: 'name-descending',
    },
  ];

  const searchKeyword = () => {
    const value = {
      ...payload,
      keyword,
    };
    setPayload(value);
    router.get(route('member.forum.index', value));
  };

  const changeSort = data => {
    const value = {
      ...payload,
      sort: data,
    };
    setPayload(value);
    router.get(route('member.forum.index'), value);
  };

  const selectCategory = title => {
    setCategory(title);
    const value = {
      ...payload,
      category: title,
    };
    setPayload(value);
    router.get(route('member.forum.index'), value);
  };

  console.log(category);

  const MenuItem = ({ title, icon }) => {
    return (
      <button
        onClick={() => selectCategory(title)}
        className={`flex items-center p-3 mb-1 gap-3 border-l-[10px] border-l-transparent rounded ${
          category === title &&
          'bg-lightPrimary text-primary  !border-l-primary font-bold'
        }`}
      >
        <FontAwesomeIcon icon={icon} className="fa-fw" />
        {t(title)}
      </button>
    );
  };

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
            <TextInput
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
            />
            <Button onClick={searchKeyword}>{t('search')}</Button>
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="sort" className="min-w-[100px] lg:min-w-fit">
              {t('sort')}
            </label>
            <SelectInput
              options={sorts}
              value={sort}
              onChange={e => changeSort(e.target.value)}
            />
          </div>
        </section>

        <section className="flex gap-4 flex-wrap lg:flex-nowrap">
          <section className="w-full lg:w-1/5 mb-4 lg:mb-0">
            <div className="grid gap-3 border-b pb-3 mb-8 border-lightPrimary">
              <MenuItem title="home" icon={faHome} />
              <MenuItem title="my_topics" icon={faUser} />
              <MenuItem title="announcements" icon={faInfoCircle} />
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
