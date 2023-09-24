import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';
import { useState, useEffect } from 'react';
import SelectInput from '@/Components/SelectInput';
import Editor from '../Components/Editor';

function EditAssessment() {
  const { t } = useTranslation();

  const { assessment, business_type } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    title: assessment.title || '',
    title_en: assessment.title_en || '',
    business_type: assessment.business_type_id || '',
    description: assessment.description || '',
    description_en: assessment.description_en || '',
    image: '',
    image_en: '',
  });

  const submit = e => {
    e.preventDefault();

    post(route('assessment.update', assessment.id));
  };

  const [value, setValue] = useState(assessment.description);
  const [valueEn, setValueEn] = useState(assessment.description_en);

  useEffect(() => {
    setData('description', value);
  }, [value]);

  useEffect(() => {
    setData('description_en', valueEn);
  }, [valueEn]);

  return (
    <AdminLayout>
      <BackTo title="back_to_list_assessment" link="/admin/assessment" />
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="edit_assessment_title" />
        <form className="flex flex-col gap-6" onSubmit={submit}>
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
                onChange={e =>
                  setData('business_type', parseInt(e.target.value))
                }
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
              <div className="mb-2">
                <img src={`/storage/assessments/${assessment.image}`} alt="" />
              </div>
              <input
                type="file"
                name="image"
                id="image"
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
              <div className="mb-2">
                <img
                  src={`/storage/assessments/${assessment.image_en}`}
                  alt=""
                />
              </div>
              <input
                type="file"
                name="image_en"
                id="image_en"
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
              <div className="mb-2">
                <img src={`/storage/assessments/${assessment.logo}`} alt="" />
              </div>
              <input
                type="file"
                name="logo"
                id="logo"
                onChange={e => setData('logo', e.target.files[0])}
              />
              <span className="text-red-600">{errors.logo}</span>
            </div>
          </div>
          <PrimaryButton className="w-fit" disabled={processing}>
            {t('submit')}
          </PrimaryButton>
        </form>
      </AdminSection>
    </AdminLayout>
  );
}

export default EditAssessment;
