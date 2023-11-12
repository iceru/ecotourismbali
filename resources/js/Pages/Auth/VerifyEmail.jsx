import GuestLayout from '@/Layouts/GuestLayout';
import Button from '@/Components/Button';
import { Head, Link, useForm } from '@inertiajs/react';
import MemberLayout from '@/Layouts/MemberLayout';
import AdminSection from '@/Components/AdminSection';
import { useTranslation } from 'react-i18next';

export default function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const { t } = useTranslation();

  const submit = e => {
    e.preventDefault();

    post(route('verification.send'));
  };

  return (
    <MemberLayout>
      <Head title="Email Verification" />

      <AdminSection>
        <div className="text-lg text-center mb-2 font-bold">
          {t('verify_thanks')}
        </div>
        <div className="mb-4 text-center lg:w-[70%] mx-auto">
          {t('verify_email')}
        </div>

        {status === 'verification-link-sent' && (
          <div className="mb-4 font-medium text-sm text-center text-green-600">
            {t('resend_email')}
          </div>
        )}

        <form onSubmit={submit}>
          <div className="mt-4 flex items-center justify-center">
            <Button disabled={processing}>{t('resend_email_button')}</Button>
          </div>
        </form>
      </AdminSection>
    </MemberLayout>
  );
}
