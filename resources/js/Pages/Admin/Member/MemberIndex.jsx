import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import Table from '@/Components/Table';
import Button from '@/Components/Button';
import { useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';

function MemberIndex({ members }) {
  const header = ['Business Name', 'Email', 'Image', 'Status', 'Action'];
  const selectedData = ['business_name', 'email', 'image', 'status'];

  const [listMembers, setListMembers] = useState();

  const { data, setData, post, reset } = useForm({
    search,
  });

  useEffect(() => {
    setListMembers(members);
  }, [members]);

  const searchMember = () => {
    post(route('admin.member.filter'), {
      onSuccess: res => {
        setListMembers(res);
        reset();
      },
    });
  };

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
        <Search setData={setData} data={data} buttonClick={searchMember} />
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
