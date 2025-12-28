import React, { useEffect, useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import AdminSection from '@/Components/AdminSection';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import PieChart from './Components/PieChart';
import { Link } from '@inertiajs/react';
import moment from 'moment';

function Statistics({ sessions, badges, programs }) {
  ChartJS.register(...registerables);
  const [sessionActive, setSessionActive] = useState([]);

  useEffect(() => {
    let filtered = sessions?.filter(
      session =>
        session?.member?.status?.includes('active') &&
        !session?.member?.status?.includes('dummy')
    );
    filtered = filtered.sort(
      (a, b) => parseInt(b.total_score) - parseInt(a.total_score)
    );
    setSessionActive(filtered);
  }, []);

  const completion = completion => {
    if (completion === 'yes') {
      return 'Completed';
    } else if (completion === 'no') {
      return 'Not Completed';
    } else {
      return 'Expired';
    }
  };

  return (
    <AdminLayout>
      <main className="grid gap-6">
        <AdminSection>
          <h3 className="mb-4 font-bold text-xl">
            Highest Score on Assessment:
          </h3>
          <div className="grid gap-6">
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
            <div className="">
              <ol className="grid lg:grid-cols-3 gap-2">
                {sessionActive?.map((item, index) => {
                  if (
                    item?.member?.status?.includes('active') &&
                    item.total_score
                  ) {
                    return (
                      <Link
                        href={route('statistic.assessmentDetail', [
                          item?.member?.id,
                          item?.id,
                        ])}
                      >
                        <li className="border rounded p-3">
                          <div className="flex items-center">
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
                            <div className="mr-1">
                              {item?.member?.business_name}
                            </div>
                            <div className="font-bold text-primary">
                              - {item?.total_score}
                            </div>
                          </div>
                          <div className="flex items-center text-sm mt-1">
                            <div className="font-semibold capitalize">
                              {completion(item.completion)}
                            </div>
                            <div>
                              {' '}
                              - {moment(item.created_at).format('DD MMM YYYY')}
                            </div>
                          </div>
                        </li>
                      </Link>
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
