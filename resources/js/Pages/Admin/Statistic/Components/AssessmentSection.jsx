// AssessmentSection.jsx
import AdminSection from '@/Components/AdminSection';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const AssessmentSection = ({ assessments, tab }) => {
  return (
    <div className="grid gap-6">
      {assessments.map(assess => (
        <AdminSection key={assess.id}>
          <h3 className="mb-4 font-bold text-lg flex items-center gap-3">
            <div>
              <img
                className="w-12 h-12 object-contain"
                src={`/storage/assessments/${assess?.logo}`}
                alt=""
              />
            </div>
            {assess.title}
          </h3>
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <Bar
                datasetIdKey="id"
                data={{
                  labels: assess?.members?.map(
                    item => item?.member?.business_name
                  ),
                  datasets: [
                    {
                      label: 'Assessment Score',
                      data: assess?.members?.map(item => item.score),
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
                {assess?.members?.map((item, index) => (
                  <RenderListItem key={index} index={index} item={item} />
                ))}
              </ol>
            </div>
          </div>
        </AdminSection>
      ))}
    </div>
  );
};

const RenderListItem = ({ index, item }) => (
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
    <div className="font-bold text-primary"> - {item?.score}</div>
  </li>
);

export default AssessmentSection;
