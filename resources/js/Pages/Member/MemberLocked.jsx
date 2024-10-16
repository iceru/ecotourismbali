import AdminSection from '@/Components/AdminSection';
import PrimaryButton from '@/Components/PrimaryButton';
import MemberLayout from '@/Layouts/MemberLayout';
import { useTranslation } from 'react-i18next';

function MemberDashboard() {
  const { t } = useTranslation();
  return (
    <MemberLayout state="locked">
      <AdminSection className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-xl">{t('member_locked_title')}</h2>
        <p className="text-sm">{t('member_locked_text')}</p>
        <PrimaryButton>{t('member_locked_button')}</PrimaryButton>
      </AdminSection>
    </MemberLayout>
  );
}

export default MemberDashboard;
