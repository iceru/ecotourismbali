import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';
import BackTo from '../Components/BackTo';
import SelectInput from '@/Components/SelectInput';

function CreatePostOption({ post_option, post_question }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    answer: 'no',
  });

  const headerTable = ['Option', 'Answer', 'Action'];

  const selectedData = ['title', 'answer'];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/admin/post-option/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'post_option.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
    },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('post_option.store', post_question.id), {
      onSuccess: () => {
        reset();
      },
    });
  };

  const answer = [
    {
      label: 'No',
      value: 'no',
    },
    {
      label: 'Yes',
      value: 'yes',
    },
  ];

  return (
    <AdminLayout>
      <BackTo
        title="back_to_question"
        link={`/admin/module/${post_question.module_id}/post-question`}
      />
      <AdminSection className="mb-6">
        <h4 className="font-bold text-lg">
          {post_question.question_no}. {post_question.question}
        </h4>
      </AdminSection>
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="create_option_title" />
        {flash.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
        <form className="lg:w-3/4 flex flex-col gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="title" value={t('form_label_option')} />
            </div>
            <div className="lg:w-3/4">
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
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="title" value={t('form_label_answer')} />
            </div>
            <div className="lg:w-3/4">
              <SelectInput
                id="answer"
                name="answer"
                options={answer}
                className="w-full"
                onChange={e => setData('answer', e.target.value)}
              />
              <span className="text-red-600">{errors.answer}</span>
            </div>
          </div>
          <Button color="secondary" className="w-fit" disabled={processing}>
            {t('submit')}
          </Button>
        </form>
      </AdminSection>
      <AdminSection addClass="flex flex-col gap-6">
        <TitleSection title="list_option_title" className="mb-6" />
        <Table
          header={headerTable}
          data={post_option}
          tableActions={tableActions}
          selectedData={selectedData}
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreatePostOption;
