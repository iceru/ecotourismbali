import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import { useTranslation } from 'react-i18next';
import TitleSection from './Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bar } from 'react-chartjs-2';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';

function MemberDashboard({ members, modules, visitors }) {
  const { t } = useTranslation();
  console.log(visitors);
  ChartJS.register(...registerables);
  return (
    <AdminLayout>
      <div className="grid lg:grid-cols-2 gap-6">
        <AdminSection className="grid lg:grid-cols-2 gap-4">
          <div className="bg-lightSecondary p-4 rounded-md">
            <div className="mb-2">{t('total_members')}</div>
            <div className="font-bold text-3xl">{members.length}</div>
          </div>
          <div className="bg-lightPrimary p-4 rounded-md">
            <div className="mb-2">{t('total_module')}</div>
            <div className="font-bold text-3xl">{modules.length}</div>
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
        <AdminSection>
          <Bar
            datasetIdKey="id"
            data={{
              datasets: [
                {
                  barPercentage: 0.5,
                  barThickness: 6,
                  maxBarThickness: 8,
                  minBarLength: 2,
                  data: [10, 20, 30, 40, 50, 60, 70],
                },
              ],
              options: {
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              },
            }}
          />
        </AdminSection>
      </div>
    </AdminLayout>
  );
}

export default MemberDashboard;
