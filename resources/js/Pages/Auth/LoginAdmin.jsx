import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Logo from '../../../images/logo.png';
import { useTranslation } from 'react-i18next';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = e => {
    e.preventDefault();

    post(route('login.admin.store'));
  };

  const { t } = useTranslation();

  return (
    <GuestLayout>
      <Head title="Log in" />

      <div className="lg:w-[50%] mx-auto items-center">
        <div>
          <div className="mb-8 flex flex-col items-center">
            <img src={Logo} alt="" className="mb-6" />
            <h3 className="font-bold text-2xl mb-3">{t('admin_login')}</h3>
            <p>{t('login_welcome_text')}</p>
          </div>
          {status && (
            <div className="mb-4 font-medium text-sm text-green-600">
              {status}
            </div>
          )}

          <form onSubmit={submit}>
            <div>
              <InputLabel htmlFor="email" value="Email" />

              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                onChange={e => setData('email', e.target.value)}
              />

              <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel htmlFor="password" value="Password" />

              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full"
                autoComplete="current-password"
                onChange={e => setData('password', e.target.value)}
              />

              <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="flex justify-between items-center mt-4">
              <label className="flex items-center">
                <Checkbox
                  name="remember"
                  checked={data.remember}
                  onChange={e => setData('remember', e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              {canResetPassword && (
                <Link
                  href={route('password.request')}
                  className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Forgot your password?
                </Link>
              )}
            </div>

            <div className="flex items-center justify-between mt-8">
              <PrimaryButton disabled={processing}>Log in</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
