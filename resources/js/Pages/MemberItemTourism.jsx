import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function MemberItemTourism({ member, tribe }) {
  const { t } = useTranslation();
  const { auth } = usePage().props;
  return (
    <div
      className={`grid items-center member-tourism h-fit relative gap-6 mb-6 pb-6 border-b px-4 border-gray-300`}
    >
      {auth ? (
        member?.member_only === 'Yes' ? (
          <div className="rounded-bl-2xl rounded-tr-2xl text-white px-3 py-1 text-sm flex items-center bg-primary">
            Member Only
          </div>
        ) : (
          <div className="rounded-bl-2xl rounded-tr-2xl text-black px-3 py-1 text-sm flex items-center bg-gray-300">
            Public Directory
          </div>
        )
      ) : null}
      {member?.image && (
        <div className="mr-3 rounded-full w-[62px] h-[62px] bg-lightPrimary bg-opacity-30 flex justify-center items-center">
          <img
            src={`/storage/member/images/${member?.image}`}
            alt={member?.bussiness_name}
            className="w-[62px] max-h-[62px] object-contain rounded-full"
          />
        </div>
      )}
      <Link href={route('member.detail', member?.slug)}>
        <h4 className="font-bold text-lg leading-[22px]">
          {member?.business_name}
        </h4>
      </Link>
      {tribe?.id === 2 && (
        <div className="text-primary font-bold">{member?.category}</div>
      )}
      {member?.source && (
        <div className="flex items-center text-primary">
          <img
            src={`/storage/sources/${member?.source?.image}`}
            className="h-9 object-contain w-auto mr-3"
            alt=""
          />
          <p>{member?.source?.title}</p>
        </div>
      )}
      {member?.description && (
        <p className="mb-3 text-sm line-clamp-3">{member?.description}</p>
      )}
      <Link
        href={route('member.detail.tourism', member?.slug)}
        className="text-primary font-semibold"
      >
        {t('detail')}
      </Link>
    </div>
  );
}

export default MemberItemTourism;
