import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';

function EditPostQuestion() {
  const { t } = useTranslation();

  const { post_question } = usePage().props;

  const { data, setData, patch, processing, errors } = useForm({
    question_no: post_question.question_no || '',
    question: post_question.question || '',
  });

  const submit = e => {
    e.preventDefault();

    patch(route('post_question.update', post_question.id));
  };

  return (
    <AdminLayout>
      <BackTo title="back_to_list_post_test" link="/admin/post_question" />
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="edit_post_test_title" />
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
          <Button className="w-fit" disabled={processing}>
            {t('submit')}
          </Button>
        </form>
      </AdminSection>
    </AdminLayout>
  );
}

export default EditPostQuestion;
