import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import InputLabel from '@/Components/InputLabel';
import MemberLayout from '@/Layouts/MemberLayout';
import { useForm, usePage } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import moment from 'moment';

function AssessmentData() {
  const { t } = useTranslation();

  const { member, business_type, remaining, dateAssessment } = usePage().props;
  const { data, setData, post, errors } = useForm({
    business_name: member.business_name || '',
    address: member.address || '',
    website: member.website || '',
    name: member?.user?.name || '',
    job_title: member.job_title || '',
    phone: member.phone || '',
    email: member?.user?.email || '',
    business_type_id: member.business_type_id || '',
  });

  const submit = e => {
    e.preventDefault();

    post(route('member.assessment.store', member.id), {});
  };

  return (
    <MemberLayout>
      {remaining > 0 ? (
        <AdminSection className="grid gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">{t('assessment')}</h3>
            <div className="px-4 py-3 bg-lightSecondary rounded-md inline-flex">
              {member.status === 'active'
                ? t('eligible_assessment', { number: remaining })
                : t('trial_assessment', { number: remaining })}
            </div>
          </div>
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
                  htmlFor="address"
                  value={t('label_business_location')}
                />
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
              <div className="grid gap-3">
                <InputLabel
                  htmlFor="business_type_id"
                  value={t('label_business_type_id')}
                />
                <SelectInput
                  id="business_type"
                  name="business_type"
                  value={data.business_type_id}
                  options={business_type}
                  placeholder="select_business_type"
                  className="w-full"
                  labelData="name"
                  valueData="id"
                  onChange={e => setData('business_type_id', e.target.value)}
                />
                {errors.business_type_id && (
                  <span className="text-red-600">
                    {errors.business_type_id}
                  </span>
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
            {t('not_eligible_assessment', { number: remaining })}
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
