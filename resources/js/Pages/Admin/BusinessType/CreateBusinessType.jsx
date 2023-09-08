import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';
import SelectInput from '@/Components/SelectInput';

function CreateBusinessType({ business_type }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
  });

  const headerTable = ['Name', 'Created At', 'Action'];

  const selectedData = ['name', 'created_at'];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/admin/business-type/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'business_type.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
    },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('business_type.store'), {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <AdminLayout>
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="create_business_title" />
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
        <TitleSection title="list_business_title" />
        <Table
          header={headerTable}
          data={business_type}
          selectedData={selectedData}
          tableActions={tableActions}
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreateBusinessType;
