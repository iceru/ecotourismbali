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
import { router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import queryString from 'query-string';

function MemberDashboard({ member }) {
  const { t } = useTranslation();
  const [payComplete, setPayComplete] = useState(false);
  const [payPending, setPayPending] = useState(false);
  const parsed = queryString.parse(location.search);
  const { flash } = usePage().props;

  const payCompleteStorage = localStorage.getItem('paid');
  const pay = () => {
    let snapToken = sessionStorage.getItem('snapToken');

    const snapInit = snapToken => {
      snap.pay(snapToken, {
        onSuccess: function () {
          setPayComplete(true);
          setPayPending(false);
          sessionStorage.clear('snapToken');
          localStorage.setItem('paid', true);
          router.visit('/member/dashboard?newPayment=true');
        },
        onPending: function () {
          setPayPending(true);
        },
        onError: function () {
          setPayPending(false);
          sessionStorage.clear('snapToken');
        },
        onClose: function () {
          setPayPending(true);
        },
      });
    };
    if (!snapToken) {
      axios.post(route('member_payment.new_payment'), {}).then(function (res) {
        sessionStorage.setItem('snapToken', res.data);
        snapInit(res.data);
      });
    } else {
      snapInit(snapToken);
    }
  };

  useEffect(() => {
    if (parsed.newPayment) {
      setPayComplete(true);
    }
  }, []);

  const notifyAdmin = () => {
    router.post(route('member.notifyPayment'));
  };

  return (
    <MemberLayout>
      {payComplete || payCompleteStorage ? (
        <div className="px-4 py-3 bg-primary text-white rounded-md inline-flex mb-4">
          {t('pay_complete')}
        </div>
      ) : null}
      {payPending && (
        <div className="px-4 py-3 bg-yellow-300 rounded-md inline-flex mb-4 transition">
          {t('pay_pending')}
        </div>
      )}
      {flash.success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl relative mb-3">
          <span className="inline">{flash.success}</span>
        </div>
      )}
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
          {member.total_payment ? (
            <>
              <p className="text-sm">{t('member_locked_text')}</p>
              <PrimaryButton
                onClick={() => (member.status !== 'active' ? pay() : null)}
              >
                {t('member_locked_button')}
              </PrimaryButton>
            </>
          ) : (
            <>
              <p className="text-sm">{t('notify_admin_text')}</p>
              <PrimaryButton onClick={() => notifyAdmin()} color="secondary">
                {t('notify_admin')}
              </PrimaryButton>
            </>
          )}
        </AdminSection>
      )}
    </MemberLayout>
  );
}

export default MemberDashboard;
