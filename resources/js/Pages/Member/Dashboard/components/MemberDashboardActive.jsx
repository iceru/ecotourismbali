import AdminSection from '@/Components/AdminSection';
import MemberBadge from './MemberBadge';
import { useTranslation } from 'react-i18next';
import { Bar } from 'react-chartjs-2';
import Speedometer from '@/Components/Speedometer';

export default function MemberDashboardActive({
  member,
  lastSession,
  scores,
  expiredDate,
}) {
  const { t } = useTranslation();

  const maxScores = () =>
    scores?.reduce((total, score) => total + score.assessment.max_points, 0) ??
    0;

  const totalScores = () =>
    scores?.reduce((total, score) => total + score.score, 0) ?? 0;

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <AdminSection>
        <MemberBadge
          member={member}
          lastSession={lastSession}
          scores={scores}
          expiredDate={expiredDate}
          maxScores={maxScores}
        />
      </AdminSection>
      <AdminSection>
        <Bar
          datasetIdKey="id"
          data={{
            labels: scores?.map(item => item?.assessment.title.slice(0, 9)),
            datasets: [
              {
                label: 'Assessment Scores',
                data: scores.map(item =>
                  Math.round((item.score / item.assessment.max_points) * 100)
                ),
                backgroundColor: ['#1F656C', '#7BB052', '#D8E8CC', '#D2E0E2'],
              },
            ],
          }}
          options={{
            indexAxis: 'y',
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
            },
            scales: {
              x: {
                min: 0,
                max: 100,
                ticks: {
                  callback: value => value + '%',
                },
              },
            },
          }}
        />
      </AdminSection>
      <AdminSection>
        <div className="text-center mb-2 font-bold text-lg">Total Progress</div>
        <Speedometer score={totalScores()} maxScore={maxScores()} />
      </AdminSection>
    </div>
  );
}
