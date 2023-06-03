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
  //   if (isEmpty(member)) {
  //     window.location.href = '/member/locked';
  //   }
  // }, []);

  return (
    <MemberLayout>
      <div className="grid lg:grid-cols-2 gap-6">
        <AdminSection>
          <h2 className="font-bold text-[20px] mb-4">{t('welcome_member')}</h2>
          <PrimaryButton className="mb-4 !block" type="lightPrimary">
            {t('edit_profile')}
            <FontAwesomeIcon className="ml-2" icon={faUser} />
          </PrimaryButton>
          <PrimaryButton className="!block" type="lightSecondary">
            {t('start_learning')}
            <FontAwesomeIcon icon={faPaperclip} className="ml-2" />
          </PrimaryButton>
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
              <PrimaryButton type="lightPrimary">
                {t('start_assessment')}
                <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2" />
              </PrimaryButton>
              <PrimaryButton type="lightSecondary">
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
