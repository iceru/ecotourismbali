import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import Guest from '@/Layouts/GuestLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHome } from '@fortawesome/free-solid-svg-icons';
import BackTo from './Admin/Components/BackTo';

function MemberList({ member, program }) {
  const { t } = useTranslation();

  return (
    <Guest>
      <BackTo
        title="back_to_list_members"
        className="text-primary inline-flex rounded-3xl"
        link={'/directory?program=2'}
      />
      <div className="flex flex-wrap lg:flex-nowrap items-center mt-10">
        <div className="w-full lg:w-1/5 mr-6">
          <img
            src={'/storage/programs/' + program?.image}
            className="w-full"
            alt=""
          />
        </div>
        <div className="w-full lg:w-4/5">
          <section className="flex justify-between items-center flex-wrap">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {member?.business_name}
              </h2>
              <h4 className="uppercase text-primary text-xs md:text-base tracking-wide mb-2">
                {member?.category}
              </h4>
            </div>
          </section>
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
          {member?.name && (
            <div className="text-lg mb-2 flex">
              <div className="w-20">Owner </div> <span className="mr-2">:</span>
              <strong>{member?.name}</strong>
            </div>
          )}
          {member?.phone && (
            <div className="text-lg mb-2 flex">
              <div className="w-20">Phone </div> <span className="mr-2">:</span>
              <strong>{member?.phone}</strong>
            </div>
          )}
          {member?.email && (
            <div className="text-lg mb-2 flex">
              <div className="w-20">Email </div>
              <span className="mr-2">:</span>
              <strong>{member?.email}</strong>
            </div>
          )}
          {member?.source && (
            <div className="text-lg mt-3 flex items-center">
              <img
                src={'/storage/sources/' + member?.source?.image}
                className="h-8 object-contain mr-2"
                alt=""
              />
              Directory From{' '}
              <strong className="ml-1 text-greenpal">
                {member?.source?.title}
              </strong>
            </div>
          )}
        </div>
      </div>
    </Guest>
  );
}

export default MemberList;
