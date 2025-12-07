import React from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { lowerCase } from 'lodash';

import { faBook, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chart as ChartJS, registerables } from 'chart.js';

import Button from '@/Components/Button';

const MemberBadge = ({ member, lastSession, scores, maxScores }) => {
  const { t } = useTranslation();
  ChartJS.register(...registerables);

  return (
    <div>
      {member?.status?.includes('active') ? (
        <>
          {lastSession ? (
            <>
              <h2 className={'font-bold text-lg mb-2 text-center'}>
                {t('your_assessment')}
              </h2>
              <div className=" items-center flex-wrap justify-center">
                <div>
                  {lastSession && (
                    <div className="text-primary text-center text-[70px] leading-tight">
                      <span className="font-bold">
                        {lastSession.total_score}{' '}
                        <span className="text-[40px] text-gray-500">
                          / {maxScores()}
                        </span>
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="grid lg:grid-cols-2 gap-x-3 gap-y-3 text-primary">
                    {scores?.map(score => {
                      return (
                        <div className="flex items-center text-black">
                          <div className="mr-1">
                            <img
                              src={`/storage/assessments/${score.assessment.logo}`}
                              alt=""
                              className="w-8 rounded-lg"
                            />
                          </div>
                          <div className="capitalize">
                            {member?.business_type_id !== 3
                              ? lowerCase(score?.assessment?.title).slice(0, 11)
                              : lowerCase(score?.assessment?.title).slice(0, 8)}
                          </div>
                          <div className="mx-1">-</div>
                          <div className="font-bold">
                            {score?.score}{' '}
                            <span className="text-gray-500">
                              / {score?.assessment?.max_points}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="font-bold text-[20px] mb-4">
                {t('welcome_member')}
              </h2>
              <div>
                <Button
                  color="lightPrimary"
                  as="link"
                  href={route('member.assessment.index')}
                >
                  {t('start_assessment')}
                  <FontAwesomeIcon
                    icon={faLongArrowAltRight}
                    className="ml-2"
                  />
                </Button>
              </div>
            </>
          )}
        </>
      ) : (
        <div>
          <h2 className="font-bold text-[20px] mb-4">{t('preview_member')}</h2>
          <div className="grid gap-4">
            <div>
              <Button
                color="lightPrimary"
                as="link"
                href={route('member.assessment.index')}
              >
                {t('my_assessment')}
                <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2" />
              </Button>
            </div>
            <div>
              <Button
                color="lightSecondary"
                as="link"
                href={route('member.module.index')}
              >
                {t('e_learning')}
                <FontAwesomeIcon icon={faBook} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberBadge;
