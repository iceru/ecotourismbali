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

function CreateQuestion() {
  const { t } = useTranslation();

  const { data, setData, post, processing, errors, reset } = useForm({
    question_no: '',
    question: '',
    title: '',
    image: '',
  });

  const headerTable = ['ID', 'Question No', 'Title', 'Question', 'Action'];

  return (
    <AdminLayout>
      <BackTo title="back_to_list_assessment" link="/admin/assessment/create" />
      <AdminSection addClass="mb-6">
        <h4 className="font-bold text-lg">
          Komponen A. Konservasi Sumber Daya
        </h4>
      </AdminSection>
      <AdminSection addClass="grid gap-6 mb-6">
        <TitleSection title="create_question_title" />
        <form className="lg:w-3/4 grid gap-6">
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="question_no"
                value={t('form_label_question_no')}
              />
            </div>
            <div className="w-3/4">
              <TextInput
                id="question_no"
                name="question_no"
                type="number"
                value={data.question_no}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('question_no', e.target.value)}
              />
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="title" value={t('form_label_title')} />
            </div>
            <div className="w-3/4">
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
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="question" value={t('form_label_question')} />
            </div>
            <div className="w-3/4">
              <TextInput
                id="question"
                name="question"
                type="text"
                typeForm="textarea"
                value={data.question}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('question', e.target.value)}
              />
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="image" value={t('form_label_image')} />
            </div>
            <div className="w-3/4">
              <input type="file" name="image" id="image" />
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
      <AdminSection addClass="grid gap-6">
        <TitleSection title="list_question_title" />
        <Table header={headerTable} />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreateQuestion;
