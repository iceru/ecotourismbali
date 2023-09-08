import React, { useEffect, useState } from 'react';
import Guest from '@/Layouts/GuestLayout';
import { useTranslation } from 'react-i18next';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, router } from '@inertiajs/react';
import { badgeColor } from '@/Helper/BadgeColor';

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
      program: program !== '' ? program : null,
      badge: badge !== '' ? badge : null,
      keyword,
      category,
    };
    setPayload(value);
    router.post(route('member.filter'), value);
  };

  useEffect(() => {
    const value = {
      ...payload,
      category,
    };
    router.post(route('member.filter'), value);
  }, [category]);

  useEffect(() => {
    const value = {
      ...payload,
      sort,
    };
    router.post(route('member.filter'), value);
  }, [sort]);

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
                  onChange={e => setSort(e.target.value)}
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
              onClick={() => setCategory('all')}
            >
              {t('all')}
            </li>
            {categories?.map(cat => {
              return (
                <li
                  onClick={() => setCategory(cat.id)}
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
        <div className="lg:w-5/6 grid lg:pl-6 xl:grid-cols-3 lg:grid-cols-2 gap-4">
          {members.length > 0 ? (
            members?.map(member => {
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
                            <span>Verified {member?.verified_badge?.name}</span>
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
                    {member.image && (
                      <div className="mr-3">
                        <img
                          src={`/storage/member/images/${member.image}`}
                          alt={member.bussiness_name}
                          className="w-[62px] max-h-[62px] object-cover"
                        />
                      </div>
                    )}
                    <Link href={route('member.detail', member.id)}>
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
            <div className="text-center flex justify-center">
              <h3 className=" text-primary font-xl ">Not Found</h3>
            </div>
          )}
        </div>
      </div>
    </Guest>
  );
}

export default MemberList;
