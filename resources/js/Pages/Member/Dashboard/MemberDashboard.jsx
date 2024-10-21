import { router, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { faPaperclip, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import queryString from 'query-string';
import 'moment/locale/id';

import AdminSection from '@/Components/AdminSection';
import Button from '@/Components/Button';
import MemberLayout from '@/Layouts/MemberLayout';
import { currency } from '@/Helper/Formatter';
import TitleSection from '../../Admin/Components/TitleSection';
import MemberBadge from './MemberBadge';
import MemberDashboardForm from './MemberDashboardForm';
import MemberGreenpal from './MemberGreenpal';

import Greenpal from '../../../../images/greenpal.png';

function MemberDashboard({
  member,
  scores,
  lastSession,
  business_type,
  expiredDate,
  categories,
}) {
  const { t } = useTranslation();
  const [payComplete, setPayComplete] = useState(false);
  const [payPending, setPayPending] = useState(false);

  const parsed = queryString.parse(location.search);
  const { flash } = usePage().props;

  const payCompleteStorage = sessionStorage.getItem('paid');
  let snapToken = sessionStorage.getItem('snapToken');

  const pay = () => {
    const snapInit = snapToken => {
      snap.pay(snapToken, {
        onSuccess: function () {
          setPayComplete(true);
          setPayPending(false);
          sessionStorage.clear('snapToken');
          sessionStorage.setItem('paid', true);
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

  const resetPay = () => {
    sessionStorage.clear('snapToken');
  };

  useEffect(() => {
    if (parsed.newPayment) {
      setPayComplete(true);
    }
  }, []);

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
        {member?.program?.name === 'Green Pal' && (
          <>
            <AdminSection>
              <TitleSection title="welcome_greenpal" className="mb-4" />
              <div className="flex">
                <img
                  src={Greenpal}
                  className="h-[120px] mr-4"
                  alt="Green Pal"
                />
                <p className="text-sm text-justify mb-2">
                  {t('greenpal_info')}
                </p>
              </div>
            </AdminSection>
            <AdminSection>
              <TitleSection title="greenpal_community" className="mb-4" />
              <p className="text-sm text-justify mb-2">{t('greenpal_text')}</p>
              <p className="text-sm text-justify">{t('greenpal_text_2')}</p>
            </AdminSection>
          </>
        )}
        {member?.program?.name !== 'Green Pal' && (
          <>
            <AdminSection>
              <TitleSection title="welcome_member" className="mb-4" />
              <div>
                <Button
                  as="link"
                  href={route('member.profile')}
                  className="mb-4 !inline-block"
                  color="lightPrimary"
                >
                  {t('edit_profile')}
                  <FontAwesomeIcon className="ml-2" icon={faUser} />
                </Button>
              </div>
              {member?.status?.includes('active') &&
                member?.program?.name !== 'Green Pal' && (
                  <div>
                    <Button
                      className="!inline-block"
                      as="link"
                      href={route('member.module.index')}
                      color="lightSecondary"
                    >
                      {t('start_learning')}
                      <FontAwesomeIcon icon={faPaperclip} className="ml-2" />
                    </Button>
                  </div>
                )}
            </AdminSection>
            <AdminSection>
              <MemberBadge
                member={member}
                lastSession={lastSession}
                scores={scores}
                expiredDate={expiredDate}
              />
            </AdminSection>
          </>
        )}
      </div>
      {!member?.status?.includes('active') && (
        <AdminSection className="flex flex-col items-center justify-center gap-4">
          {member?.program?.name !== 'Green Pal' && (
            <h2 className="font-bold text-xl">{t('member_not_active')}</h2>
          )}
          {member?.status === 'payment' && member?.total_payment ? (
            <>
              <p className="text-sm">{t('member_locked_text')}</p>
              <div className="flex flex-wrap justify-between w-full lg:w-2/3 items-center bg-lightSecondary bg-opacity-60 rounded-2xl p-6 mt-4">
                <div className=" mb-4 lg:mb-0">
                  <p>{t('total_payment')}</p>
                  <h4 className="text-2xl font-bold mb-2">
                    <span>
                      <strike>{currency.format(12000000)}</strike>
                      <span className="ml-2 text-red-600 text-3xl">
                        {currency.format(member?.total_payment)}
                      </span>
                    </span>
                  </h4>
                  <p>
                    Secure our launch price <strong>Exp 31 Oct 2024</strong>
                  </p>
                </div>
                <div className="flex items-center">
                  {snapToken && (
                    <Button
                      className="text-[16px] mr-4"
                      color="danger"
                      onClick={resetPay}
                    >
                      {t('reset_pay')}
                    </Button>
                  )}
                  <Button
                    className="text-[16px] "
                    onClick={() =>
                      !member?.status?.includes('active') ? pay() : null
                    }
                  >
                    {t('member_locked_button')}
                  </Button>
                </div>
              </div>
            </>
          ) : member?.status === 'waiting_approval' ? (
            <>
              <p>{t('member_not_approved')}</p>
            </>
          ) : (
            <>
              {member?.program?.name !== 'Green Pal' ? (
                <MemberDashboardForm
                  business_type={business_type}
                  member={member}
                />
              ) : (
                <MemberGreenpal member={member} categories={categories} />
              )}
            </>
          )}
        </AdminSection>
      )}
    </MemberLayout>
  );
}

export default MemberDashboard;
