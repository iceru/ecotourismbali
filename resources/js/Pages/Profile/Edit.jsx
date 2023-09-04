import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import MemberLayout from '@/Layouts/MemberLayout';
import AdminSection from '@/Components/AdminSection';

export default function Edit({ auth, mustVerifyEmail, status }) {
  return (
    <MemberLayout>
      <Head title="Profile" />

      <div>
        <AdminSection className="mb-6">
          <UpdateProfileInformationForm
            mustVerifyEmail={mustVerifyEmail}
            status={status}
            className="max-w-xl"
          />
        </AdminSection>

        <AdminSection>
          <UpdatePasswordForm className="max-w-xl" />
        </AdminSection>

        {/* <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <DeleteUserForm className="max-w-xl" />
          </div> */}
      </div>
    </MemberLayout>
  );
}
