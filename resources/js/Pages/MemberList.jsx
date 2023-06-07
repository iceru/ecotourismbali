import React from 'react';
import Guest from '@/Layouts/GuestLayout';
import { useTranslation } from 'react-i18next';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

function MemberList() {
  const { t } = useTranslation();
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
        <ul>
          <li className="cursor-pointer mb-6">{t('all')}</li>
          <li className="cursor-pointer mb-6">{t('community')}</li>
          <li className="cursor-pointer mb-6">{t('supplier')}</li>
          <li className="cursor-pointer mb-6">{t('travel')}</li>
          <li className="cursor-pointer mb-6">{t('company')}</li>
          <li className="cursor-pointer mb-6">{t('movement')}</li>
          <li className="cursor-pointer mb-6">{t('bisnis_akomodasi')}</li>
          <li className="cursor-pointer mb-6">{t('bisnis_fnb')}</li>
        </ul>
      </div>
    </Guest>
  );
}

export default MemberList;
