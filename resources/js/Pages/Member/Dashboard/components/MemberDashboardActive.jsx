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
    scores?.reduce(
      (total, score) => total + parseInt(score.assessment.max_points),
      0
    ) ?? 0;

  const totalScores = () =>
    scores?.reduce((total, score) => total + parseInt(score.score), 0) ?? 0;

  const lowestAssessment = scores
    ?.map(item => ({
      ...item,
      percentage: Math.round((item.score / item.assessment.max_points) * 100),
    }))
    .sort((a, b) => a.percentage - b.percentage)[0];

  const isScoresEmpty = !scores || scores.length === 0;

  return (
    <>
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

        <AdminSection className="relative">
          {isScoresEmpty && (
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10 rounded-xl">
              <div className="text-white text-lg font-semibold">
                No data available
              </div>
            </div>
          )}
          <div className="text-center mb-2 font-bold text-lg">
            {t('total_progress')}
          </div>
          <Speedometer score={totalScores()} maxScore={maxScores()} />
        </AdminSection>

        <AdminSection className="h-30 relative">
          {isScoresEmpty && (
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10 rounded-xl">
              <div className="text-white text-lg font-semibold">
                No data available
              </div>
            </div>
          )}
          <Bar
            datasetIdKey="id"
            data={{
              labels: scores?.map(item =>
                item?.assessment.title.slice(
                  0,
                  item?.assessment?.business_type?.name === 'Supplier' ? 9 : 11
                )
              ),
              datasets: [
                {
                  label: 'Assessment Scores',
                  data: scores?.map(item =>
                    Math.round((item.score / item.assessment.max_points) * 100)
                  ),
                  backgroundColor: ['#1F656C', '#7BB052', '#D8E8CC', '#D2E0E2'],
                  maxBarThickness: 30,
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
        <AdminSection className="flex flex-col items-center relative">
          {isScoresEmpty && (
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10 rounded-xl">
              <div className="text-white text-lg font-semibold">
                No data available
              </div>
            </div>
          )}
          <div className="text-center mb-2 font-bold text-lg">
            {t('focus_section')}
          </div>
          {lowestAssessment && (
            <>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <img
                  src={`/storage/assessments/${lowestAssessment.assessment.image}`}
                  alt={lowestAssessment.assessment.title}
                  className="w-full h-20 object-contain"
                />
                <div>
                  <div className="font-semibold text-base">
                    {lowestAssessment.assessment.title}
                  </div>
                  <div className="text-xl font-bold text-red-600 text-center">
                    {lowestAssessment.percentage}%{' '}
                    <span className="text-gray-500 text-base">
                      - ({lowestAssessment?.score} /{' '}
                      {lowestAssessment?.assessment?.max_points})
                    </span>
                  </div>
                  <div className="text-center text-lg font-bold"></div>
                </div>
              </div>
            </>
          )}
        </AdminSection>
      </div>
      <div>
        <AdminSection className="mt-6">
          <div className="font-bold text-lg mb-4">
            {t('assessment_coverage')}
          </div>
          <div>
            {scores?.map((score, index) => {
              const answersGrouped = (lastSession?.member_assessment_answer || [])
                .filter(
                  answer =>
                    answer.assessment_question.assessment_id ===
                    score.assessment_id
                )
                .reduce((acc, answer) => {
                  const questionId = answer.assessment_question_id;
                  if (!acc[questionId]) {
                    acc[questionId] = {
                      question: answer.assessment_question,
                      selectedOptions: [],
                    };
                  }
                  acc[questionId].selectedOptions.push(answer.assessment_option);
                  return acc;
                }, {});

              return (
                <div
                  key={index}
                  className="mb-6 p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex mb-4 space-x-2 items-center">
                    <img
                      src={`/storage/assessments/${score.assessment.logo}`}
                      alt=""
                      className="w-8 shrink-0 rounded-lg"
                    />
                    <div className="font-semibold">
                      {score.assessment.title}
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {Object.values(answersGrouped).map((item, qIndex) => {
                      const questionType = item.question.type;

                      // Calculate the sum of points from selected options
                      // Convert to number explicitly using Number() or parseFloat()
                      const totalSelectedPoints = item.selectedOptions.reduce(
                        (sum, option) => sum + (Number(option.point) || 0),
                        0
                      );

                      let maxPoints;

                      // For checkbox: sum all available option points
                      // For radio: get the maximum point value
                      if (questionType === 'checkbox') {
                        maxPoints = item.question.assessment_option.reduce(
                          (sum, opt) => sum + (Number(opt.point) || 0),
                          0
                        );
                      } else {
                        maxPoints = Math.max(
                          ...item.question.assessment_option.map(
                            opt => Number(opt.point) || 0
                          )
                        );
                      }

                      // Calculate percentage: (selected points / max points) * 100
                      const percentage =
                        maxPoints > 0
                          ? (totalSelectedPoints / maxPoints) * 100
                          : 0;

                      const getColorClass = pct => {
                        if (pct === 0) return 'bg-gray-100';
                        if (pct <= 20) return 'bg-gray-200';
                        if (pct <= 40) return 'bg-gray-300';
                        if (pct <= 60) return 'bg-gray-400';
                        if (pct <= 80) return 'bg-gray-500';
                        return 'bg-gray-600';
                      };

                      return (
                        <div
                          key={qIndex}
                          className={`${getColorClass(
                            percentage
                          )} rounded-lg p-3 flex-shrink-0 w-14 h-14 flex flex-col justify-between`}
                          title={`${
                            item.question.title
                          }: ${totalSelectedPoints}/${maxPoints} points (${percentage.toFixed(
                            0
                          )}%)`}
                        >
                          <div
                            className={`text-[8px] font-medium text-center ${
                              percentage > 60 ? 'text-white' : 'text-gray-700'
                            }`}
                          >
                            Q{qIndex + 1}
                          </div>
                          <div className="text-center">
                            <div
                              className={`text-xs font-bold ${
                                percentage > 60 ? 'text-white' : 'text-gray-800'
                              }`}
                            >
                              {percentage.toFixed(0)}%
                            </div>
                            <div
                              className={`text-[8px] ${
                                percentage > 60
                                  ? 'text-gray-100'
                                  : 'text-gray-600'
                              }`}
                            >
                              {totalSelectedPoints}/{maxPoints}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }) || <div>{t('no_heatmap_available')}</div>}
          </div>
        </AdminSection>
      </div>
    </>
  );
}
