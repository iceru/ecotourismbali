import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightLong,
  faGlobe,
  faHome,
  faImage,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import PrimaryButton from '@/Components/PrimaryButton';

import noImage from '../../../images/no-image.jpg';

function MemberProfile({ member }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      member.member_slider.length > 2 ? 3 : member.member_slider.length,
    slidesToScroll: 1,
  };

  console.log(member.member_slider);
  return (
    <MemberLayout>
      <AdminSection>
        <h2 className="font-bold text-xl mb-4">{t('my_profile')}</h2>
        {flash.success && (
          <div className="bg-green-100 border border-green-400 mb-3 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
        <PrimaryButton
          as="link"
          href={route('member.profile.edit', member?.id)}
          className="mb-6 flex items-center gap-2"
        >
          {t('edit_profile')}
          <FontAwesomeIcon icon={faPen} />
        </PrimaryButton>
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center">
            <div>
              {member.image ? (
                <img
                  className="w-24 h-24 rounded-full mr-4 object-cover"
                  src={`/storage/member/images/${member.image}`}
                  alt=""
                />
              ) : (
                <img
                  className="w-24 h-24 rounded-full mr-4"
                  src={noImage}
                  alt=""
                />
              )}
            </div>
            <div>
              <h3 className="font-bold text-lg">
                {member.business_name || 'Business Name'}
              </h3>
            </div>
          </div>
          <div>
            <PrimaryButton
              as="link"
              href={route('member.assessment.index')}
              type="lightPrimary"
              className="flex gap-2 items-center"
            >
              {t('start_assessment')}
              <FontAwesomeIcon icon={faArrowRightLong} />
            </PrimaryButton>
          </div>
        </div>
        <div className="mb-10">
          {member.member_slider ? (
            <div className="-mx-2">
              <Slider {...settings}>
                {member.member_slider.map(slider => {
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
            </div>
          ) : (
            <div className="flex gap-2 text-gray-600 justify-center items-center p-6 py-12 border rounded-lg border-dashed border-gray-600">
              {t('add_slider')}
              <FontAwesomeIcon icon={faImage} />
            </div>
          )}
        </div>
        <div className="flex justify-around mb-10">
          <div>
            {member?.address ? (
              <div className="flex gap-2 text-gray-600 justify-center items-center">
                <FontAwesomeIcon icon={faHome} />
                <div>{member.address}</div>
              </div>
            ) : (
              <a
                className="flex gap-2 text-gray-600 justify-center items-center cursor-pointer"
                href={route('member.profile.edit', member?.id)}
              >
                {t('add_address')}
                <FontAwesomeIcon icon={faHome} />
              </a>
            )}
          </div>
          <div>
            {member?.website ? (
              <div className="flex gap-2 text-gray-600 justify-center items-center">
                <FontAwesomeIcon icon={faGlobe} />
                <div>{member.website}</div>
              </div>
            ) : (
              <a
                className="flex gap-2 text-gray-600 justify-center items-center cursor-pointer"
                href={route('member.profile.edit', member?.id)}
              >
                {t('add_website')}
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            )}
          </div>
        </div>
        <div className="mb-6">
          {member?.description ? (
            <div className="text-center">{member.description}</div>
          ) : (
            <a
              className="flex gap-2 text-gray-600 justify-center items-center cursor-pointer"
              href={route('member.profile.edit', member?.id)}
            >
              {t('add_description')}
              <FontAwesomeIcon icon={faPen} />
            </a>
          )}
        </div>
      </AdminSection>
    </MemberLayout>
  );
}

export default MemberProfile;
