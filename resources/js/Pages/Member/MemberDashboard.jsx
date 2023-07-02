import AdminSection from '@/Components/AdminSection';
import PrimaryButton from '@/Components/PrimaryButton';
import MemberLayout from '@/Layouts/MemberLayout';
import {
  faBook,
  faLongArrowAltRight,
  faPaperclip,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { isEmpty } from 'lodash';

function MemberDashboard({ user, member }) {
  const { t } = useTranslation();

  // useEffect(() => {
  //   if (isEmpty(member) && member?.status !== 'active') {
  //     window.location.href = '/member/locked';
  //   }
  // }, [member]);

  return (
    <MemberLayout>
      <div className="grid lg:grid-cols-2 gap-6">
        <AdminSection>
          <h2 className="font-bold text-[20px] mb-4">{t('welcome_member')}</h2>
          <div>
            <PrimaryButton
              as="link"
              href={route('member.profile')}
              className="mb-4 !inline-block"
              color="lightPrimary"
            >
              {t('edit_profile')}
              <FontAwesomeIcon className="ml-2" icon={faUser} />
            </PrimaryButton>
          </div>
          <div>
            <PrimaryButton
              className="!inline-block"
              as="link"
              href={route('member.module.index')}
              color="lightSecondary"
            >
              {t('start_learning')}
              <FontAwesomeIcon icon={faPaperclip} className="ml-2" />
            </PrimaryButton>
          </div>
        </AdminSection>
        <AdminSection>
          {member && member.badge ? (
            <h2 className="font-bold text-[20px] mb-4">
              {t('your_assessment')}
            </h2>
          ) : (
            <h2 className="font-bold text-[20px] mb-4">{t('no_assessment')}</h2>
          )}
          <div className="flex items-center">
            {member && member.badge && (
              <div>
                <img src={member.badge.image} alt={member.badge.name} />
              </div>
            )}
            <div className="grid gap-4">
              <PrimaryButton color="lightPrimary">
                {t('start_assessment')}
                <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2" />
              </PrimaryButton>
              <PrimaryButton color="lightSecondary">
                {t('learn_more_assessment')}
                <FontAwesomeIcon icon={faBook} className="ml-2" />
              </PrimaryButton>
            </div>
          </div>
        </AdminSection>
      </div>
    </MemberLayout>
  );
}

export default MemberDashboard;
