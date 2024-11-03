import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';

function CreateProgram({ program }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    image: null,
    label: '',
    label_register: '',
  });

  const headerTable = [
    'Name',
    'Label',
    'Label Register',
    'Image',
    'Description',
    'Action',
  ];

  const selectedData = [
    'name',
    'label',
    'label_register',
    'image',
    'description',
  ];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/admin/program/edit',
      withId: true,
      color: 'info',
    },
    // {
    //   label: 'delete_button',
    //   route: 'program.destroy',
    //   withId: true,
    //   color: 'danger',
    //   type: 'delete',
    // },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('program.store'), {
      onSuccess: () => {
        reset();
      },
    });
  };

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
              <InputLabel htmlFor="label" value={t('form_label_label')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="label"
                name="label"
                type="text"
                value={data.label}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('label', e.target.value)}
              />
              <span className="text-red-600">{errors.label}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="label_register"
                value={t('form_label_label_register')}
              />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="label_register"
                name="label_register"
                type="text"
                value={data.label_register}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('label_register', e.target.value)}
              />
              <span className="text-red-600">{errors.label_register}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="image" value={t('form_label_image')} />
            </div>
            <div className="lg:w-4/5">
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
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="description"
                value={t('form_label_description')}
              />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="description"
                name="description"
                type="text"
                typeForm="textarea"
                value={data.description}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('description', e.target.value)}
              />
              <span className="text-red-600">{errors.description}</span>
            </div>
          </div>
          <Button color="secondary" className="w-fit" disabled={processing}>
            {t('submit')}
          </Button>
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
