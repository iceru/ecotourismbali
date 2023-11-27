import AdminSection from '@/Components/AdminSection';
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ title, items, imagePath, storagePath }) => {
  return (
    <AdminSection>
      <h3 className="mb-4 font-bold text-xl">{title}</h3>
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <Pie
            datasetIdKey="id"
            data={{
              labels: items.map(item => item?.name || 'No Badge'),
              datasets: [
                {
                  data: items.map(item => item?.total),
                  backgroundColor:
                    imagePath === 'badges'
                      ? ['#D2E0E2', '#EB964F', '#C0C0C0', '#D1A546']
                      : ['#1F656C', '#7BB052'],
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
            {items.map((item, index) => (
              <RenderListItem
                key={item.id}
                index={index}
                item={item}
                imagePath={imagePath}
              />
            ))}
          </ol>
        </div>
      </div>
    </AdminSection>
  );
};

const RenderListItem = ({ index, item, imagePath }) => (
  <li className="flex items-center mb-2">
    <div className="mr-2">{index + 1}.</div>
    {item?.image && (
      <div>
        <img
          className="w-8 h-8 object-contain rounded-full mr-2"
          src={`/storage/${imagePath}/${item?.image}`}
          alt=""
        />
      </div>
    )}
    <div className="mr-2">{item?.name || 'No Badge'}</div>
    <div className="font-bold text-primary">- {item?.total}</div>
  </li>
);

export default PieChart;
