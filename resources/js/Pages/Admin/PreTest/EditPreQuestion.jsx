import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';

function EditPreQuestion() {
  const { t } = useTranslation();

  const { pre_question } = usePage().props;

  const { data, setData, patch, processing, errors } = useForm({
    question_no: pre_question.question_no || '',
    question: pre_question.question || '',
  });

  const submit = e => {
    e.preventDefault();

    patch(route('pre_question.update', pre_question.id));
  };

  return (
    <AdminLayout>
      <BackTo title="back_to_list_pre_test" link="/admin/pre_question" />
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="edit_pre_test_title" />
        <form className="lg:w-3/4 flex flex-col gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="question_no"
                value={t('form_label_question_no')}
              />
            </div>
            <div className="lg:w-3/4">
              <TextInput
                id="question_no"
                name="question_no"
                type="number"
                value={data.question_no}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('question_no', e.target.value)}
              />
              <span className="text-red-600">{errors.question_no}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="question" value={t('form_label_question')} />
            </div>
            <div className="lg:w-3/4">
              <TextInput
                id="question"
                name="question"
                type="text"
                typeForm="textarea"
                rows={6}
                value={data.question}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('question', e.target.value)}
              />
              <span className="text-red-600">{errors.question}</span>
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

export default EditPreQuestion;
