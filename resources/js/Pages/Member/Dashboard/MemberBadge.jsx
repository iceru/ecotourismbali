import React from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { lowerCase } from 'lodash';

import { faBook, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '@/Components/Button';
import { badgeColor } from '@/Helper/BadgeColor';

const MemberBadge = ({ member, expiredDate, lastSession, scores }) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {member?.status?.includes('active') ? (
        <>
          {member && member.badge ? (
            <>
              <h2 className={'font-bold text-[20px] mb-4'}>
                {t('your_assessment')}
                <span
                  className={
                    badgeColor(member?.badge?.name, 'text') + ' ml-1.5'
                  }
                >
                  {member?.badge?.name}
                </span>
              </h2>
              <div className="flex items-center">
                <div className="flex flex-col items-center mr-4  mb-1">
                  <div>
                    <img
                      className="max-h-[120px]"
                      src={'/storage/badges/' + member?.badge?.image}
                    />
                  </div>
                  <div
                    className={`font-bold mt-1 text-center whitespace-nowrap uppercase ${badgeColor(
                      member?.badge?.name,
                      'text'
                    )}`}
                  >
                    {member?.badge?.name} Badge
                  </div>
                  <div className="text-xs text-gray-500">
                    Expired:&nbsp;
                    {moment(expiredDate).locale(i18n.language).format('ll')}
                  </div>
                </div>
                <div className="ml-2">
                  {lastSession && (
                    <div className=" mb-2">
                      <span className="font-bold">
                        {lastSession.total_score}
                      </span>
                      &nbsp;
                      <span className=" uppercase">Points</span>
                    </div>
                  )}
                  <div className="grid lg:grid-cols-2 gap-x-3">
                    {scores?.map(score => {
                      return (
                        <div className="flex justify-center text-gray-500 text-sm mb-1">
                          <div className="capitalize">
                            {lowerCase(score?.assessment?.title).slice(0, 11)}
                          </div>
                          <div className="mx-1">-</div>
                          <div>{score?.score}</div>
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
                {t('no_assessment')}
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
