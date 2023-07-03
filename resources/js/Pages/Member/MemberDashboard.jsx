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
import { router } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function MemberDashboard({ member }) {
  const { t } = useTranslation();

  const pay = () => {
    router.post(route('member_payment.notif_handler'));
  };

  return (
    <MemberLayout>
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
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
          {member.status === 'active' && (
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
          )}
        </AdminSection>
        <AdminSection>
          {member.status === 'active' ? (
            <>
              {member && member.badge ? (
                <h2 className="font-bold text-[20px] mb-4">
                  {t('your_assessment')}
                </h2>
              ) : (
                <h2 className="font-bold text-[20px] mb-4">
                  {t('no_assessment')}
                </h2>
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
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className="ml-2"
                    />
                  </PrimaryButton>
                  <PrimaryButton color="lightSecondary">
                    {t('learn_more_assessment')}
                    <FontAwesomeIcon icon={faBook} className="ml-2" />
                  </PrimaryButton>
                </div>
              </div>
            </>
          ) : (
            <div>
              <h2 className="font-bold text-[20px] mb-4">
                {t('preview_member')}
              </h2>
              <div className="grid gap-4">
                <div>
                  <PrimaryButton
                    color="lightPrimary"
                    as="link"
                    href={route('member.assessment.index')}
                  >
                    {t('my_assessment')}
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className="ml-2"
                    />
                  </PrimaryButton>
                </div>
                <div>
                  <PrimaryButton
                    color="lightSecondary"
                    as="link"
                    href={route('member.module.index')}
                  >
                    {t('e_learning')}
                    <FontAwesomeIcon icon={faBook} className="ml-2" />
                  </PrimaryButton>
                </div>
              </div>
            </div>
          )}
        </AdminSection>
      </div>
      {member.status !== 'active' && (
        <AdminSection className="flex flex-col items-center justify-center gap-4">
          <h2 className="font-bold text-xl">{t('member_not_active')}</h2>
          <p className="text-sm">{t('member_locked_text')}</p>
          <PrimaryButton onClick={() => pay()}>
            {t('member_locked_button')}
          </PrimaryButton>
        </AdminSection>
      )}
    </MemberLayout>
  );
}

export default MemberDashboard;
