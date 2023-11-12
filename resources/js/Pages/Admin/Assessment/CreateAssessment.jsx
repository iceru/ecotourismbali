import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
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
    title_en: '',
    description: '',
    description_en: '',
    image: null,
    image_en: null,
    business_type: null,
    logo: null,
  });

  const headerTable = [
    'Title',
    'Description',
    'Image',
    'Business Type',
    'Question',
    'Action',
  ];

  const selectedData = ['title', 'description', 'image', 'business_type_id'];

  const tableButtons = [
    {
      label: 'add_question',
      link: '/admin/assessment/',
      link2: '/question',
      withId: true,
    },
  ];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/admin/assessment/edit',
      withId: true,
      color: 'info',
    },
    // {
    //   label: 'delete_button',
    //   route: 'assessment.destroy',
    //   withId: true,
    //   color: 'danger',
    //   type: 'delete',
    // },
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
  const [valueEn, setValueEn] = useState('');

  useEffect(() => {
    setData('description', value);
  }, [value]);

  useEffect(() => {
    setData('description_en', valueEn);
  }, [valueEn]);

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
              <InputLabel htmlFor="title_en" value={t('form_label_title_en')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="title_en"
                name="title_en"
                type="text"
                value={data.title_en}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('title_en', e.target.value)}
              />
              <span className="text-red-600">{errors.title_en}</span>
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
                htmlFor="description_en"
                value={t('form_label_description_en')}
              />
            </div>
            <div className="lg:w-4/5">
              <Editor onChange={setValueEn} value={valueEn} />
              <span className="text-red-600">{errors.description_en}</span>
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
                href={route('business_type.index')}
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
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="image_en" value={t('form_label_image_en')} />
            </div>
            <div className="lg:w-4/5">
              <input
                type="file"
                name="image_en"
                id="image_en"
                className="block"
                onChange={e => setData('image_en', e.target.files[0])}
              />
              <span className="text-red-600">{errors.image_en}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="logo" value={t('form_label_logo')} />
            </div>
            <div className="lg:w-4/5">
              <input
                type="file"
                name="logo"
                id="logo"
                className="block"
                onChange={e => setData('logo', e.target.files[0])}
              />
              <span className="text-red-600">{errors.logo}</span>
            </div>
          </div>
          <Button color="secondary" className="w-fit" disabled={processing}>
            {t('submit')}
          </Button>
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
