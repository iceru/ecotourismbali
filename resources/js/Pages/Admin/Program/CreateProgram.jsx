import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';
import { useEffect } from 'react';

function CreateProgram({ program }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    image: null,
  });

  const headerTable = ['ID', 'Name', 'Image', 'Action'];

  const selectedData = ['id', 'name', 'image'];

  const tableActions = [
    {
      label: 'edit_button',
      link: 'program/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'program.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
    },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('program.store'), {
      onSuccess: () => {
        reset();
      },
    });
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <AdminLayout>
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="create_program_title" />
        {flash.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
        <form className="lg:w-3/4 flex flex-col gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="name" value={t('form_label_name')} />
            </div>
            <div className="lg:w-3/4">
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
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="image" value={t('form_label_image')} />
            </div>
            <div className="lg:w-3/4">
              <input
                type="file"
                name="image"
                id="image"
                className="block"
                onChange={e => setData('image', e.target.files[0])}
              />
              <span className="text-red-600">{errors.image}</span>
            </div>
          </div>
          <PrimaryButton
            type="secondary"
            className="w-fit"
            disabled={processing}
          >
            {t('submit')}
          </PrimaryButton>
        </form>
      </AdminSection>
      <AdminSection className="flex flex-col gap-6">
        <TitleSection title="list_program_title" />
        <Table
          header={headerTable}
          data={program}
          selectedData={selectedData}
          tableActions={tableActions}
          pathImage="programs/"
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreateProgram;
