import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';

function CreateCategory({ admin }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const headerTable = ['Name', 'Email', 'Action'];

  const selectedData = ['name', 'email'];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/admin/register/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'category.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
    },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('register.admin.store'), {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <AdminLayout>
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="create_admin_title" />
        {flash.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
        <form className="flex flex-col gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="name" value={t('form_label_name')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="name"
                name="name"
                type="text"
                value={data.name}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('name', e.target.value)}
              />
              <span className="text-red-600">{errors.name}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="email" value={t('form_label_email')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="email"
                name="email"
                type="email"
                value={data.email}
                className="block w-full"
                isFocused={false}
                onChange={e => setData('email', e.target.value)}
              />
              <span className="text-red-600">{errors.email}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="password" value={t('form_label_password')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="password"
                name="password"
                type="password"
                value={data.password}
                className="block w-full"
                isFocused={false}
                onChange={e => setData('password', e.target.value)}
              />
              <span className="text-red-600">{errors.password}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="password_confirmation" value={t('form_label_password_confirmation')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                value={data.password_confirmation}
                className="block w-full"
                isFocused={false}
                onChange={e => setData('password_confirmation', e.target.value)}
              />
              <span className="text-red-600">{errors.password_confirmation}</span>
            </div>
          </div>
          <PrimaryButton
            color="secondary"
            className="w-fit"
            disabled={processing}
          >
            {t('submit')}
          </PrimaryButton>
        </form>
      </AdminSection>
      <AdminSection className="flex flex-col gap-6">
        <TitleSection title="list_category_title" />
        <Table
          header={headerTable}
          data={admin}
          selectedData={selectedData}
          tableActions={tableActions}
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreateCategory;
