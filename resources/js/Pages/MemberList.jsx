import React, { useState } from 'react';
import Guest from '@/Layouts/GuestLayout';
import { useTranslation } from 'react-i18next';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';

function MemberList({ programs, categories, badges, members }) {
  const { t } = useTranslation();
  const [category, setCategory] = useState('all');

  return (
    <Guest>
      <h1 className="font-bold text-3xl mb-10">{t('list_of_members')}</h1>
      <div className="flex flex-wrap justify-between mb-10">
        <div className="mb-6 lg:mb-0">
          <div className="font-bold mb-2 text-lg">{t('filter')}:</div>
          <div className="flex flex-wrap">
            <div className="flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0">
              <InputLabel className="mr-4" value={t('program')} />
              <SelectInput
                options={programs}
                labelData="name"
                valueData="name"
                className="w-full"
              />
            </div>
            <div className="flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0">
              <InputLabel className="mr-4" value={t('badge')} />
              <SelectInput
                options={badges}
                labelData="name"
                valueData="name"
                className="w-full"
              />
            </div>
            <div className="flex items-center mr-4 w-full lg:w-auto mb-4 lg:mb-0">
              <InputLabel className="mr-4" value={t('keyword')} />
              <TextInput />
            </div>
            <PrimaryButton>{t('filter')}</PrimaryButton>
          </div>
        </div>
        <div>
          <div className="font-bold mb-2 text-lg">{t('sort')}:</div>
          <div className="flex">
            <div className="flex items-center mr-4">
              <SelectInput />
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
                  onClick={() => setCategory(cat.name)}
                  className={`cursor-pointer lg:mb-6 ${
                    category === cat.name ? 'font-bold text-primary' : ''
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
                      <h6 className="mt-2">{member.category?.name}</h6>
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
