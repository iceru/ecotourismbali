import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';
import SelectInput from '@/Components/SelectInput';

function CreateAssessment({ assessment, business_type }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    description: '',
    image: null,
    business_type: null,
  });

  const headerTable = [
    'ID',
    'Title',
    'Description',
    'Image',
    'Business Type',
    'Question',
    'Action',
  ];

  const selectedData = [
    'id',
    'title',
    'description',
    'image',
    'business_type_id',
  ];

  const tableButtons = [
    {
      label: 'add_question',
      link: 'assessment/question',
      withId: true,
    },
  ];

  const tableActions = [
    {
      label: 'edit_button',
      link: 'assessment/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'assessment.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
    },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('assessment.store'), {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <AdminLayout>
      <AdminSection className="grid gap-6 mb-6">
        <TitleSection title="create_assessment_title" />
        {flash.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
        <form className="lg:w-3/4 grid gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="title" value={t('form_label_title')} />
            </div>
            <div className="w-3/4">
              <TextInput
                id="title"
                name="title"
                type="text"
                value={data.title}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('title', e.target.value)}
              />
              <span className="text-red-600">{errors.title}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="description"
                value={t('form_label_description')}
              />
            </div>
            <div className="w-3/4">
              <TextInput
                id="description"
                name="description"
                typeForm="textarea"
                value={data.description}
                className="block w-full"
                isFocused={true}
                rows={8}
                onChange={e => setData('description', e.target.value)}
              />
              <span className="text-red-600">{errors.description}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="business_type"
                value={t('form_label_business_type')}
              />
            </div>
            <div className="w-3/4">
              <SelectInput
                id="business_type"
                name="business_type"
                value={data.business_type}
                options={business_type}
                placeholder="select_business_type"
                className="w-full"
                labelData="name"
                valueData="id"
                onChange={e => setData('business_type', e.target.value)}
              />
              <Link
                className="mt-2 block text-sm text-primary font-semibold"
                href="/business-type"
              >
                {t('add_business_type')}
              </Link>
              <span className="text-red-600">{errors.business_type}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="image" value={t('form_label_image')} />
            </div>
            <div className="w-3/4">
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
      <AdminSection className="grid gap-6">
        <TitleSection title="list_assessment_title" />
        <Table
          header={headerTable}
          data={assessment}
          selectedData={selectedData}
          tableButtons={tableButtons}
          tableActions={tableActions}
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreateAssessment;
