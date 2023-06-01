import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';

function EditAssessment() {
  const { t } = useTranslation();

  const { assessment } = usePage().props;

  const { data, setData, patch, processing, errors } = useForm({
    title: assessment.title || '',
    description: assessment.description || '',
    image: '',
  });

  const submit = e => {
    e.preventDefault();

    patch(route('assessment.update', assessment.id));
  };

  return (
    <AdminLayout>
      <BackTo title="back_to_list_assessment" link="/assessment" />
      <AdminSection className="grid gap-6 mb-6">
        <TitleSection title="edit_assessment_title" />
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
                type="text"
                typeForm="textarea"
                value={data.description}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('description', e.target.value)}
              />
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
