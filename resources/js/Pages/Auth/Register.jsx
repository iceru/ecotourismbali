import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthImage from '@/Components/AuthImage';
import { useTranslation } from 'react-i18next';

import RegisImage from '../../../images/regisImage.jpg';
import SelectInput from '@/Components/SelectInput';
import queryString from 'query-string';

export default function Register({ programs }) {
  const parsed = queryString.parse(location.search);
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    business_name: '',
    password_confirmation: '',
    subscribed: true,
    program: programs[parsed?.tribe === 'greenpal' ? 1 : 0].id,
  });
  const { t } = useTranslation();

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit = e => {
    e.preventDefault();

    post(route('register'));
  };
  return (
    <GuestLayout>
      <Head title="Register" />
      <div className="grid lg:grid-cols-2 items-center">
        <div className="hidden lg:block">
          <AuthImage image={RegisImage} />
        </div>

        <div>
          <div className="mb-8">
            <h3 className="font-bold text-2xl mb-3">{t('register_welcome')}</h3>
            <p className="mb-2">{t('register_welcome_text')}</p>
          </div>
          <form onSubmit={submit}>
            <div>
              <InputLabel htmlFor="name" value={t('form_label_name')} />

              <TextInput
                id="name"
                name="name"
                value={data.name}
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
                onChange={e => setData('name', e.target.value)}
                required
              />

              <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel htmlFor="business_name" value={t('business_name')} />

              <TextInput
                id="business_name"
                name="business_name"
                value={data.business_name}
                className="mt-1 block w-full"
                autoComplete="business_name"
                isFocused={true}
                onChange={e => setData('business_name', e.target.value)}
                required
              />

              <InputError message={errors.business_name} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel htmlFor="program" value={t('program')} />

              <SelectInput
                id="program"
                name="program"
                value={data.program}
                className="mt-1 block w-full"
                labelData="name"
                valueData="id"
                options={programs}
                onChange={e => setData('program', e.target.value)}
                required
              />

              <InputError message={errors.program} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel htmlFor="email" value={t('form_label_email')} />

              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                autoComplete="username"
                onChange={e => setData('email', e.target.value)}
                required
              />

              <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel htmlFor="password" value={t('form_label_password')} />

              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full"
                autoComplete="new-password"
                onChange={e => setData('password', e.target.value)}
                required
              />

              <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel
                htmlFor="password_confirmation"
                value={t('form_label_password_confirmation')}
              />

              <TextInput
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="mt-1 block w-full"
                autoComplete="new-password"
                onChange={e => setData('password_confirmation', e.target.value)}
                required
              />

              <InputError
                message={errors.password_confirmation}
                className="mt-2"
              />
            </div>

            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="subscribed"
                name="subscribed"
                value={data.subscribed}
                checked={data.subscribed}
                className="mr-2 mt-1"
                onChange={e => setData('subscribed', !data.subscribed)}
              />
              <InputLabel
                htmlFor="subscribed"
                value={t('subscribe_checkbox')}
              />

              <InputError message={errors.subscribed} className="mt-2" />
            </div>

            <div className="flex items-center justify-between mt-6">
              <PrimaryButton disabled={processing}>Register</PrimaryButton>
              <Link
                href={route('login')}
                className="text-sm text-primary font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {t('already_registered')}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
