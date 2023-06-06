import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import BackTo from '../Components/BackTo';

function MemberIndex() {
  const { user } = usePage().props;
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
      <BackTo link="/member/index" title="back_to_list_members" />
      <AdminSection>
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            {user?.member?.logo && (
              <img className="mr-3" src={user.member.logo} />
            )}
            <div className="font-bold text-xl">{user.name}</div>
          </div>
          <div>
            {user?.member?.badge ? (
              <img src={user.member.badge.image} />
            ) : (
              <div className="bg-red-500 text-white rounded-full px-3 py-1 font-bold">
                No Badge
              </div>
            )}
          </div>
        </div>
        {items('email', user.email)}
        {items('address', user?.member?.address)}
        {items('phone', user.phone)}
        {items('website', user?.member?.website)}
        {items('business_name', user?.member?.business_name)}
        {items('category', user?.member?.category?.name)}
        {items('program', user?.member?.program?.name)}
        {items('assessment_attempt', user?.member?.program?.name)}
        {items('status', user?.member?.program?.name)}
        {items('assessment_expire', user?.member?.program?.name)}
        {items('badge', user?.member?.badge?.name)}
        {items('description', user?.member?.description)}
      </AdminSection>
    </AdminLayout>
  );
}

export default MemberIndex;
