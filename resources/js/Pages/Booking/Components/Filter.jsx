import React from 'react';
import { useTranslation } from 'react-i18next';

import TextInput from '@/Components/TextInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Filter() {
  const { t } = useTranslation();
  const hotelStars = [1, 2, 3, 4, 5];
  return (
    <div className="grid gap-6">
      <section>
        <p className="mb-3">{t('keyword')}</p>
        <TextInput className="w-full" />
      </section>
      <section>
        <p className="mb-3">{t('price')}</p>
        <div className="flex gap-3">
          <TextInput className="w-full" />
          <TextInput className="w-full" />
        </div>
      </section>
      <section>
        <p className="mb-3">{t('hotel_stars')}</p>
        {hotelStars.map(star => {
          return (
            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" name="" id="" />
              {[...Array(star)].map(item => {
                return <FontAwesomeIcon icon={faStar} className="text-gold" />;
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Filter;
