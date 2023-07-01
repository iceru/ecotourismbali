import React, { useEffect, useState } from 'react';
import Guest from '@/Layouts/GuestLayout';
import { useTranslation } from 'react-i18next';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link, router } from '@inertiajs/react';

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
  const [category, setCategory] = useState(categories[0].id);
  const [program, setProgram] = useState();
  const [badge, setBadge] = useState();
  const [keyword, setKeyword] = useState();
  const [sort, setSort] = useState(sorts[0].value);
  const [payload, setPayload] = useState({});

  console.log(payload);

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
      <h1 className="font-bold text-2xl lg:text-3xl mb-6 lg:mb-10">
        {t('list_of_members')}
      </h1>
      <div className="flex flex-wrap justify-between mb-10">
        <div className="mb-6 lg:mb-0 lg:w-3/4 pr-4">
          <div className="font-bold mb-2 text-lg">{t('filter')}:</div>
          <div className="flex">
            <div className="grid lg:grid-cols-3">
              <div className="flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0">
                <InputLabel className="mr-4" value={t('program')} />
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
                <InputLabel className="mr-4" value={t('badge')} />
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
                <InputLabel className="mr-4" value={t('keyword')} />
                <TextInput
                  className="w-full"
                  onChange={e => setKeyword(e.target.value)}
                />
              </div>
            </div>
            <PrimaryButton onClick={filterData}>{t('filter')}</PrimaryButton>
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
            {categories?.map(cat => {
              return (
                <li
                  onClick={() => setCategory(cat.id)}
                  id={cat.id}
                  className={`cursor-pointer lg:mb-6 ${
                    category === cat.id ? 'font-bold text-primary' : ''
                  }`}
                >
                  {t(cat.name)}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-5/6 grid lg:grid-cols-3 gap-4">
          {members?.map(member => {
            return (
              <div className="border rounded-2xl p-4 h-fit">
                {member.badge ? (
                  <div className="rounded-bl-2xl bg-yellow-600 text-white px-3 py-1 text-[12px] flex -mt-4 -mr-4 w-fit float-right">
                    <img src={member.badge?.image} alt="" />
                    <span>{member.badge?.name}</span>
                  </div>
                ) : (
                  <div className="rounded-bl-2xl bg-slate-400 text-white px-3 py-1 text-[12px] flex -mt-4 -mr-4 w-fit float-right">
                    <div>{t('not_verified')}</div>
                  </div>
                )}
                <div className="flex items-center mb-3 mt-5">
                  <div className="mr-3">
                    <img
                      src={`/storage/member/images/${member.image}`}
                      alt={member.bussiness_name}
                      className="w-[62px] max-h-[62px] object-cover"
                    />
                  </div>
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
                  {member.description.slice(0, 100)}
                </p>
                <Link
                  href={route('member.detail', member.id)}
                  className="text-sm text-primary font-semibold"
                >
                  {t('learn_more')}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Guest>
  );
}

export default MemberList;
