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

function CreateOption({ assessment_option, assessment_question }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    option: '',
    point: '',
    option_no: '',
  });

  const headerTable = ['Option No', 'Option', 'Point', 'Action'];

  const selectedData = ['option_no', 'option', 'point'];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/assessment/option/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'assessment_option.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
    },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('assessment_option.store', assessment_question.id), {
      onSuccess: () => {
        reset();
      },
    });
  };

  console.log(assessment_question);

  return (
    <AdminLayout>
      <BackTo
        title="back_to_question"
        link={`/assessment/${assessment_question.assessment.id}/question`}
      />
      <AdminSection className="mb-6">
        <h4 className="font-bold text-lg">{assessment_question.title}</h4>
      </AdminSection>
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="create_option_title" />
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
                htmlFor="option_no"
                value={t('form_label_option_no')}
              />
            </div>
            <div className="lg:w-4/5">
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
          data={assessment_option}
          tableActions={tableActions}
          selectedData={selectedData}
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreateOption;
