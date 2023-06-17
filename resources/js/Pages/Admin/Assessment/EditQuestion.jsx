import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';
import { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import Editor from '../Components/Editor';

function EditQuestion() {
  const { t } = useTranslation();

  const { assess_question, assessment } = usePage().props;

  const { data, setData, post, processing } = useForm({
    question_no: assess_question.question_no || '',
    title: assess_question.title || '',
    question: assess_question.question || '',
  });

  const submit = e => {
    e.preventDefault();

    post(route('assessment_question.update', assess_question.id));
  };

  const [value, setValue] = useState(assess_question.question);

  useEffect(() => {
    setData('question', value);
  }, [value]);

  return (
    <AdminLayout>
      <BackTo
        title="back_to_question"
        link={`/assessment/${assessment.id}/question`}
      />
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="edit_assessment_title" />
        <form className="flex flex-col gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="question_no"
                value={t('form_label_question_no')}
              />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="question_no"
                name="question_no"
                type="text"
                value={data.question_no}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('question_no', e.target.value)}
              />
            </div>
          </div>
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
              <InputLabel htmlFor="question" value={t('form_label_question')} />
            </div>
            <div className="lg:w-4/5">
              <Editor onChange={setValue} value={value} />
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
