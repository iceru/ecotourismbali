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
import { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import Editor from '../Components/Editor';

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
      link: 'assessment/',
      link2: '/question',
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
        setValue('');
      },
    });
  };

  const [value, setValue] = useState('');

  useEffect(() => {
    setData('description', value);
  }, [value]);

  return (
    <AdminLayout>
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="create_assessment_title" />
        {flash.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
        <form className=" flex flex-col gap-6 w-full" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="title" value={t('form_label_title')} />
            </div>
            <div className="lg:w-4/5">
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
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="description"
                value={t('form_label_description')}
              />
            </div>
            <div className="lg:w-4/5">
              <Editor onChange={setValue} value={value} />
              <span className="text-red-600">{errors.description}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="business_type"
                value={t('form_label_business_type')}
              />
            </div>
            <div className="lg:w-4/5">
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
          <PrimaryButton
            color="secondary"
            className="w-fit"
            disabled={processing}
          >
            {t('submit')}
          </PrimaryButton>
        </form>
      </AdminSection>
      <AdminSection>
        <TitleSection title="list_assessment_title" className="mb-5" />
        <Table
          header={headerTable}
          data={assessment}
          selectedData={selectedData}
          tableButtons={tableButtons}
          tableActions={tableActions}
          descHtml="description"
          pathImage="assessments/"
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreateAssessment;
