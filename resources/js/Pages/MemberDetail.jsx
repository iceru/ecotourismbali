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
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import greenpal from '../../images/greenpal.png';
import sdg2 from '../../images/sdg/2.png';
import sdg4 from '../../images/sdg/4.png';
import sdg6 from '../../images/sdg/6.png';
import sdg7 from '../../images/sdg/7.png';
import sdg8 from '../../images/sdg/8.png';
import sdg9 from '../../images/sdg/9.png';
import sdg11 from '../../images/sdg/11.png';
import sdg12 from '../../images/sdg/12.png';
import sdg13 from '../../images/sdg/13.png';
import sdg14 from '../../images/sdg/14.png';
import sdg15 from '../../images/sdg/15.png';

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
      : member?.member_slider?.length > 1
      ? 2
      : member?.member_slider?.length,
    slidesToScroll: 1,
  };

  const sdgHotel = [4, 6, 7, 8, 11, 12, 13, 14, 15];
  const sdgRestaurant = [2, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15];

  console.log(member?.business_type?.name);

  return (
    <Guest>
      <BackTo
        title="back_to_list_members"
        className="text-sm text-primary inline-flex rounded-3xl"
        link={route('member.list')}
      />
      <div className="flex flex-wrap mt-10">
        <div
          className={`${
            member?.program?.name !== 'Green Pal' ? 'lg:w-3/4 w-full' : 'w-full'
          } lg:pr-10`}
        >
          <section className="flex justify-between items-center md:mb-12 mb-6 flex-wrap">
            <div className="flex items-center mb-6 md:mb-0">
              {member.image && (
                <div className="mr-3 lg:w-[120px] lg:h-[120px] shrink-0 w-[90px] h-[90px] object-contain rounded-full bg-primary bg-opacity-10 flex justify-center items-center">
                  <img
                    src={'/storage/member/images/' + member?.image}
                    alt={member?.business_name}
                    className="lg:w-[120px] lg:h-[120px] w-[90px] h-[90px] rounded-full object-contain"
                  />
                </div>
              )}
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  {member?.business_name}
                </h2>
                <h4 className="uppercase text-primary text-xs md:text-base tracking-wide mb-2">
                  {member?.category?.name}
                </h4>
              </div>
            </div>
            {member?.program?.name === 'Green Pal' && (
              <div className="flex justify-center items-center flex-col w-full md:w-fit">
                <div className="flex justify-center">
                  <img
                    src={greenpal}
                    alt="Green Pal"
                    className="lg:w-[100px] w-[70px]"
                  />
                </div>
                <h4 className="m-0 font-bold text-greenpal mt-2 text-center">
                  Green Pal Member
                </h4>
              </div>
            )}
          </section>
          <section className="md:mb-12 mb-6 md:-mx-2">
            <Slider {...settings}>
              {member?.member_slider?.map(slider => {
                return (
                  <div className="md:px-2">
                    <div className="relative overflow-hidden pb-2/3">
                      <img
                        src={`/storage/member/sliders/${slider.image}`}
                        alt=""
                        className="absolute h-full w-full object-contain p-1"
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </section>
          <section className="md:mb-12 mb-6">
            <div className="flex justify-center flex-col md:flex-row flex-wrap gap-4">
              {member?.address && (
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="text-white bg-primary p-[8px] rounded-full mt-0.5 z-10 relative h-[24px] w-[24px]"
                  />
                  <div className="border-primary border px-4 py-0.5 pl-8 -ml-6 z-0 rounded-xl text-primary font-semibold">
                    {member?.address}
                  </div>
                </div>
              )}
              {member?.website && (
                <a
                  href={member?.website}
                  target="_blank"
                  className="flex items-center hover:text-primary justify-center transition"
                >
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-white bg-primary p-[8px] rounded-full mt-0.5 z-10 relative h-[24px] w-[24px]"
                  />
                  <a
                    href={
                      member?.website?.includes('http')
                        ? member?.website
                        : `https://${member.website}`
                    }
                    className="border-primary border px-4 py-0.5 pl-8 -ml-6 z-0 rounded-xl hover:bg-primary hover:text-white transition text-primary font-semibold"
                  >
                    {member?.website}
                  </a>
                </a>
              )}
            </div>
          </section>
          <div
            className={`${
              member?.program?.name === 'Green Pal'
                ? 'lg:w-3/4 w-full mx-auto'
                : ''
            }`}
          >
            <section className="text-justify mb-10">
              {member?.description}
            </section>
            <div className="flex justify-between items-center gap-6 flex-wrap">
              <div className="flex gap-6 h-fit">
                {member.facebook && (
                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white">
                    <a
                      href={
                        member.facebook.includes('http')
                          ? member.facebook
                          : `https://${member.facebook}`
                      }
                      target="_blank"
                      className="mt-1"
                    >
                      <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                    </a>
                  </div>
                )}
                {member.instagram && (
                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white">
                    <a
                      href={
                        member.instagram.includes('http')
                          ? member.instagram
                          : `https://${member.instagram}`
                      }
                      target="_blank"
                      className="mt-1"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-2xl"
                      />
                    </a>
                  </div>
                )}
                {member.whatsapp && (
                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white">
                    <a
                      href={`https://wa.me/${member.whatsapp}`}
                      target="_blank"
                      className="mt-1"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                    </a>
                  </div>
                )}
                {member.twitter && (
                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white">
                    <a
                      href={
                        member.twitter.includes('http')
                          ? member.twitter
                          : `https://${member.twitter}`
                      }
                      target="_blank"
                      className="mt-1"
                    >
                      <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                    </a>
                  </div>
                )}
              </div>
              {member?.merchant_promo && (
                <div className="bg-primary text-white p-4 rounded-xl w-full md:w-fit">
                  <h5 className="font-semibold text-lg mb-2">
                    {t('merchant_promo')}
                  </h5>
                  <p>{member?.merchant_promo}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {member?.program?.name !== 'Green Pal' && (
          <div className="lg:w-1/4 mx-auto w-full md:gap-12 top-0 py-4 px-3  mt-10 md:mt-0 sticky min-h-[50vh]">
            {member?.badge && (
              <div
                className={`absolute top-0 px-3 left-0 ${badgeColor(
                  member?.badge?.name,
                  'color'
                )} bg-opacity-[3%] border border-opacity-30 border-${badgeColor(
                  member?.badge?.name,
                  'plain'
                )}  rounded-2xl h-full w-full -z-10`}
              ></div>
            )}
            <>
              {member?.verified_badge && (
                <div className="flex flex-col items-center text-primary uppercase mb-4 pb-4">
                  <div>
                    <img
                      className="max-h-[200px]"
                      src={'/storage/badges/' + member?.verified_badge.image}
                    />
                  </div>
                  <div
                    className={`font-bold ${badgeColor(
                      member?.verified_badge?.name,
                      'text'
                    )}`}
                  >
                    {member?.verified_badge.name} {t('verified_badge')}
                  </div>
                </div>
              )}
              {member?.badge ? (
                <div>
                  <div className="flex flex-col items-center  uppercase mb-1">
                    <div>
                      <img
                        className="max-h-[120px]"
                        src={'/storage/badges/' + member?.badge?.image}
                      />
                    </div>
                    <div
                      className={`font-bold mt-1 ${badgeColor(
                        member?.badge?.name,
                        'text'
                      )}`}
                    >
                      {member?.badge?.name} Badge
                    </div>
                  </div>
                  {lastSession && (
                    <div className="text-center text-gray-500 mb-3">
                      <span className="font-bold">
                        {lastSession.total_score}
                      </span>
                      &nbsp;
                      <span className=" uppercase">Points</span>
                    </div>
                  )}
                  {scores?.map(score => {
                    return (
                      <div className="flex justify-center text-gray-500 mb-1">
                        <div className="capitalize">
                          {lowerCase(score.assessment.title).slice(0, 11)}
                        </div>
                        <div className="mx-1">-</div>
                        <div>{score.score}</div>
                      </div>
                    );
                  })}
                  {member?.business_type?.name.includes('Hotel') && (
                    <div className="flex justify-center flex-wrap gap-2 mt-6">
                      {sdgHotel.map(element => {
                        return (
                          <div className="w-1/3 lg:w-1/4">
                            <img src={eval(`sdg${element}`)} alt="" />
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {member?.business_type?.name.includes('Restaurant') && (
                    <div className="flex justify-center flex-wrap gap-2 mt-6">
                      {sdgRestaurant.map(element => {
                        return (
                          <div className="w-1/3 lg:w-1/4">
                            <img src={eval(`sdg${element}`)} alt="" />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-slate-600 text-white rounded-full px-3 py-1 font-bold inline-block">
                  No Badge
                </div>
              )}
            </>
          </div>
        )}
      </div>
    </Guest>
  );
}

export default MemberList;
