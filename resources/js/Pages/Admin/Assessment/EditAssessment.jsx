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
    business_type_id: assessment.business_type_id || '',
    description: assessment.description || '',
    image: '',
  });

  const submit = e => {
    e.preventDefault();

    post(route('assessment.update', assessment.id));
  };

  const [value, setValue] = useState(assessment.description);

  useEffect(() => {
    setData('description', value);
  }, [value]);

  return (
    <AdminLayout>
      <BackTo title="back_to_list_assessment" link="/assessment" />
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
                defaultValue={data.business_type_id}
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
              <div>
                <img src={`/storage/assessments/${assessment.image}`} alt="" />
              </div>
              <input
                type="file"
                name="image"
                id="image"
                onChange={e => setData('image', e.target.files[0])}
              />
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
