import { router, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  faBook,
  faLongArrowAltRight,
  faPaperclip,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import queryString from 'query-string';
import { lowerCase } from 'lodash';

import { badgeColor } from '@/Helper/BadgeColor';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import AdminSection from '@/Components/AdminSection';
import PrimaryButton from '@/Components/PrimaryButton';
import MemberLayout from '@/Layouts/MemberLayout';

function MemberDashboard({ member, scores, lastSession }) {
  const { t } = useTranslation();
  const [payComplete, setPayComplete] = useState(false);
  const [payPending, setPayPending] = useState(false);
  const parsed = queryString.parse(location.search);
  const { flash } = usePage().props;

  const total_payments = [
    {
      label: 'Green/Publish Rate IDR 0 - 1.500.000',
      value: 2000000,
    },
    {
      label: 'Branch/Publish Rate IDR 1.500.001 - 3.000.000',
      value: 6000000,
    },
    {
      label: 'Root/Publish Rate Above IDR 3.000.000',
      value: 12000000,
    },
  ];

  const { data, setData, post, processing, errors, reset } = useForm({
    no_rooms: null,
    no_employees: null,
    no_outlets: null,
    total_payment: total_payments[0].value,
  });

  const payCompleteStorage = sessionStorage.getItem('paid');
  const pay = () => {
    let snapToken = sessionStorage.getItem('snapToken');

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

  useEffect(() => {
    if (parsed.newPayment) {
      setPayComplete(true);
    }
  }, []);

  const notifyAdmin = () => {
    router.post(route('member.notifyPayment'));
  };

  const submit = e => {
    e.preventDefault();
    debugger;

    post(route('member.store'), {
      onSuccess: () => {
        reset();
      },
    });
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
                <h2 className={'font-bold text-[20px] mb-4'}>
                  {t('your_assessment')}
                  <span
                    className={
                      badgeColor(member.badge.name, 'text') + ' ml-1.5'
                    }
                  >
                    {member.badge.name}
                  </span>
                </h2>
              ) : (
                <h2 className="font-bold text-[20px] mb-4">
                  {t('no_assessment')}
                </h2>
              )}
              {member && member.badge ? (
                <div className="flex items-center">
                  <div className="flex flex-col items-center mr-4 uppercase mb-1">
                    <div>
                      <img
                        className="max-h-[120px]"
                        src={'/storage/badges/' + member.badge.image}
                      />
                    </div>
                    <div
                      className={`font-bold mt-1 text-center whitespace-nowrap   ${badgeColor(
                        member.badge.name,
                        'text'
                      )}`}
                    >
                      {member.badge.name} Badge
                    </div>
                  </div>
                  <div className="ml-2">
                    {lastSession && (
                      <div className=" mb-3">
                        <span className="font-bold">
                          {lastSession.total_score}
                        </span>
                        &nbsp;
                        <span className=" uppercase">Points</span>
                      </div>
                    )}
                    {scores?.map(score => {
                      return (
                        <div className="flex justify-center text-gray-500 text-sm mb-1">
                          <div className="capitalize">
                            {lowerCase(score?.assessment?.title).slice(0, 11)}
                          </div>
                          <div className="mx-1">-</div>
                          <div>{score?.score}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="grid gap-4">
                  <PrimaryButton color="lightPrimary">
                    {t('start_assessment')}
                    <FontAwesomeIcon
                      icon={faLongArrowAltRight}
                      className="ml-2"
                    />
                  </PrimaryButton>
                  <PrimaryButton color="lightSecondary" className="text-left">
                    {t('learn_more_assessment')}
                    <FontAwesomeIcon icon={faBook} className="ml-2" />
                  </PrimaryButton>
                </div>
              )}
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
          {member.status === 'payment' && member.total_payment ? (
            <>
              <p className="text-sm">{t('member_locked_text')}</p>
              <PrimaryButton
                onClick={() => (member.status !== 'active' ? pay() : null)}
              >
                {t('member_locked_button')}
              </PrimaryButton>
            </>
          ) : member.status === 'waiting_approval' ? (
            <>
              <p className="text-sm">{t('member_not_approved')}</p>
            </>
          ) : (
            <>
              <p className="mb-4">{t('notify_admin_text')}</p>
              <form className="grid lg:grid-cols-2 gap-4" onSubmit={submit}>
                <div className="block  items-center">
                  <div className="mb-2">
                    <InputLabel
                      htmlFor="no_rooms"
                      value={t('form_label_no_rooms')}
                    />
                  </div>
                  <div className="lg:w-4/5">
                    <TextInput
                      id="no_rooms"
                      name="no_rooms"
                      type="number"
                      min={0}
                      value={data.no_rooms}
                      className="block w-full"
                      isFocused={true}
                      onChange={e => setData('no_rooms', e.target.value)}
                    />
                    <span className="text-red-600">{errors.no_rooms}</span>
                  </div>
                </div>
                <div className="block  items-center">
                  <div className="mb-2">
                    <InputLabel
                      htmlFor="no_outlet"
                      value={t('form_label_no_outlet')}
                    />
                  </div>
                  <div className="lg:w-4/5">
                    <TextInput
                      id="no_outlets"
                      name="no_outlets"
                      type="number"
                      min={0}
                      value={data.no_outlets}
                      className="block w-full"
                      isFocused={true}
                      onChange={e => setData('no_outlets', e.target.value)}
                    />
                    <span className="text-red-600">{errors.no_outlets}</span>
                  </div>
                </div>
                <div className="block  items-center">
                  <div className="mb-2">
                    <InputLabel
                      htmlFor="no_employees"
                      value={t('form_label_no_employees')}
                    />
                  </div>
                  <div className="lg:w-4/5">
                    <TextInput
                      id="no_employees"
                      name="no_employees"
                      type="number"
                      min={0}
                      value={data.no_employees}
                      className="block w-full"
                      isFocused={true}
                      onChange={e => setData('no_employees', e.target.value)}
                    />
                    <span className="text-red-600">{errors.no_employees}</span>
                  </div>
                </div>
                <div className="block  items-center">
                  <div className="mb-2">
                    <InputLabel
                      htmlFor="total_payment"
                      value={t('form_label_total_payment')}
                    />
                  </div>
                  <div className="lg:w-4/5">
                    <SelectInput
                      id="total_payment"
                      name="total_payment"
                      value={data.total_payment}
                      options={total_payments}
                      className="w-full"
                      onChange={e => setData('total_payment', e.target.value)}
                    />
                    <span className="text-red-600">{errors.total_payment}</span>
                  </div>
                </div>
                <PrimaryButton
                  color="secondary"
                  type="submit"
                  className="w-fit"
                  disabled={processing}
                >
                  {t('submit')}
                </PrimaryButton>
              </form>
            </>
          )}
        </AdminSection>
      )}
    </MemberLayout>
  );
}

export default MemberDashboard;
