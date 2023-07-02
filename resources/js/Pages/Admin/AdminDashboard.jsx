import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import { useTranslation } from 'react-i18next';
import TitleSection from './Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

function MemberDashboard() {
  const { t } = useTranslation();

  return (
    <AdminLayout>
      <div className="grid lg:grid-cols-2 gap-6">
        <AdminSection className="grid lg:grid-cols-2 gap-4">
          <div className="bg-lightSecondary p-4 rounded-md">
            <div className="mb-2">{t('total_members')}</div>
            <div className="font-bold text-3xl">120</div>
          </div>
          <div className="bg-lightPrimary p-4 rounded-md">
            <div className="mb-2">{t('total_module')}</div>
            <div className="font-bold text-3xl">5</div>
          </div>
        </AdminSection>
        <AdminSection>
          <TitleSection title="guide_book" />
          <div className="text-sm mb-6">{t('guide_book_text')}</div>
          <PrimaryButton
            color="lightSecondary"
            className="w-full justify-between"
          >
            {t('download_guide_book')}
            <FontAwesomeIcon icon={faFileDownload} />
          </PrimaryButton>
        </AdminSection>
      </div>
    </AdminLayout>
  );
}

export default MemberDashboard;
