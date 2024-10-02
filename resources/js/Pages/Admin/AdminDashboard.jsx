import { useTranslation } from 'react-i18next';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import moment from 'moment';

import TitleSection from './Components/TitleSection';
import AdminSection from '@/Components/AdminSection';

import AdminLayout from '@/Layouts/AdminLayout';

function MemberDashboard({
  members,
  assessments,
  visitors,
  pages,
  referrers,
  restaurant,
  hotel,
  hotelVerified,
  restaurantVerified,
  hotelAssessed,
  restaurantAssessed,
}) {
  const { t } = useTranslation();
  ChartJS.register(...registerables);

  const labelVisitors = () => {
    const visitor = visitors.reverse();
    return visitor.map(visit => {
      return moment(visit.date).format('LL');
    });
  };

  const referrer = referrers.slice(0, 6);
  const page = pages.slice(0, 8);

  return (
    <AdminLayout>
      <div className="mb-6">
        <AdminSection className="grid lg:grid-cols-3 gap-4">
          <div className="bg-lightSecondary p-4 rounded-md">
            <div className="mb-2">Hotel Members</div>
            <div className="font-bold text-3xl">{hotel.length}</div>
          </div>
          <div className="bg-lightSecondary p-4 rounded-md">
            <div className="mb-2">
              <strong>Self Assessed</strong> Hotel Members
            </div>
            <div className="font-bold text-3xl">{hotelAssessed.length}</div>
          </div>
          <div className="bg-lightSecondary p-4 rounded-md">
            <div className="mb-2">
              <strong>Verified</strong> Hotel Members
            </div>
            <div className="font-bold text-3xl">{hotelVerified.length}</div>
          </div>
          <div className="bg-lightPrimary p-4 rounded-md">
            <div className="mb-2">Restaurant Members</div>
            <div className="font-bold text-3xl">{restaurant.length}</div>
          </div>
          <div className="bg-lightPrimary p-4 rounded-md">
            <div className="mb-2">
              <strong>Self Assessed</strong> Restaurant Members
            </div>
            <div className="font-bold text-3xl">
              {restaurantAssessed.length}
            </div>
          </div>
          <div className="bg-lightPrimary p-4 rounded-md">
            <div className="mb-2">
              <strong>Verified</strong> Restaurant Members
            </div>
            <div className="font-bold text-3xl">
              {restaurantVerified.length}
            </div>
          </div>
        </AdminSection>
      </div>
      <div className="flex mb-6 flex-wrap lg:flex-nowrap">
        <div className="lg:w-2/3 w-full">
          <AdminSection>
            <TitleSection title="total_pageviews" className="mb-4" />
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

        <AdminSection className="ml-6 lg:w-1/3 w-full">
          <TitleSection title="referral" className="mb-4" />

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
        <TitleSection title="total_visitor" className="mb-4" />
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
