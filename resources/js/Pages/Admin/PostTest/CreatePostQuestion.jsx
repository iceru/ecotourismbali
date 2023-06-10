import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';

function CreatePostQuestion({ post_test }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    question_no: '',
    question: '',
    module_id: null,
  });

  const headerTable = [
    'ID',
    'Question No',
    'Question',
    'Module',
    'Option',
    'Action',
  ];

  const selectedData = ['id', 'question_no', 'question', 'module_id'];

  const tableButtons = [
    {
      label: 'add_post_test_option',
      link: 'post_test/',
      link2: '/option',
      withId: true,
    },
  ];

  const tableActions = [
    {
      label: 'edit_button',
      link: 'post_test/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'post_test.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
    },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('post_test.store'), {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <AdminLayout>
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="create_post_test_title" />
        {flash.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
        <form className="lg:w-3/4 flex flex-col gap-6 w-full" onSubmit={submit}>
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
                rows={8}
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
                value={data.question}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('question', e.target.value)}
              />
              <span className="text-red-600">{errors.title}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="module_id"
                value={t('form_label_module_id')}
              />
            </div>
            <div className="lg:w-3/4">
              <SelectInput
                id="module_id"
                name="module_id"
                value={data.module_id}
                options={module_id}
                placeholder="select_module_id"
                className="w-full"
                labelData="name"
                valueData="id"
                onChange={e => setData('module_id', e.target.value)}
              />
              <span className="text-red-600">{errors.video}</span>
            </div>
          </div>
          <PrimaryButton
            type="secondary"
            className="w-fit"
            disabled={processing}
          >
            {t('submit')}
          </PrimaryButton>
        </form>
      </AdminSection>
      <AdminSection>
        <TitleSection title="list_post_test_title" className="mb-5" />
        <Table
          header={headerTable}
          data={post_test}
          selectedData={selectedData}
          tableButtons={tableButtons}
          tableActions={tableActions}
          pathImage="post_tests/"
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreatePostQuestion;
