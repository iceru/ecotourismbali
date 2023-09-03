import React, { useEffect, useState } from 'react';

import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';

const MemberGreenpal = ({ member, categories }) => {
  const localAgreement = localStorage.getItem('agreement');
  const { t } = useTranslation();

  const [agreement, setAgreement] = useState(localAgreement || false);
  const [provinces, setProvinces] = useState();
  const [selectedProvince, setSelectedProvince] = useState();
  const [city, setCity] = useState();

  const { data, setData, post, processing, errors, reset } = useForm({
    company_name: member.company_name || null,
    business_name: member.business_name || null,
    address: member.address || null,
    image: member.image || null,
    sliders: null,
    name: member.user.name || null,
    position: member.position || null,
    email: member.user.email || null,
    phone: member.phone || null,
    description: member.description || null,
    city: member.city || null,
    province: member.province || null,
    website: member.website || null,
    category: member.category || null,
  });

  useEffect(() => {
    fetch(`https://iceru.github.io/api-wilayah-indonesia/api/provinces.json`)
      .then(response => response.json())
      .then(provinces => {
        setProvinces(provinces);
        let dataProvince;
        if (data?.province) {
          dataProvince = provinces.find(prov => {
            return prov.name === data?.province;
          });
        }
        getCity(selectedProvince || dataProvince.id || provinces[0].id);
      });
  }, []);
  useEffect(() => {
    selectedProvince && getCity(selectedProvince);
  }, [selectedProvince]);

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

    post(route('member.greenpal.store'), {
      onSuccess: () => {},
    });
  };

  const agreeSubmit = () => {
    setAgreement(true);
    localStorage.setItem('agreement', true);
  };

  return (
    <div>
      {!agreement ? (
        <div>
          <h4 className="font-bold mb-2 text-lg">{t('agreement_title')}</h4>
          <p className="mb-4">{t('agreement_text')}</p>
          <PrimaryButton onClick={agreeSubmit}>
            {t('agreement_button')}
          </PrimaryButton>
        </div>
      ) : (
        <>
          <form onSubmit={submit} className="w-full">
            <div className="grid lg:grid-cols-2 gap-6 min-w-[50vw]">
              <div className="grid gap-3">
                <InputLabel htmlFor="name" value={t('label_name_pic')} />
                <TextInput
                  id="name"
                  name="name"
                  value={data.name}
                  className="block w-full"
                  isFocused={true}
                  rows={8}
                  onChange={e => setData('name', e.target.value)}
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name}</span>
                )}
              </div>
              <div className="grid gap-3">
                <InputLabel htmlFor="job_title" value={t('job_title')} />
                <TextInput
                  id="job_title"
                  name="job_title"
                  value={data.job_title}
                  className="block w-full"
                  isFocused={true}
                  rows={8}
                  onChange={e => setData('job_title', e.target.value)}
                />
                {errors.job_title && (
                  <span className="text-red-600">{errors.job_title}</span>
                )}
              </div>
              <div className="grid gap-3">
                <InputLabel
                  htmlFor="business_name"
                  value={t('business_name')}
                />
                <TextInput
                  id="business_name"
                  name="business_name"
                  value={data.business_name}
                  className="block w-full"
                  isFocused={true}
                  onChange={e => setData('business_name', e.target.value)}
                />
                {errors.business_name && (
                  <span className="text-red-600">{errors.business_name}</span>
                )}
              </div>
              <div className="grid gap-3">
                <InputLabel htmlFor="company_name" value={t('company_name')} />
                <TextInput
                  id="company_name"
                  name="company_name"
                  value={data.company_name}
                  className="block w-full"
                  isFocused={true}
                  onChange={e => setData('company_name', e.target.value)}
                />
                {errors.company_name && (
                  <span className="text-red-600">{errors.company_name}</span>
                )}
              </div>
              <div className="grid gap-3">
                <InputLabel htmlFor="email" value={t('email')} />
                <TextInput
                  id="email"
                  name="email"
                  value={data.email}
                  className="block w-full"
                  isFocused={true}
                  rows={8}
                  onChange={e => setData('email', e.target.value)}
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email}</span>
                )}
              </div>
              <div className="grid gap-3">
                <InputLabel htmlFor="phone" value={t('phone_whatsapp')} />
                <TextInput
                  id="phone"
                  name="phone"
                  value={data.phone}
                  className="block w-full"
                  isFocused={true}
                  type="tel"
                  onChange={e => setData('phone', e.target.value)}
                />
                {errors.phone && (
                  <span className="text-red-600">{errors.phone}</span>
                )}
              </div>
              <div className="grid gap-3">
                <InputLabel htmlFor="company_logo" value={t('company_logo')} />
                <div>
                  <input
                    className="mb-3"
                    type="file"
                    name="image"
                    id="image"
                    onChange={e => setData('image', e.target.files[0])}
                  />
                </div>
              </div>
              <div className="grid gap-3">
                <InputLabel
                  htmlFor="company_product"
                  value={t('company_product')}
                />
                <input
                  className="block w-full text-gray-900 border border-gray-300 p-2 cursor-pointer bg-gray-50 focus:outline-none"
                  id="sliders"
                  multiple
                  type="file"
                  name="sliders"
                  onChange={e => {
                    setData('sliders', e.target.files);
                  }}
                />
              </div>
              <div className="grid gap-3">
                <InputLabel htmlFor="website" value={t('website')} />
                <TextInput
                  id="website"
                  name="website"
                  value={data.website}
                  className="block w-full"
                  isFocused={true}
                  onChange={e => setData('website', e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <InputLabel htmlFor="category" value={t('category')} />
                <SelectInput
                  id="category"
                  name="category"
                  value={data.category}
                  labelData="name"
                  valueData="id"
                  className="block w-full"
                  options={categories}
                  onChange={e => setData('category', e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-3 mt-6">
              <InputLabel htmlFor="description" value={t('description')} />
              <TextInput
                id="description"
                typeForm="textarea"
                rows={7}
                name="description"
                value={data.description}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('description', e.target.value)}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-6 min-w-[50vw] mt-6">
              <div className="grid gap-3">
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
              <div className="grid gap-3">
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
            </div>
            <div className="grid gap-3 mt-6 mb-2">
              <InputLabel htmlFor="address" value={t('address')} />
              <TextInput
                id="address"
                rows={4}
                name="address"
                typeForm="textarea"
                value={data.address}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('address', e.target.value)}
              />
              {errors.address && (
                <span className="text-red-600">{errors.address}</span>
              )}
            </div>
            <PrimaryButton
              type="submit"
              className="w-full justify-center flex mt-4"
              disabled={processing}
            >
              {t('submit')}
            </PrimaryButton>
          </form>
        </>
      )}
    </div>
  );
};

export default MemberGreenpal;
