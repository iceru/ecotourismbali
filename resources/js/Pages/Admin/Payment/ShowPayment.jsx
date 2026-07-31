import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import BackTo from '../Components/BackTo';
import moment from 'moment';

function ShowPayment() {
  const { payment } = usePage().props;
  const { t } = useTranslation();

  const items = (label, data) => {
    if (['amount', 'total_payment'].includes(label) && data) {
      data = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(data);
    }
    if (['date', 'paid_at'].includes(label) && data) {
      const date = new Date(data);
      data = moment(date).format('LLL');
    }
    return (
      <div className="flex flex-wrap mb-4">
        <div className="w-full lg:w-1/4 mb-3 lg:mb-0">
          <div className="font-bold">{t(label)}</div>
        </div>
        <div className="w-full lg:w-3/4">{data || '-'}</div>
      </div>
    );
  };

  const invoiceItem = payment?.invoice_item_text;

  return (
    <AdminLayout>
      <BackTo link="/admin/payment/index" title="back_to_list_payment" />
      <AdminSection>
        <h3 className="font-bold text-lg mb-4">{t('payment_detail')}</h3>
        {items('payment_no', payment?.payment_no)}
        {items('invoice_number', payment?.invoice_number)}
        {items('payment_status', payment?.payment_status)}
        {items('payment_type', payment?.payment_type)}
        {items('amount', payment?.amount)}
        {items('bank', payment?.bank)}
        {items('date', payment?.created_at)}
        {items('paid_at', payment?.updated_at)}
        {invoiceItem && (
          <div className="flex flex-wrap mb-4">
            <div className="w-full lg:w-1/4 mb-3 lg:mb-0">
              <div className="font-bold">{t('invoice_item_text')}</div>
            </div>
            <div
              className="w-full lg:w-3/4"
              dangerouslySetInnerHTML={{ __html: invoiceItem }}
            />
          </div>
        )}

        <h3 className="font-bold text-lg mt-8 mb-4">{t('member_detail')}</h3>
        {items('business_name', payment?.member?.business_name)}
        {items('name', payment?.member?.name)}
        {items('email', payment?.member?.email)}
        {items('phone', payment?.member?.phone)}
        {items('total_payment', payment?.member?.total_payment)}
      </AdminSection>
    </AdminLayout>
  );
}

export default ShowPayment;
