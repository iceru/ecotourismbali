import React, { useEffect, useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import AdminSection from '@/Components/AdminSection';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { toLower } from 'lodash';
import PrimaryButton from '@/Components/PrimaryButton';
import AssessmentSection from './Components/AssessmentSection';

function Statistics({ assessments }) {
  ChartJS.register(...registerables);
  const [hotel, setHotel] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [tab, setTab] = useState('hotel');

  useEffect(() => {
    assessments?.forEach(assess => {
      assess?.members?.sort((a, b) => b.score - a.score);
      if (toLower(assess?.business_type?.name) === 'hotel') {
        setHotel(prevData => [...prevData, assess]);
      } else {
        setRestaurant(prevData => [...prevData, assess]);
      }
    });
  }, []);

  return (
    <AdminLayout>
      <main className="grid">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <PrimaryButton
            onClick={() => setTab('hotel')}
            color={tab === 'hotel' ? 'primary' : 'lightPrimary'}
          >
            Accommodation Assessment
          </PrimaryButton>
          <PrimaryButton
            onClick={() => setTab('restaurant')}
            color={tab !== 'hotel' ? 'primary' : 'lightPrimary'}
          >
            F&B Assessment
          </PrimaryButton>
        </div>
        <AdminSection className="mb-6">
          <h3 className="font-bold text-primary text-xl ">
            {tab === 'hotel' ? 'Accommodation' : 'F&B'} Assessment
          </h3>
        </AdminSection>
        {tab === 'hotel' ? (
          <AssessmentSection assessments={hotel} tab={tab} />
        ) : (
          <AssessmentSection assessments={restaurant} tab={tab} />
        )}
      </main>
    </AdminLayout>
  );
}

export default Statistics;
