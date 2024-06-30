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
import MemberItemTourism from './MemberItemTourism';

function MemberList({
  programs,
  categories,
  badges,
  members,
  tribe,
  sources,
  verified_badges,
}) {
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
  const [verifiedBadge, setVerifiedBadge] = useState();
  const [keyword, setKeyword] = useState();
  const [source, setSource] = useState();
  const [sort, setSort] = useState(sorts[0].value);
  const [payload, setPayload] = useState({});

  const filterData = ({ programData }) => {
    let value = {
      ...payload,
      program: parseInt(program) || null,
      badge: badge || null,
      verified_badge: verifiedBadge || null,
      keyword,
      category,
      source,
    };
    if (programData) {
      value = {
        program: parseInt(programData),
      };
      setProgram(parseInt(programData));
      setBadge();
      setCategory();
      setSource();
      setKeyword();
    }
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
      verified_badge: qs.verified_badge,
      keyword: qs.keyword,
      category: qs.category,
    };

    if (qs.category && qs.category !== 'all') {
      setCategory(parseInt(qs.category));
    }

    qs.program && setProgram(qs.program);
    qs.badge && setBadge(qs.badge);
    qs.badge && setVerifiedBadge(qs.verified_badge);
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
      <h1 className="text-3xl lg:text-4xl mb-8 font-bold">
        {t('etb_network')}
      </h1>
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
                <p className="font-bold w-40 text-center">{program?.name}</p>
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
              {tribe?.id === 1 && (
                <>
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
                  <div className="flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0">
                    <InputLabel
                      className="mr-4 w-1/4 lg:w-auto"
                      value={t('verified_badge')}
                    />
                    <SelectInput
                      options={verified_badges}
                      value={verifiedBadge}
                      labelData="name"
                      valueData="id"
                      className="w-full"
                      onChange={e => setVerifiedBadge(parseInt(e.target.value))}
                    >
                      <option value="">{t('select_verified_badge')}</option>
                    </SelectInput>
                  </div>
                </>
              )}

              {tribe?.id === 2 && (
                <div className="flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0">
                  <InputLabel
                    className="mr-4 w-1/4 lg:w-auto"
                    value={t('sources')}
                  />
                  <SelectInput
                    options={sources}
                    value={source}
                    labelData="title"
                    valueData="id"
                    className="w-full"
                    onChange={e => setSource(parseInt(e.target.value))}
                  >
                    <option value="">{t('select_source')}</option>
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
        {tribe?.id === 1 ? (
          <div className="lg:w-5/6 lg:pl-6">
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
        ) : (
          <div className="w-full">
            <div
              className={`grid member-tourism font-bold mb-6 bg-primary text-white py-4 px-4 gap-6`}
            >
              <div>Type</div>
              <div>Business Name</div>
              <div>Category</div>
              <div>Directory Source</div>
              <div>Action</div>
            </div>
            {members?.data?.length > 0 ? (
              members?.data?.map((member, index) => {
                return (
                  <MemberItemTourism
                    member={member}
                    index={index}
                    tribe={tribe}
                  />
                );
              })
            ) : (
              <div className="">
                <h3 className=" text-primary font-xl ">Not Found</h3>
              </div>
            )}
            <Pagination class="mt-6" links={members?.links} />
          </div>
        )}
      </div>
    </Guest>
  );
}

export default MemberList;
