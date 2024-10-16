import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';

function EditQuestion() {
  const { t } = useTranslation();

  const { assessment_option, assessment_question, errors } = usePage().props;

  const { data, setData, post, processing } = useForm({
    option_no: assessment_option.option_no || '',
    option: assessment_option.option || '',
    option_en: assessment_option.option_en || '',
    point: assessment_option.point || '',
  });

  const submit = e => {
    e.preventDefault();

    post(route('assessment_option.update', assessment_option.id));
  };

  return (
    <AdminLayout>
      <BackTo
        title="back_to_question"
        link={`/admin/assessment/${assessment_question.id}/question`}
      />
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="edit_assessment_title" />
        <form className="flex flex-col gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="option_no"
                value={t('form_label_option_no')}
              />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="option_no"
                name="option_no"
                type="text"
                value={data.option_no}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('option_no', e.target.value)}
              />
              <span className="text-red-600">{errors.option_no}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="option" value={t('form_label_option')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="option"
                name="option"
                type="text"
                value={data.option}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('option', e.target.value)}
              />
              <span className="text-red-600">{errors.option}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="option_en"
                value={t('form_label_option_en')}
              />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="option_en"
                name="option_en"
                type="text"
                value={data.option_en}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('option_en', e.target.value)}
              />
              <span className="text-red-600">{errors.option_en}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="point" value={t('form_label_point')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="point"
                name="point"
                type="text"
                value={data.point}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('point', e.target.value)}
              />
              <span className="text-red-600">{errors.point}</span>
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

export default EditQuestion;
