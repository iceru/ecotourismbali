import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Button from '@/Components/Button';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';

function UserEdit({ user }) {
  const { data, setData, post, processing, errors } = useForm({
    name: user?.name || '',
    email: user?.email || '',
    password: '',
    password_confirmation: '',
  });

  const submit = e => {
    e.preventDefault();
    post(route('admin.user.update', user?.id));
  };

  return (
    <AdminLayout>
      <BackTo link="/admin/user/index" title="Back To List Users" />
      <AdminSection className="flex flex-col gap-6">
        <TitleSection title="Edit User" />
        <form className="flex flex-col gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="name" value="Name" />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="name"
                name="name"
                type="text"
                value={data.name}
                className="block w-full"
                onChange={e => setData('name', e.target.value)}
              />
              <span className="text-red-600">{errors.name}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="email" value="Email" />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="email"
                name="email"
                type="email"
                value={data.email}
                className="block w-full"
                onChange={e => setData('email', e.target.value)}
              />
              <span className="text-red-600">{errors.email}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="password" value="New Password" />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="password"
                name="password"
                type="password"
                value={data.password}
                className="block w-full"
                onChange={e => setData('password', e.target.value)}
              />
              <span className="text-red-600">{errors.password}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="password_confirmation"
                value="Confirm New Password"
              />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                value={data.password_confirmation}
                className="block w-full"
                onChange={e =>
                  setData('password_confirmation', e.target.value)
                }
              />
            </div>
          </div>
          <Button color="secondary" className="w-fit" disabled={processing}>
            Save
          </Button>
        </form>
      </AdminSection>
    </AdminLayout>
  );
}

export default UserEdit;
