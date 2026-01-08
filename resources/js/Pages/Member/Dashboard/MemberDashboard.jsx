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
import MemberBadge from './components/MemberBadge';
import MemberDashboardForm from './MemberDashboardForm';
import MemberGreenpal from './MemberGreenpal';

import Greenpal from '../../../../images/greenpal.png';
import MemberNGO from './MemberNGO';
import MemberDashboardActive from './components/MemberDashboardActive';

function MemberDashboard({
  member,
  scores,
  lastSession,
  business_type,
  expiredDate,
  categories,
  assessments,
}) {
  const { t } = useTranslation();
  const [payComplete, setPayComplete] = useState(false);
  const [payPending, setPayPending] = useState(false);
  const [snk, setSnk] = useState(false);

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
    setPayComplete(false);
    if (parsed.newPayment) {
      setPayComplete(true);
    }
  }, []);
  console.log(member);
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
      {member?.program?.name.includes('Green Pal') && (
        <>
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
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
              <p className="text-sm text-justify mb-2">
                {t('greenpal_text_2')}
              </p>
            </AdminSection>
          </div>

          {member?.status !== 'active' && (
            <AdminSection>
              <MemberGreenpal
                member={member}
                categories={categories}
                snapToken={snapToken}
                pay={pay}
              />
            </AdminSection>
          )}
        </>
      )}
      {member?.program?.name.includes('NGO') && (
        <>
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <AdminSection>
              <TitleSection title="welcome_ngo" className="mb-4" />
              <div className="flex">
                <img
                  src={Greenpal}
                  className="h-[120px] mr-4"
                  alt="Green Pal"
                />
                <p className="text-sm text-justify mb-2">{t('ngo_info')}</p>
              </div>
            </AdminSection>
            <AdminSection>
              <TitleSection title="greenpal_community" className="mb-4" />
              <p className="text-sm text-justify mb-2">{t('greenpal_text')}</p>
              <p className="text-sm text-justify mb-2">
                {t('greenpal_text_2')}
              </p>
            </AdminSection>
          </div>

          {!member?.company_name && !member?.description && (
            <AdminSection>
              <MemberNGO member={member} categories={categories} />
            </AdminSection>
          )}
        </>
      )}
      {member?.program?.name.includes('Members') && (
        <>
          {member?.status?.includes('active') && (
            <MemberDashboardActive
              member={member}
              lastSession={lastSession}
              scores={scores}
              expiredDate={expiredDate}
              assessments={assessments}
            />
          )}
          {!member?.status?.includes('active') && (
            <AdminSection className="flex flex-col items-center justify-center gap-4">
              <h2 className="font-bold text-xl">{t('member_not_active')}</h2>
              {member?.status === 'payment' && member?.total_payment ? (
                <>
                  <p className="text-sm">{t('member_locked_text')}</p>
                  <div className="grid lg:grid-cols-2 gap-6 w-full items-center bg-lightSecondary bg-opacity-60 rounded-2xl p-6">
                    <div>
                      <div className="mb-4">
                        <p className="font-bold">{t('paid_to')}:</p>
                        <p>
                          Eco Tourism Bali <br />
                          Jalan Srirama Gang. Kayumanis III No. 6, Second Floor
                          <br />
                          Bali, Indonesia 80361
                        </p>
                      </div>
                      <div>
                        <p className="font-bold">Paid by:</p>
                        <p>{member?.business_name}</p>
                        <p>{member?.user?.name}</p>
                        <p>{member?.address}</p>
                      </div>
                    </div>
                    <div>
                      <div className=" mb-4 lg:mb-0">
                        <p className="font-bold">{t('total_payment')}:</p>
                        <h4 className="text-2xl font-bold mb-2">
                          <span>
                            <span className=" text-primary text-3xl">
                              {currency.format(member?.total_payment)}
                            </span>
                          </span>
                        </h4>
                      </div>
                      <div className="mb-2">
                        {t('membership_etb')} {member?.business_type?.name}
                      </div>
                      <div className="mb-2">
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="snk"
                          id="snk"
                          onChange={() => setSnk(!snk)}
                        />
                        <label htmlFor="snk" className="text-sm">
                          {t('agreement')}
                          <a
                            href="https://ecotourismbali.com/terms-conditions"
                            target="_blank"
                            className="text-primary font-bold ml-1"
                          >
                            {t('terms')}
                          </a>
                        </label>
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
                          disabled={!snk}
                        >
                          {t('member_locked_button')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ) : member?.status === 'waiting_approval' ? (
                <>
                  <p>{t('member_not_approved')}</p>
                </>
              ) : (
                <>
                  <MemberDashboardForm
                    business_type={business_type}
                    member={member}
                  />
                </>
              )}
            </AdminSection>
          )}
        </>
      )}
    </MemberLayout>
  );
}

export default MemberDashboard;
