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
import moment from 'moment';
import 'moment/locale/id';

import { badgeColor } from '@/Helper/BadgeColor';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import AdminSection from '@/Components/AdminSection';
import PrimaryButton from '@/Components/PrimaryButton';
import MemberLayout from '@/Layouts/MemberLayout';
import { currency } from '@/Helper/Formatter';
import TitleSection from '../Admin/Components/TitleSection';

function MemberDashboard({
  member,
  scores,
  lastSession,
  business_type,
  expiredDate,
}) {
  const { t, i18n } = useTranslation();
  const [payComplete, setPayComplete] = useState(false);
  const [payPending, setPayPending] = useState(false);
  const [provinces, setProvinces] = useState();
  const [selectedProvince, setSelectedProvince] = useState();
  const [city, setCity] = useState();
  const [business, setBusiness] = useState('Hotel');
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

  const total_payments_restaurant = [
    {
      label: 'Access to Self Assessment',
      value: 500000,
    },
    {
      label: 'Annual Membership',
      value: 1500000,
    },
  ];

  const { data, setData, post, processing, errors, reset } = useForm({
    no_rooms: null,
    no_employees: null,
    no_outlets: null,
    business_type_id: null,
    total_payment:
      business === 'Hotel'
        ? total_payments[0].value
        : total_payments_restaurant[0].value,
    city: member.city || '',
    province: member.province || '',
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

    fetch(`https://iceru.github.io/api-wilayah-indonesia/api/provinces.json`)
      .then(response => response.json())
      .then(provinces => {
        setProvinces(provinces);
        getCity(selectedProvince || provinces[0].id);
      });
  }, []);

  useEffect(() => {
    getCity();
  }, [selectedProvince]);

  useEffect(() => {
    if (business === 'Restaurant') {
      setData(data => ({ ...data, no_outlets: null }));
      setData(data => ({ ...data, no_rooms: null }));
    }
  }, [business]);

  const getCity = id => {
    fetch(
      `https://iceru.github.io/api-wilayah-indonesia/api/regencies/${
        id || selectedProvince
      }.json`
    )
      .then(response => response.json())
      .then(city => setCity(city));
  };

  const submit = e => {
    e.preventDefault();

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
          <TitleSection title="welcome_member" className="mb-4" />
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
          {member?.status?.includes('active') && (
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
          {member?.status?.includes('active') ? (
            <>
              {member && member.badge ? (
                <>
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
                  <div className="flex items-center">
                    <div className="flex flex-col items-center mr-4  mb-1">
                      <div>
                        <img
                          className="max-h-[120px]"
                          src={'/storage/badges/' + member.badge.image}
                        />
                      </div>
                      <div
                        className={`font-bold mt-1 text-center whitespace-nowrap uppercase ${badgeColor(
                          member.badge.name,
                          'text'
                        )}`}
                      >
                        {member.badge.name} Badge
                      </div>
                      <div className="text-xs text-gray-500">
                        Expired:&nbsp;
                        {moment(expiredDate).locale(i18n.language).format('ll')}
                      </div>
                    </div>
                    <div className="ml-2">
                      {lastSession && (
                        <div className=" mb-2">
                          <span className="font-bold">
                            {lastSession.total_score}
                          </span>
                          &nbsp;
                          <span className=" uppercase">Points</span>
                        </div>
                      )}
                      <div className="grid lg:grid-cols-2 gap-x-3">
                        {scores?.map(score => {
                          return (
                            <div className="flex justify-center text-gray-500 text-sm mb-1">
                              <div className="capitalize">
                                {lowerCase(score?.assessment?.title).slice(
                                  0,
                                  11
                                )}
                              </div>
                              <div className="mx-1">-</div>
                              <div>{score?.score}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="font-bold text-[20px] mb-4">
                    {t('no_assessment')}
                  </h2>
                  <div>
                    <PrimaryButton
                      color="lightPrimary"
                      as="link"
                      href={route('member.assessment.index')}
                    >
                      {t('start_assessment')}
                      <FontAwesomeIcon
                        icon={faLongArrowAltRight}
                        className="ml-2"
                      />
                    </PrimaryButton>
                    {/* <PrimaryButton color="lightSecondary" className="text-left">
                    {t('learn_more_assessment')}
                    <FontAwesomeIcon icon={faBook} className="ml-2" />
                  </PrimaryButton> */}
                  </div>
                </>
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
      {!member?.status?.includes('active') && (
        <AdminSection className="flex flex-col items-center justify-center gap-4">
          <h2 className="font-bold text-xl">{t('member_not_active')}</h2>
          {member.status === 'payment' && member.total_payment ? (
            <>
              <p className="text-sm">{t('member_locked_text')}</p>
              <div className="flex justify-between w-full lg:w-2/3 items-center bg-lightSecondary bg-opacity-60 rounded-2xl p-6 mt-4">
                <div>
                  <p>{t('total_payment')}</p>
                  <h4 className="text-2xl font-bold">
                    {currency.format(member.total_payment)}
                  </h4>
                </div>
                <PrimaryButton
                  className="text-[16px]"
                  onClick={() =>
                    !member?.status?.includes('active') ? pay() : null
                  }
                >
                  {t('member_locked_button')}
                </PrimaryButton>
              </div>
            </>
          ) : member.status === 'waiting_approval' ? (
            <>
              <p>{t('member_not_approved')}</p>
            </>
          ) : (
            <>
              <p className="mb-4">{t('notify_admin_text')}</p>
              <form onSubmit={submit} className="w-full">
                <div className="grid lg:grid-cols-2 gap-4 min-w-[50vw]">
                  <div className="block  items-center">
                    <div className="mb-2">
                      <InputLabel
                        htmlFor="total_payment"
                        value={t('form_label_business_type')}
                      />
                    </div>
                    <div className="">
                      <SelectInput
                        id="business_type"
                        name="business_type"
                        value={data.business_type_id}
                        options={business_type}
                        className="w-full"
                        labelData="name"
                        required
                        valueData="id"
                        onChange={e => {
                          setData('business_type_id', e.target.value);
                          let index = e.target.selectedIndex;
                          setBusiness(e.target[index].text);
                        }}
                      />
                      {errors.business_type_id && (
                        <span className="text-red-600">
                          {errors.business_type_id}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <InputLabel htmlFor="provinces" value={t('provinces')} />
                    <SelectInput
                      options={provinces}
                      labelData="name"
                      valueData="id"
                      placeholder="select_province"
                      onChange={e => {
                        const index = e.nativeEvent.target.selectedIndex;
                        const text = e.nativeEvent.target[index].text;
                        setSelectedProvince(e.target.value);
                        setData('province', text);
                      }}
                    />
                    {errors.provinces && (
                      <span className="text-red-600">{errors.provinces}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    <InputLabel htmlFor="city" value={t('city')} />
                    <SelectInput
                      options={city}
                      labelData="name"
                      valueData="id"
                      placeholder="select_city"
                      onChange={e => {
                        const index = e.nativeEvent.target.selectedIndex;
                        const text = e.nativeEvent.target[index].text;
                        setData('city', text);
                      }}
                    />
                    {errors.city && (
                      <span className="text-red-600">{errors.city}</span>
                    )}
                  </div>
                  {business === 'Hotel' && (
                    <div className="block  items-center">
                      <div className="mb-2">
                        <InputLabel
                          htmlFor="no_rooms"
                          value={t('form_label_no_rooms')}
                        />
                      </div>
                      <div className="">
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
                  )}
                  {business === 'Hotel' && (
                    <div className="block  items-center">
                      <div className="mb-2">
                        <InputLabel
                          htmlFor="no_outlet"
                          value={t('form_label_no_outlet')}
                        />
                      </div>
                      <div className="">
                        <TextInput
                          id="no_outlets"
                          name="no_outlets"
                          required
                          type="number"
                          min={0}
                          value={data.no_outlets}
                          className="block w-full"
                          isFocused={true}
                          onChange={e => setData('no_outlets', e.target.value)}
                        />
                        <span className="text-red-600">
                          {errors.no_outlets}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="block items-center">
                    <div className="mb-2">
                      <InputLabel
                        htmlFor="no_employees"
                        value={t('form_label_no_employees')}
                      />
                    </div>
                    <div className="">
                      <TextInput
                        id="no_employees"
                        name="no_employees"
                        type="number"
                        required
                        min={0}
                        value={data.no_employees}
                        className="block w-full"
                        isFocused={true}
                        onChange={e => setData('no_employees', e.target.value)}
                      />
                      <span className="text-red-600">
                        {errors.no_employees}
                      </span>
                    </div>
                  </div>
                  <div className="block items-center">
                    <div className="mb-2">
                      <InputLabel
                        htmlFor="total_payment"
                        value={t('form_label_total_payment')}
                      />
                    </div>
                    <div className="">
                      <SelectInput
                        id="total_payment"
                        name="total_payment"
                        value={data.total_payment}
                        options={
                          business === 'Hotel'
                            ? total_payments
                            : total_payments_restaurant
                        }
                        className="w-full "
                        onChange={e => setData('total_payment', e.target.value)}
                      />
                      <span className="text-red-600">
                        {errors.total_payment}
                      </span>
                    </div>
                  </div>
                </div>
                <PrimaryButton
                  color="secondary"
                  type="submit"
                  className="flex justify-center mt-6 w-full"
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
