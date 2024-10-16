import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';
import BackTo from '../Components/BackTo';

function CreatePreQuestion({ pre_question, module }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    question_no: '',
    question: '',
  });

  const headerTable = ['Question No', 'Question', 'Module', 'Option', 'Action'];

  const selectedData = ['question_no', 'question', 'module_id'];

  const tableButtons = [
    {
      label: 'add_pre_test_option',
      link: '/admin/pre-question/',
      link2: '/pre-option',
      withId: true,
    },
  ];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/admin/pre-question/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'pre_question.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
    },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('pre_question.store', module.id), {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <AdminLayout>
      <BackTo title="back_to_list_module" link="/admin/module" />
      <AdminSection className="mb-6 flex items-center">
        <img
          src={'/storage/modules/' + module?.image}
          alt={module.title}
          className="w-16 h-16 mr-4 object-cover rounded-lg"
        />
        <h4 className="font-bold text-lg">{module.title}</h4>
      </AdminSection>
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="create_pre_test_title" />
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
                rows={6}
                id="question"
                name="question"
                type="text"
                typeForm="textarea"
                value={data.question}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('question', e.target.value)}
              />
              <span className="text-red-600">{errors.title}</span>
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
      <AdminSection>
        <TitleSection title="list_pre_test_title" className="mb-5" />
        <Table
          header={headerTable}
          data={pre_question}
          selectedData={selectedData}
          tableButtons={tableButtons}
          tableActions={tableActions}
          pathImage="pre_tests/"
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreatePreQuestion;
