import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import AdminSection from '@/Components/AdminSection';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import PieChart from './Components/PieChart';

function Statistics({ sessions, badges, programs }) {
  ChartJS.register(...registerables);
  console.log(badges);

  return (
    <AdminLayout>
      <main className="grid gap-6">
        <AdminSection>
          <h3 className="mb-4 font-bold text-xl">
            Highest Score on Assessment:
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <Bar
                datasetIdKey="id"
                data={{
                  labels: sessions?.map(item => item?.member?.business_name),
                  datasets: [
                    {
                      label: 'Assessment Score',
                      data: sessions.map(item => item.total_score),
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
            </div>
            <div>
              <ol>
                {sessions?.map((item, index) => {
                  return (
                    <li className="flex items-center mb-2">
                      <div className="mr-2">{index + 1}.</div>
                      <div>
                        <img
                          className="w-8 h-8 object-contain rounded-full mr-2"
                          src={`/storage/member/images/${item?.member?.image}`}
                          alt=""
                        />
                      </div>
                      <div className="">{item?.member?.business_name}</div>
                      <div className="font-bold text-primary">
                        {' '}
                        - {item?.total_score}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </AdminSection>
        <PieChart
          title="Total Badges on All Members"
          items={badges}
          imagePath="badges"
          storagePath="badges"
        />
        <PieChart
          title="Total Programs on All Members"
          items={programs}
          imagePath="programs"
          storagePath="programs"
        />
      </main>
    </AdminLayout>
  );
}

export default Statistics;
