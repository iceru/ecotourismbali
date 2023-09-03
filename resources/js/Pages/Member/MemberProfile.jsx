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
import { lowerCase } from 'lodash';
import { badgeColor } from '@/Helper/BadgeColor';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import moment from 'moment';
import { getCountryCodePrefixedNumber } from '@/Helper/NumberHelper';

function MemberProfile({ member, scores, lastSession, expiredDate }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      member.member_slider.length > 1 ? 2 : member.member_slider.length,
    slidesToScroll: 1,
  };

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
        <div className="flex flex-wrap">
          <div className="w-full mb-4 lg:mb-0 lg:w-4/5">
            <div className="flex items-center mb-10">
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
                {member.category && (
                  <h6 className="uppercase text-primary">
                    {member.category?.name}
                  </h6>
                )}
                {member.program && (
                  <h6 className="text-sm">{member.program?.name}</h6>
                )}
              </div>
            </div>
            <div className="mb-10">
              {member.member_slider.length > 0 ? (
                <div className="-mx-2">
                  <Slider {...settings}>
                    {member.member_slider.map(slider => {
                      return (
                        <div className="px-2">
                          <div class="relative overflow-hidden pb-2/3">
                            <img
                              src={`/storage/member/sliders/${slider.image}`}
                              alt=""
                              class="absolute h-full w-full object-cover p-2"
                            />
                          </div>
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
            <div className="flex justify-center gap-8 mb-10">
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
                <div className="text-justify">{member.description}</div>
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

            <div className="flex justify-between items-end gap-6">
              <div className="flex gap-6 h-fit">
                {member.facebook && (
                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white">
                    <a
                      href={
                        member?.facebook?.includes('http')
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
                        member.instagram?.includes('http')
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
                      href={
                        member.whatsapp?.includes('http')
                          ? member.whatsapp
                          : `https://wa.me/${getCountryCodePrefixedNumber(
                              member.whatsapp
                            )}`
                      }
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
                        member.twitter?.includes('http')
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
                <div className="bg-primary text-white p-4 rounded-xl">
                  <h5 className="font-semibold text-lg mb-2">
                    {t('merchant_promo')}
                  </h5>
                  <p>{member?.merchant_promo}</p>
                </div>
              )}
            </div>
          </div>
          {member?.program?.name !== 'Green Pal' && (
            <div className="w-full lg:w-1/5">
              {member.badge ? (
                <div>
                  <div className="flex flex-col items-center   mb-1">
                    <div>
                      <img
                        className="max-h-[120px]"
                        src={'/storage/badges/' + member?.badge?.image}
                      />
                    </div>
                    <div
                      className={`font-bold mt-1 text-center uppercase ${badgeColor(
                        member?.badge?.name,
                        'text'
                      )}`}
                    >
                      {member?.badge?.name} Badge
                    </div>
                    <div className="text-xs text-center mt-1 mb-1 text-gray-500">
                      Expired:&nbsp;
                      {moment(expiredDate).format('ll')}
                    </div>
                  </div>
                  {lastSession && (
                    <div className="text-center text-gray-500 text-xs mb-1">
                      <span className="font-bold">
                        {lastSession.total_score}
                      </span>
                      &nbsp;
                      <span className=" uppercase">Points</span>
                    </div>
                  )}
                  {scores?.map(score => {
                    return (
                      <div className="flex justify-center text-gray-500 text-xs mb-1">
                        <div className="capitalize">
                          {lowerCase(score?.assessment?.title).slice(0, 11)}
                        </div>
                        <div className="mx-1">-</div>
                        <div>{score?.score}</div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <PrimaryButton
                    as="link"
                    href={route('member.assessment.index')}
                    color="lightPrimary"
                    className="flex gap-2 items-center"
                  >
                    {t('start_assessment')}
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </PrimaryButton>
                </div>
              )}
            </div>
          )}
        </div>
      </AdminSection>
    </MemberLayout>
  );
}

export default MemberProfile;
