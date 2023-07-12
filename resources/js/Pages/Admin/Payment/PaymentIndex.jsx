import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import Table from '@/Components/Table';

function PaymentIndex({ payments }) {
  const header = ['Order Id', 'Status', 'Amount', 'Action'];
  const selectedData = ['payment_no', 'payment_status', 'amount'];

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
          data={payments}
          selectedData={selectedData}
          pathImage={'member/images/'}
          tableActions={tableActions}
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default PaymentIndex;
