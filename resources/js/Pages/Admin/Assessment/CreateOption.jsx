import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';
import BackTo from '../Components/BackTo';

function CreateOption() {
  const { t } = useTranslation();

  const { data, setData, post, processing, errors, reset } = useForm({
    option: '',
    point: '',
    option_no: '',
  });

  const headerTable = ['ID', 'Question No', 'Title', 'Question', 'Action'];

  return (
    <AdminLayout>
      <BackTo
        title="back_to_list_question"
        link="/admin/assessment/question/create"
      />
      <AdminSection addClass="mb-6">
        <h4 className="font-bold text-lg">Question 1</h4>
      </AdminSection>
      <AdminSection addClass="flex flex-col gap-6 mb-6">
        <TitleSection title="create_option_title" />
        <form className="lg:w-3/4 flex flex-col gap-6">
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
                type="text"
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
        <TitleSection title="list_option_title" />
        <Table header={headerTable} />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreateOption;
