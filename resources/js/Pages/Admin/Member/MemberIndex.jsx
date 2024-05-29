import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import Table from '@/Components/Table';
import Button from '@/Components/Button';

function MemberIndex({ members }) {
  const header = ['Business Name', 'Email', 'Image', 'Status', 'Action'];
  const selectedData = ['business_name', 'email', 'image', 'status'];

  const tableActions = [
    {
      label: 'detail_button',
      link: '/admin/member/detail',
      withId: true,
      color: 'info',
    },
  ];

  return (
    <AdminLayout>
      <AdminSection>
        <TitleSection title="list_of_members" className="mb-4" />

        <Table
          header={header}
          data={members}
          selectedData={selectedData}
          tableActions={tableActions}
          pathImage={'member/images/'}
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default MemberIndex;
