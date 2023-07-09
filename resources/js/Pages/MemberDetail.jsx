import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import Guest from '@/Layouts/GuestLayout';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHome } from '@fortawesome/free-solid-svg-icons';
import BackTo from './Admin/Components/BackTo';
import { lowerCase } from 'lodash';
import { badgeColor } from '@/Helper/BadgeColor';

function MemberList({ member, lastSession, scores }) {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({
    query: '(min-width: 992px)',
  });

  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: !isDesktop
      ? 1
      : member?.member_slider?.length > 2
      ? 3
      : member?.member_slider?.length,
    slidesToScroll: 1,
  };

  return (
    <Guest>
      <BackTo
        title="back_to_list_members"
        className="text-sm px-4 py-2 bg-primary text-white inline-flex rounded-3xl"
        link={route('member.list')}
      />
      <div className="flex flex-wrap mt-10">
        <div className="lg:w-4/5 lg:pr-10">
          <section className="flex justify-between items-center mb-12 flex-wrap">
            <div className="flex items-center mb-6 lg:mb-0">
              {member.image && (
                <div className="mr-4">
                  <img
                    src={'/storage/member/images/' + member?.image}
                    alt={member?.business_name}
                    className="w-[120px] h-[120px] object-cover rounded-full"
                  />
                </div>
              )}
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {member?.business_name}
                </h2>
                <h4 className="uppercase text-primary tracking-wide mb-2">
                  {member?.category?.name}
                </h4>
                <h6>{member?.program?.name}</h6>
              </div>
            </div>
          </section>
          <section className="mb-12 -mx-2">
            <Slider {...settings}>
              {member?.member_slider?.map(slider => {
                return (
                  <div>
                    <img
                      src={`/storage/member/sliders/${slider.image}`}
                      alt=""
                      className="p-2 max-w-screen"
                    />
                  </div>
                );
              })}
            </Slider>
          </section>
          <section className="mb-12">
            <div className="grid grid-cols-2 gap-6 ">
              {member?.address && (
                <div className="flex items-center justify-end">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="text-primary mr-2 mt-0.5"
                  />
                  {member?.address}
                </div>
              )}
              {member?.website && (
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-primary mr-2 mt-0.5"
                  />
                  {member?.website}
                </div>
              )}
            </div>
          </section>
          <section className="text-justify">{member?.description}</section>
        </div>

        <div className="lg:w-1/5 mx-auto flex lg:block gap-12 sticky top-0 lg:border-l pl-4 mt-10 lg:mt-0">
          {member.verified_badge && (
            <div className="flex flex-col items-center text-primary uppercase mb-4 pb-4 lg:border-b">
              <div>
                <img
                  className="max-h-[120px]"
                  src={'/storage/badges/' + member.verified_badge.image}
                />
              </div>
              <div
                className={`font-bold mt-1 text-yellow-500 text-yellow-700 text-slate-500 ${badgeColor(
                  member.badge.name,
                  'text'
                )}`}
              >
                {member.verified_badge.name} Verified Badge
              </div>
            </div>
          )}
          {member?.badge ? (
            <div>
              <div className="flex flex-col items-center  uppercase mb-1">
                <div>
                  <img
                    className="max-h-[120px]"
                    src={'/storage/badges/' + member.badge.image}
                  />
                </div>
                <div
                  className={`font-bold mt-1 text-yellow-500 text-yellow-700 text-slate-500 ${badgeColor(
                    member.badge.name,
                    'text'
                  )}`}
                >
                  {member.badge.name} Badge
                </div>
              </div>
              {lastSession && (
                <div className="text-center text-gray-500  text-xs mb-3">
                  <span className="font-bold">{lastSession.total_score}</span>
                  &nbsp;
                  <span className=" uppercase">Points</span>
                </div>
              )}
              {scores.map(score => {
                return (
                  <div className="flex justify-center text-gray-500 text-xs mb-1">
                    <div className="capitalize">
                      {lowerCase(score.assessment.title).slice(0, 11)}
                    </div>
                    <div className="mx-1">-</div>
                    <div>{score.score}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-slate-600 text-white rounded-full px-3 py-1 font-bold inline-block">
              No Badge
            </div>
          )}
        </div>
      </div>
    </Guest>
  );
}

export default MemberList;
