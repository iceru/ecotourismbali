import React, { useEffect, useState } from 'react';

import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TextInput from '@/Components/TextInput';
import Button from '@/Components/Button';

const MemberDashboardForm = ({ business_type, member }) => {
  const { t } = useTranslation();
  const [selectedProvince, setSelectedProvince] = useState();
  const [city, setCity] = useState();
  const [provinces, setProvinces] = useState();
  const [business, setBusiness] = useState(
    member?.business_type?.name || 'Hotel'
  );

  const total_payments = [
    {
      label: 'Access to Self Assessment',
      value: 1000000,
    },
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
      value: 1000000,
    },
    {
      label: 'Annual Membership',
      value: 1500000,
    },
  ];

  const { data, setData, post, processing, errors, reset } = useForm({
    no_rooms: member.no_rooms || null,
    no_employees: member.no_employees || null,
    no_outlets: member.no_outlets || null,
    business_type_id: member.business_type_id || business_type[0].id || null,
    total_payment:
      business === 'Hotel'
        ? total_payments[0].value
        : total_payments_restaurant[0].value,
    city: member.city || '',
    province: member.province || '',
  });

  useEffect(() => {
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
                <span className="text-red-600">{errors.business_type_id}</span>
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
            {errors.city && <span className="text-red-600">{errors.city}</span>}
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
                <span className="text-red-600">{errors.no_outlets}</span>
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
              <span className="text-red-600">{errors.no_employees}</span>
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
              <span className="text-red-600">{errors.total_payment}</span>
            </div>
          </div>
        </div>
        <Button
          color="secondary"
          type="submit"
          className="flex justify-center mt-6 w-full"
          disabled={processing}
        >
          {t('submit')}
        </Button>
      </form>
    </>
  );
};

export default MemberDashboardForm;
