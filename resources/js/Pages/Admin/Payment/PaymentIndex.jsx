import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import Table from '@/Components/Table';
import moment from 'moment';

function PaymentIndex({ payments }) {
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
        <TitleSection title="list_of_payments" className="mb-4" />
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
