import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

function EditAssessment() {
  const { t } = useTranslation();

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    description: '',
    image: '',
  });

  return (
    <AdminLayout>
      <Link href="/admin/assessment/create" className="mb-6 flex items-center">
        <FontAwesomeIcon icon={faLongArrowAltLeft} className="mr-2" />
        {t('back_to_list_assessment')}
      </Link>
      <AdminSection addClass="grid gap-6 mb-6">
        <TitleSection title="edit_assessment_title" />
        <form className="lg:w-3/4 grid gap-6">
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="name" value={t('form_label_name')} />
            </div>
            <div className="w-3/4">
              <TextInput
                id="name"
                name="name"
                type="text"
                value={data.name}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('name', e.target.value)}
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
              <input type="file" name="image" id="image" />
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
