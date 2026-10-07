import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import AdminSection from '@/Components/AdminSection';
import { Chart as ChartJS, registerables } from 'chart.js';
import { toLower } from 'lodash';
import Button from '@/Components/Button';
import AssessmentSection from './Components/AssessmentSection';

function Statistics({ assessments }) {
  ChartJS.register(...registerables);
  const [tab, setTab] = useState('hotel');
  const [version, setVersion] = useState('1');
  const filteredAssessments = (assessments ?? [])
    .filter(assess =>
      tab === 'hotel'
        ? toLower(assess?.business_type?.name) === 'hotel'
        : toLower(assess?.business_type?.name) !== 'hotel'
    )
    .filter(assess => String(assess?.version ?? 1) === version)
    .map(assess => ({
      ...assess,
      members: [...(assess?.members ?? [])].sort((a, b) => b.score - a.score),
    }));

  return (
    <AdminLayout>
      <main className="grid">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <Button
            onClick={() => setTab('hotel')}
            color={tab === 'hotel' ? 'primary' : 'lightPrimary'}
          >
            Accommodation Assessment
          </Button>
          <Button
            onClick={() => setTab('restaurant')}
            color={tab !== 'hotel' ? 'primary' : 'lightPrimary'}
          >
            F&B Assessment
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {[1, 2].map(itemVersion => (
            <Button
              key={itemVersion}
              onClick={() => setVersion(String(itemVersion))}
              color={version === String(itemVersion) ? 'primary' : 'lightPrimary'}
            >
              Version {itemVersion}
            </Button>
          ))}
        </div>
        <AdminSection className="mb-6">
          <h3 className="font-bold text-primary text-xl ">
            {tab === 'hotel' ? 'Accommodation' : 'F&B'} Assessment — Version {version}
          </h3>
        </AdminSection>
        <AssessmentSection assessments={filteredAssessments} tab={tab} />
      </main>
    </AdminLayout>
  );
}

export default Statistics;
