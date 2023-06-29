import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import Guest from '@/Layouts/GuestLayout';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function MemberList({ member }) {
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
      : member.member_slider?.length > 2
      ? 3
      : member.member_slider?.length,
    slidesToScroll: 1,
  };

  return (
    <Guest>
      <section className="flex justify-between items-center mb-12 flex-wrap">
        <div className="flex items-center mb-6 lg:mb-0">
          <div className="mr-4">
            <img
              src={'/storage/member/images/' + member.image}
              alt={member.business_name}
              className="w-[120px] h-[120px] object-cover rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{member.business_name}</h2>
            <h4>{member.category?.name}</h4>
            <h4>{member.program?.name}</h4>
          </div>
        </div>
        {member.badge ? (
          <div>
            <img src={member.badge?.image} alt="" />
            <div>{member.badge?.name}</div>
          </div>
        ) : (
          <div className="font-bold text-lg">{t('not_verified')}</div>
        )}
      </section>
      <section className="mb-12 -mx-2">
        <Slider {...settings}>
          {member.member_slider?.map(slider => {
            return (
              <div>
                <img
                  src={`/storage/member/sliders/${slider.image}`}
                  alt=""
                  className="p-2"
                />
              </div>
            );
          })}
        </Slider>
      </section>
      <section className="mb-12">
        <div className="flex justify-center gap-6 ">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-primary mr-2 mt-0.5"
            />
            {member.website}
          </div>
        </div>
      </section>
      <section className="text-justify">{member.description}</section>
    </Guest>
  );
}

export default MemberList;
