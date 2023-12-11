import React, { useEffect, useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import AdminSection from '@/Components/AdminSection';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import PieChart from './Components/PieChart';

function Statistics({ sessions, badges, programs }) {
  ChartJS.register(...registerables);
  const [sessionActive, setSessionActive] = useState([]);

  useEffect(() => {
    let filtered = sessions?.filter(session =>
      session?.member?.status?.includes('active')
    );
    console.log(filtered);
    filtered = filtered.sort(
      (a, b) => parseInt(b.total_score) - parseInt(a.total_score)
    );
    setSessionActive(filtered);
  }, []);

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
                  labels: sessionActive?.map(item => {
                    return item?.member?.business_name.slice(0, 15);
                  }),
                  datasets: [
                    {
                      label: 'Assessment Score',
                      data: sessionActive.map(item => {
                        return item.total_score;
                      }),
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
                {sessionActive?.map((item, index) => {
                  if (item?.member?.status?.includes('active')) {
                    return (
                      <li className="flex items-center mb-2">
                        <div className="mr-2">{index + 1}.</div>
                        {item?.member?.image && (
                          <div>
                            <img
                              className="w-8 h-8 object-contain rounded-full mr-2"
                              src={`/storage/member/images/${item?.member?.image}`}
                              alt=""
                            />
                          </div>
                        )}
                        <div className="">{item?.member?.business_name}</div>
                        <div className="font-bold text-primary">
                          - {item?.total_score}
                        </div>
                      </li>
                    );
                  }
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
