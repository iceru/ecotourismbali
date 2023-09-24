import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import InputLabel from '@/Components/InputLabel';
import MemberLayout from '@/Layouts/MemberLayout';
import { router, useForm, usePage } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import moment from 'moment';
import { useEffect, useState } from 'react';
import SelectInput from '@/Components/SelectInput';

function AssessmentData({ categories }) {
  const { t } = useTranslation();
  const [provinces, setProvinces] = useState();
  const [selectedProvince, setSelectedProvince] = useState();
  const [city, setCity] = useState();
  const [isSisterCompany, setIsSisterCompany] = useState(false);

  const { member, remaining, dateAssessment } = usePage().props;
  const { data, setData, post, errors } = useForm({
    business_name: member?.business_name || '',
    company_name: member?.company_name || '',
    sister_company: member?.sister_company || '',
    city: member?.city || '',
    province: member?.province || '',
    address: member?.address || '',
    website: member?.website || '',
    name: member?.user?.name || '',
    job_title: member?.job_title || '',
    phone: member?.phone || '',
    email: member?.user?.email || '',
    business_type_id: member?.business_type_id || '',
    category: member?.category_id || '',
  });

  useEffect(() => {
    if (!member?.status?.includes('active')) {
      router.visit(route('member.dashboard'));
    }
  }, []);

  const submit = e => {
    e.preventDefault();

    post(route('member.assessment.store', member.id), {});
  };

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

  const companies = [
    {
      label: 'No',
      value: false,
    },
    {
      label: 'Yes',
      value: true,
    },
  ];

  return (
    <MemberLayout>
      {remaining > 0 ? (
        <AdminSection className="grid gap-8">
          <h3 className="uppercase text-lg font-bold text-center">
            {t('business_info')}
          </h3>
          <form onSubmit={submit}>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <InputLabel
                  htmlFor="business_name"
                  value={t('label_business_name')}
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
                <InputLabel
                  htmlFor="company_name"
                  value={t('label_company_name')}
                />
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
              <div className="flex flex-col gap-3">
                <InputLabel htmlFor="category" value={t('category')} />
                <SelectInput
                  options={categories}
                  labelData="name"
                  valueData="id"
                  placeholder="select_category"
                  value={data.category}
                  onChange={e => {
                    setData('category', e.target.value);
                  }}
                />
                {errors.category && (
                  <span className="text-red-600">{errors.category}</span>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <InputLabel
                  htmlFor="isSisterCompany"
                  value={t('label_is_sister_company')}
                />
                <SelectInput
                  options={companies}
                  onChange={() => {
                    setIsSisterCompany(!isSisterCompany);
                  }}
                />
              </div>
              {isSisterCompany && (
                <div className="grid gap-3">
                  <InputLabel
                    htmlFor="sister_company"
                    value={t('label_sister_company')}
                  />
                  <TextInput
                    id="sister_company"
                    name="sister_company"
                    value={data.sister_company}
                    className="block w-full"
                    isFocused={true}
                    onChange={e => setData('sister_company', e.target.value)}
                  />
                  {errors.sister_company && (
                    <span className="text-red-600">
                      {errors.sister_company}
                    </span>
                  )}
                </div>
              )}
              <div className="grid gap-3">
                <InputLabel htmlFor="website" value={t('label_website')} />
                <TextInput
                  id="website"
                  name="website"
                  value={data.website}
                  className="block w-full"
                  isFocused={true}
                  rows={8}
                  onChange={e => setData('website', e.target.value)}
                />
                {errors.website && (
                  <span className="text-red-600">{errors.website}</span>
                )}
              </div>
              <div className="grid gap-3">
                <InputLabel htmlFor="name" value={t('label_name')} />
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
                <InputLabel htmlFor="job_title" value={t('label_job_title')} />
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
                <InputLabel htmlFor="email" value={t('label_email')} />
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
                <InputLabel htmlFor="phone" value={t('label_phone')} />
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
            </div>
            <div className="mt-6 pt-6 border-t">
              <div className="text-lg font-bold mb-3 text-center">
                {t('address')}
              </div>
              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-3">
                  <InputLabel htmlFor="provinces" value={t('provinces')} />
                  <SelectInput
                    options={provinces}
                    labelData="name"
                    valueData="id"
                    placeholder="select_province"
                    selectedLabel={data.province}
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
                    selectedLabel={data.city}
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
              <div className="flex flex-col gap-3">
                <InputLabel htmlFor="address" value={t('address')} />
                <TextInput
                  id="address"
                  name="address"
                  value={data.address}
                  className="block w-full"
                  isFocused={true}
                  onChange={e => setData('address', e.target.value)}
                />
                {errors.address && (
                  <span className="text-red-600">{errors.address}</span>
                )}
              </div>
            </div>
            <PrimaryButton className="py-3 mt-6 w-full">
              <div className="w-full">{t('next')}</div>
            </PrimaryButton>
          </form>
        </AdminSection>
      ) : (
        <AdminSection className="grid gap-6">
          <div className="px-4 py-3 bg-red-300 rounded-md inline-flex">
            {t('not_eligible_assessment', { number: remaining || 0 })}
          </div>
          <div className="text-center text-lg">{t('cant_assessment')}</div>
          <div className="text-center text-2xl text-primary">
            {moment(dateAssessment).format('LL')}
          </div>
        </AdminSection>
      )}
    </MemberLayout>
  );
}

export default AssessmentData;
