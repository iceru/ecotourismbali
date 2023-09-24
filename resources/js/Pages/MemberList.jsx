import React, { useEffect, useState } from 'react';
import Guest from '@/Layouts/GuestLayout';
import { useTranslation } from 'react-i18next';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, router } from '@inertiajs/react';
import { badgeColor } from '@/Helper/BadgeColor';
import Pagination from '@/Components/Pagination';
import queryString from 'query-string';

function MemberList({ programs, categories, badges, members }) {
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

  const filterData = () => {
    const value = {
      ...payload,
      program: program || null,
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
      setCategory(qs.category);
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

  console.log(members);

  return (
    <Guest>
      <Head title="Member List" />
      <h1 className="font-bold text-2xl lg:text-3xl mb-6 lg:mb-10">
        {t('list_of_members')}
      </h1>
      <div className="flex flex-wrap justify-between mb-6 pb-6 border-b">
        <div className="mb-6 lg:mb-0 lg:w-3/4 lg:pr-4">
          <div className="font-bold mb-2 text-lg">{t('filter')}</div>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="grid lg:grid-cols-3 w-full lg:w-auto">
              <div className="flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0">
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
              </div>
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
              <PrimaryButton onClick={filterData}>{t('filter')}</PrimaryButton>
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
                  className={`cursor-pointer lg:mb-6 whitespace-break-spaces ${
                    category === cat.id ? 'font-bold text-primary' : ''
                  }`}
                >
                  {t(cat.name)}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-5/6 lg:pl-6">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 h-fit">
            {members?.data?.length > 0 ? (
              members?.data?.map(member => {
                return (
                  <div className="border rounded-2xl p-4 h-full">
                    {member?.program?.name === 'Green Pal' ? (
                      <div
                        className={`rounded-bl-2xl rounded-tr-2xl text-white px-3 py-1 text-[12px] flex 
                      -mt-4 -mr-4 w-fit float-right items-center bg-greenpal`}
                      >
                        Green Pal
                      </div>
                    ) : (
                      <>
                        {member?.verified_badge_id ? (
                          <div>
                            <div
                              className={`rounded-bl-2xl rounded-tr-2xl text-white px-3 py-1 text-[12px] flex -mt-4 
                      -mr-4 w-fit float-right items-center  
                    ${badgeColor(member?.verified_badge?.name, 'color')}
                    `}
                            >
                              <div>
                                <img
                                  src={'/storage/badges/' + member.badge?.image}
                                  alt=""
                                  className="h-6 mr-2 brightness-0 filter invert"
                                />
                              </div>
                              <span>
                                Verified {member?.verified_badge?.name}
                              </span>
                            </div>
                          </div>
                        ) : member.badge && !member?.verified_badge_id ? (
                          <div
                            className={`rounded-bl-2xl rounded-tr-2xl text-white px-3 py-1 text-[12px] flex -mt-4 
                        -mr-4 w-fit float-right items-center  
                      ${badgeColor(member?.badge?.name, 'color')}
                      `}
                          >
                            <div>
                              <img
                                src={'/storage/badges/' + member.badge?.image}
                                alt=""
                                className="h-6 mr-2 brightness-0 filter invert"
                              />
                            </div>
                            <span>{member.badge?.name}</span>
                          </div>
                        ) : (
                          <div className="rounded-bl-2xl rounded-tr-2xl bg-gray-100  px-3 py-1 text-[12px] flex -mt-4 -mr-4 w-fit float-right">
                            <div>{t('no_badge')}</div>
                          </div>
                        )}
                      </>
                    )}
                    <div className="flex items-center mb-3 mt-5">
                      {member?.image && (
                        <div className="mr-3 rounded-full w-[62px] h-[62px] bg-lightPrimary bg-opacity-30 flex justify-center items-center">
                          <img
                            src={`/storage/member/images/${member?.image}`}
                            alt={member.bussiness_name}
                            className="w-[62px] max-h-[62px] object-contain rounded-full"
                          />
                        </div>
                      )}
                      <Link href={route('member.detail', member.slug)}>
                        <h4 className="font-bold text-lg">
                          {member.business_name}
                        </h4>
                        {member.category && (
                          <h6 className="text-xs uppercase text-primary">
                            {member.category?.name}
                          </h6>
                        )}
                      </Link>
                    </div>
                    <p className="mb-3 text-sm">
                      {member?.description?.slice(0, 100)}
                    </p>
                    <Link
                      href={route('member.detail', member.slug)}
                      className="text-sm text-primary font-semibold"
                    >
                      {t('learn_more')}
                    </Link>
                  </div>
                );
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
