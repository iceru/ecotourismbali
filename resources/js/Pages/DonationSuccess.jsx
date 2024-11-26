import Button from '@/Components/Button';
import Guest from '@/Layouts/GuestLayout';
import React from 'react';
import donationImg from '../../images/donation.png';
import { useTranslation } from 'react-i18next';

function DonationSucces() {
  const { t } = useTranslation();
  return (
    <Guest>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold mb-4">
          {t('success_dono_title')}
        </h1>
        <p className="text-center lg:w-3/4 mb-4">{t('success_dono_text')}</p>
        <Button
          as="link"
          color="secondary"
          href="https://ecotourismbali.com"
          className="mb-4"
        >
          {t('success_dono_btn')}
        </Button>

        <div>
          <img src={donationImg} alt="Donation" className="rounded w-full" />
        </div>
      </div>
    </Guest>
  );
}

export default DonationSucces;
