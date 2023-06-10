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

function CreatePostOption({ post_test_option, post_test_question }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    option: '',
    point: '',
    option_no: '',
  });

  const headerTable = ['ID', 'Option No', 'Option', 'Point', 'Action'];

  const selectedData = ['id', 'option_no', 'option', 'point'];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/post_test/option/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'post_test_option.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
    },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('post_test_option.store', post_test_question.id), {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <AdminLayout>
      <BackTo
        title="back_to_question"
        link={`/post_test/${post_test_question.id}/question`}
      />
      <AdminSection className="mb-6">
        <h4 className="font-bold text-lg">{post_test_question.title}</h4>
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
              <InputLabel
                htmlFor="option_no"
                value={t('form_label_option_no')}
              />
            </div>
            <div className="lg:w-3/4">
              <TextInput
                id="option_no"
                name="option_no"
                type="number"
                value={data.option_no}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('option_no', e.target.value)}
              />
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="option" value={t('form_label_option')} />
            </div>
            <div className="lg:w-3/4">
              <TextInput
                id="option"
                name="option"
                type="text"
                value={data.option}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('option', e.target.value)}
              />
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="point" value={t('form_label_point')} />
            </div>
            <div className="lg:w-3/4">
              <TextInput
                id="point"
                name="point"
                type="number"
                value={data.point}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('point', e.target.value)}
              />
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
      <AdminSection addClass="flex flex-col gap-6">
        <TitleSection title="list_option_title" className="mb-6" />
        <Table
          header={headerTable}
          data={post_test_option}
          tableActions={tableActions}
          selectedData={selectedData}
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreatePostOption;
