import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import Table from '@/Components/Table';
import { isEmpty } from 'lodash';

function MemberIndex({ members }) {
  const header = ['ID', 'Name', 'Email', 'Logo', 'Badge', 'Status', 'Action'];
  const selectedData = ['id', 'name', 'email', 'logo', 'badge', 'member'];

  const customStatus = {
    selected: 'member',
    data: () => {
      return !isEmpty(members.member) ? 'Active' : 'Not Active';
    },
  };

  const tableActions = [
    {
      label: 'detail_button',
      link: '/member/detail',
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
          customData={customStatus}
          tableActions={tableActions}
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default MemberIndex;
