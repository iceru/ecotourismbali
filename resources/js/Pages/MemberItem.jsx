import React from 'react';
import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { badgeColor } from '@/Helper/BadgeColor';
import { toLower } from 'lodash';

function MemberItem({ member, tribe }) {
  const { t } = useTranslation();
  console.log(member);
  return (
    <div>
      <div className="border rounded-2xl p-4 h-fit">
        {tribe?.id === 1 ? (
          <>
            {member?.verified_badge_id ? (
              <div>
                <div
                  className={`rounded-bl-2xl rounded-tr-2xl text-white px-3 py-1 text-[12px] flex -mt-4 
                    -mr-4 w-fit float-right items-center  
                  ${badgeColor(member?.verified_badge?.name, 'color')}
                  `}
                >
                  <div>
                    <img
                      src={'/storage/badges/' + member?.badge?.image}
                      alt=""
                      className="h-6 mr-2 brightness-0 filter invert"
                    />
                  </div>
                  <span>Verified {member?.verified_badge?.name}</span>
                </div>
              </div>
            ) : member?.badge && !member?.verified_badge_id ? (
              <div
                className={`rounded-bl-2xl rounded-tr-2xl text-white px-3 py-1 text-[12px] flex -mt-4 
                      -mr-4 w-fit float-right items-center  
                    ${badgeColor(member?.badge?.name, 'color')}
                    `}
              >
                <div>
                  <img
                    src={'/storage/badges/' + member?.badge?.image}
                    alt=""
                    className="h-6 mr-2 brightness-0 filter invert"
                  />
                </div>
                <span>{member?.badge?.name}</span>
              </div>
            ) : (
              <div className="rounded-bl-2xl rounded-tr-2xl bg-gray-100  px-3 py-1 text-[12px] flex -mt-4 -mr-4 w-fit float-right">
                <div>{t('no_badge')}</div>
              </div>
            )}
          </>
        ) : (
          tribe?.id === 2 &&
          toLower(member?.member_only) === 'yes' && (
            <div
              className={`rounded-bl-2xl rounded-tr-2xl text-white px-3 py-1 text-[12px] flex
                      -mt-4 -mr-4 w-fit float-right items-center bg-primary`}
            >
              Member Only
            </div>
          )
        )}
        <div className="flex items-center my-4">
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
            <h4 className="font-bold text-lg leading-[22px] mb-1">
              {member?.business_name}
            </h4>
            {member?.category && (
              <h6 className="text-xs uppercase text-primary">
                {member?.category?.name}
              </h6>
            )}
            {tribe?.id === 2 && (
              <div className="mt-2 text-primary uppercase">
                {member?.category}
              </div>
            )}
            {member?.source && (
              <div className="flex items-center mt-2 font-bold text-primary">
                <img
                  src={`/storage/sources/${member?.source?.image}`}
                  className="h-6 object-contain w-auto mr-2"
                  alt=""
                />
                <p>{member?.source?.title} Directory</p>
              </div>
            )}
          </Link>
        </div>
        <p className="mb-3 text-sm line-clamp-3">{member?.description}</p>
        <Link
          href={route('member.detail', member?.slug)}
          className="text-sm text-primary font-semibold"
        >
          {t('learn_more')}
        </Link>
      </div>
    </div>
  );
}

export default MemberItem;
