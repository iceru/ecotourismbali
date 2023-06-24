import React, { useState } from 'react';
import Guest from '@/Layouts/GuestLayout';
import { useTranslation } from 'react-i18next';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

function MemberList({ programs, categories, badges, members }) {
  const { t } = useTranslation();
  const [category, setCategory] = useState('all');

  return (
    <Guest>
      <h1 className="font-bold text-3xl mb-10">{t('list_of_members')}</h1>
      <div className="flex justify-between mb-10">
        <div>
          <div className="font-bold mb-2 text-lg">{t('filter')}:</div>
          <div className="flex">
            <div className="flex items-center mr-4">
              <InputLabel className="mr-4" value={t('program')} />
              <SelectInput />
            </div>
            <div className="flex items-center mr-4">
              <InputLabel className="mr-4" value={t('badge')} />
              <SelectInput />
            </div>
            <div className="flex items-center mr-4">
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

      <div className="sidebar">
        <ul className="text-gray-600 font-light">
          <li
            onClick={() => setCategory('all')}
            className={`cursor-pointer mb-6 ${
              category === 'all' ? 'font-bold text-primary' : ''
            }`}
          >
            {t('all')}
          </li>
          {categories?.map(cat => {
            return (
              <li
                onClick={() => setCategory(cat)}
                className={`cursor-pointer mb-6 ${
                  category === cat ? 'font-bold text-primary' : ''
                }`}
              >
                {t(cat)}
              </li>
            );
          })}
        </ul>
      </div>
    </Guest>
  );
}

export default MemberList;
