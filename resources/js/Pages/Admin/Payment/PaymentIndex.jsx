import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import Table from '@/Components/Table';

function PaymentIndex({ payments }) {
  const header = ['Order Id', 'Status', 'Payment Type', 'Member ID', 'Amount'];
  const selectedData = [
    'payment_no',
    'payment_status',
    'payment_type',
    'member_id',
    'amount',
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
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default PaymentIndex;
