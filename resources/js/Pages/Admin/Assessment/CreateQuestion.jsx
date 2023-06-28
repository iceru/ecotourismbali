import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';
import BackTo from '../Components/BackTo';
import { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import Editor from '../Components/Editor';

function CreateQuestion({ assess_question, assessment }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    question_no: '',
    question: '',
    title: '',
  });

  const headerTable = ['Question No', 'Title', 'Question', 'Option', 'Action'];
  const selectedData = ['question_no', 'title', 'question'];

  const tableButtons = [
    {
      label: 'add_option',
      link: '/assessment/',
      link2: '/option',
      withId: true,
    },
  ];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/assessment/question/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'assessment_question.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
    },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('assessment_question.store', assessment.id), {
      onSuccess: () => {
        reset();
        setValue('');
      },
    });
  };

  const showImage = image => {
    return '/storage/' + image;
  };

  const [value, setValue] = useState('');

  useEffect(() => {
    setData('question', value);
  }, [value]);

  return (
    <AdminLayout>
      <BackTo title="back_to_list_assessment" link="/assessment" />
      <AdminSection className="mb-6 flex items-center">
        <img
          src={showImage('assessments/' + assessment?.image)}
          alt={assessment.title}
          className="w-16 h-16 mr-4 object-cover rounded-lg"
        />
        <h4 className="font-bold text-lg">{assessment.title}</h4>
      </AdminSection>
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="create_question_title" />
        {flash.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
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
                type="number"
                value={data.question_no}
                className="block w-full"
                isFocused={true}
                min="1"
                onChange={e => setData('question_no', e.target.value)}
              />
              <span className="text-red-600">{errors.question_no}</span>
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
              <span className="text-red-600">{errors.title}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="question" value={t('form_label_question')} />
            </div>
            <div className="lg:w-4/5">
              <Editor onChange={setValue} value={value} />
              <span className="text-red-600">{errors.question}</span>
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
      <AdminSection className="flex flex-col gap-6">
        <TitleSection title="list_question_title" />
        <Table
          header={headerTable}
          data={assess_question}
          selectedData={selectedData}
          tableButtons={tableButtons}
          tableActions={tableActions}
          descHtml="question"
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreateQuestion;
