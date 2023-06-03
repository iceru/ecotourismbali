import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import { useTranslation } from 'react-i18next';

function MemberDashboard() {
  const { t } = useTranslation();

  return (
    <AdminLayout>
      <div className="grid lg:grid-cols-2 gap-6">
        <AdminSection>Test</AdminSection>
        <AdminSection>Test</AdminSection>
      </div>
    </AdminLayout>
  );
}

export default MemberDashboard;
