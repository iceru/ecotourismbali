import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import Table from '@/Components/Table';

function UserIndex({ users }) {
  const header = ['Name', 'Email', 'Role', 'Business Name', 'Action'];
  const selectedData = ['name', 'email', 'role_name', 'member_name'];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/admin/user/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'admin.user.destroy',
      color: 'danger',
      type: 'delete',
    },
  ];

  return (
    <AdminLayout>
      <AdminSection>
        <TitleSection title="List Users" className="mb-4" />
        <Table
          header={header}
          data={users}
          selectedData={selectedData}
          tableActions={tableActions}
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default UserIndex;
