import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import BackTo from '../Components/BackTo';

function ShowPayment() {
  const { payment } = usePage().props;
  const { t } = useTranslation();

  const items = (label, data) => {
    return (
      <div className="flex flex-wrap mb-4">
        <div className="w-full lg:w-1/4 mb-3 lg:mb-0">
          <div className="font-bold">{t(label)}</div>
        </div>
        <div className="w-full lg:w-3/4">{data || '-'}</div>
      </div>
    );
  };
  return (
    <AdminLayout>
      <BackTo link="/admin/payment/index" title="back_to_list_payment" />
      <AdminSection>
        {items('payment_no', payment?.payment_no)}
        {items('payment_status', payment?.payment_status)}
        {items('name', payment?.member.business_name)}
        {items('payment_type', payment?.payment_type)}
        {items('invoice_number', payment?.status_code)}
        {items('amount', payment?.amount)}
        {items('bank', payment?.bank)}
      </AdminSection>
    </AdminLayout>
  );
}

export default ShowPayment;
