import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import Table from '@/Components/Table';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

function PaymentIndex({ payments }) {
  const { t } = useTranslation();

  const currency = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  const tablePayments = payments?.map(payment => ({
    ...payment,
    business_name: payment?.member?.business_name,
    customer_name: payment?.member?.name,
    payment_method: [payment?.payment_type, payment?.bank]
      .filter(Boolean)
      .join(' - '),
    amount_display: payment?.amount ? currency.format(payment.amount) : null,
    payment_date: payment?.updated_at
      ? moment(payment.updated_at).format('LLL')
      : null,
  }));

  const header = [
    'Payment No.',
    'Invoice No.',
    'Business Name',
    'Customer',
    'Status',
    'Method',
    'Amount',
    'Payment Date',
    'Action',
  ];
  const selectedData = [
    'payment_no',
    'invoice_number',
    'business_name',
    'customer_name',
    'payment_status',
    'payment_method',
    'amount_display',
    'payment_date',
  ];

  const tableActions = [
    {
      label: 'show_button',
      link: '/admin/payment/show',
      withId: true,
      color: 'show',
    },
  ];
  return (
    <AdminLayout>
      <AdminSection>
        <div className="flex flex-col gap-3 mb-4 lg:flex-row lg:items-center lg:justify-between">
          <TitleSection title="list_of_payments" />
          <a
            href="/admin/payment/export"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white transition bg-secondary border border-transparent rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            {t('export_excel')}
          </a>
        </div>
        <Table
          header={header}
          data={tablePayments}
          selectedData={selectedData}
          tableActions={tableActions}
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default PaymentIndex;
