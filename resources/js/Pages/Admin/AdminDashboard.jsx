import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import { useTranslation } from 'react-i18next';
import TitleSection from './Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import moment from 'moment';

function MemberDashboard({ members, modules, visitors, pages, referrers }) {
  const { t } = useTranslation();
  ChartJS.register(...registerables);

  const labelVisitors = () => {
    const visitor = visitors.reverse();
    console.log(visitor);
    return visitor.map(visit => {
      return moment(visit.date).format('LL');
    });
  };

  const referrer = referrers.slice(0, 6);

  const page = pages.slice(0, 8);

  return (
    <AdminLayout>
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
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
      </div>
      <div className="flex mb-6 ">
        <div className="lg:w-2/3">
          <AdminSection>
            <Bar
              datasetIdKey="id"
              data={{
                labels: page.map(item => item.pageTitle.slice(0, 15)),
                datasets: [
                  {
                    label: 'Page Views',
                    data: page.map(item => item.screenPageViews),
                    backgroundColor: [
                      '#1F656C',
                      '#7BB052',
                      '#D8E8CC',
                      '#D2E0E2',
                    ],
                  },
                ],
                options: {
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                },
              }}
            />
          </AdminSection>
        </div>

        <AdminSection className="ml-6">
          <Pie
            datasetIdKey="id"
            data={{
              labels: referrer.map(item => item.pageReferrer),
              datasets: [
                {
                  data: referrer.map(item => item.screenPageViews),
                },
              ],
              options: {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
              },
            }}
          />
        </AdminSection>
      </div>
      <AdminSection>
        <TitleSection title="total_visitor" />
        <Line
          datasetIdKey="id"
          data={{
            labels: labelVisitors(),
            datasets: [
              {
                label: 'Sessions',
                data: visitors.map(item => item.activeUsers),
                backgroundColor: '#7BB052',
              },
              {
                label: 'Views',
                data: visitors.map(item => item.screenPageViews),
                backgroundColor: '#1F656C',
              },
            ],
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
            },
          }}
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default MemberDashboard;
