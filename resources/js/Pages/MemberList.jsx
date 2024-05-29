import React, { useEffect, useState } from 'react';
import Guest from '@/Layouts/GuestLayout';
import { useTranslation } from 'react-i18next';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import Button from '@/Components/Button';
import { Head, Link, router } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
import queryString from 'query-string';
import TitlePage from '@/Components/TitlePage';
import MemberItem from './MemberItem';

function MemberList({ programs, categories, badges, members, tribe }) {
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

  const { t } = useTranslation();
  const [category, setCategory] = useState('all');
  const [program, setProgram] = useState();
  const [badge, setBadge] = useState();
  const [keyword, setKeyword] = useState();
  const [sort, setSort] = useState(sorts[0].value);
  const [payload, setPayload] = useState({});

  console.log(programs);

  const filterData = ({ programData }) => {
    const value = {
      ...payload,
      program: programData || null,
      badge: badge || null,
      keyword,
      category,
    };
    setPayload(value);
    router.post(
      route(
        'member.filter',
        Object.fromEntries(Object.entries(value).filter(([_, v]) => v != null))
      ),
      value
    );
  };
  const qs = queryString.parse(location.search);

  useEffect(() => {
    const filterObject = {
      program: qs.program,
      badge: qs.badge,
      keyword: qs.keyword,
      category: qs.category,
    };

    if (qs.category && qs.category !== 'all') {
      setCategory(parseInt(qs.category));
    }

    qs.program && setProgram(qs.program);
    qs.badge && setBadge(qs.badge);
    qs.keyword && setKeyword(qs.keyword);

    if (!qs.page) {
      setTimeout(() => {
        router.post(
          route(
            'member.filter',
            Object.fromEntries(
              Object.entries(filterObject).filter(([_, v]) => v != null)
            )
          ),
          filterObject
        );
      }, 1000);
    }
  }, []);

  const changeCategory = cat => {
    const value = {
      ...payload,
      category: cat,
    };
    setCategory(cat);
    router.post(route('member.filter', { category: category }), value);
  };

  const changeSort = data => {
    const value = {
      ...payload,
      sort: data,
    };
    setSort(data);
    router.post(route('member.filter'), value);
  };

  return (
    <Guest>
      <Head title="Member List" />
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <img
            src={`/storage/programs/${tribe?.image}`}
            className="w-20 h-20 object-contain"
            alt=""
          />
          <div>
            <h1 className="text-3xl font-bold mb-1">{tribe?.name}</h1>
            <p className="lg:max-w-[75%]">{tribe?.description}</p>
          </div>
        </div>
        <div className="flex gap-8 items-start">
          {programs?.map(program => {
            return (
              <button
                type="button"
                onClick={() => {
                  filterData({
                    programData: program?.id ? parseInt(program?.id) : null,
                  });
                }}
                className="text-center"
              >
                <img
                  src={`/storage/programs/${program?.image}`}
                  className="w-20 h-20 object-contain mb-1 mx-auto hover:scale-105 transition"
                  alt=""
                />
                <p className="font-bold w-20 text-center">{program?.name}</p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap justify-between mb-6 pb-6 border-b">
        <div className="mb-6 lg:mb-0 lg:w-3/4 lg:pr-4">
          <div className="font-bold mb-2 text-lg">{t('filter')}</div>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="flex w-full lg:w-auto">
              {/* <div className="flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0">
                <InputLabel
                  className="mr-4 w-1/4 lg:w-auto"
                  value={t('program')}
                />
                <SelectInput
                  options={programs}
                  labelData="name"
                  valueData="id"
                  value={program}
                  className="w-full"
                  onChange={e => setProgram(parseInt(e.target.value))}
                >
                  <option value="">{t('select_program')}</option>
                </SelectInput>
              </div> */}
              {tribe?.id === 1 && (
                <div className="flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0">
                  <InputLabel
                    className="mr-4 w-1/4 lg:w-auto"
                    value={t('badge')}
                  />
                  <SelectInput
                    options={badges}
                    value={badge}
                    labelData="name"
                    valueData="id"
                    className="w-full"
                    onChange={e => setBadge(parseInt(e.target.value))}
                  >
                    <option value="">{t('select_badge')}</option>
                  </SelectInput>
                </div>
              )}
              <div className="flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0">
                <InputLabel
                  className="mr-4 w-1/4 lg:w-auto"
                  value={t('keyword')}
                />
                <TextInput
                  className="w-full"
                  value={keyword}
                  onChange={e => setKeyword(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-auto">
              <Button onClick={filterData}>{t('filter')}</Button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 ">
          <div className="ml-auto lg:w-3/4">
            <div className="font-bold mb-2 text-lg inline-flex">
              {t('sort')}
            </div>
            <div className="flex">
              <div className="flex items-center">
                <SelectInput
                  options={sorts}
                  onChange={e => changeSort(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        {tribe.id === 1 && (
          <div className="sidebar w-full lg:w-1/6">
            <ul className="text-gray-600 font-light flex lg:block whitespace-nowrap overflow-auto gap-4 mb-6 lg:mb-0 pb-4">
              <li
                className={`cursor-pointer lg:mb-6 ${
                  category === 'all' ? 'font-bold text-primary' : ''
                }`}
                onClick={() => changeCategory('all')}
              >
                {t('all')}
              </li>
              {categories?.map(cat => {
                return (
                  <li
                    onClick={() => changeCategory(cat.id)}
                    id={cat.id}
                    className={`cursor-pointer lg:mb-6 whitespace-nowrap lg:whitespace-break-spaces ${
                      category === cat.id ? 'font-bold text-primary' : ''
                    }`}
                  >
                    {t(cat.name)}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className={`${tribe?.id === 1 ? 'lg:w-5/6 lg:pl-6' : 'w-full'}`}>
          <div
            className={`${
              tribe?.id === 1 ? 'xl:grid-cols-3' : 'xl:grid-cols-4'
            } grid md:grid-cols-2 gap-4 h-fit`}
          >
            {members?.data?.length > 0 ? (
              members?.data?.map(member => {
                return <MemberItem member={member} tribe={tribe} />;
              })
            ) : (
              <div className="">
                <h3 className=" text-primary font-xl ">Not Found</h3>
              </div>
            )}
          </div>
          <Pagination class="mt-6" links={members?.links} />
        </div>
      </div>
    </Guest>
  );
}

export default MemberList;
