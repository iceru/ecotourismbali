import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';
import SelectInput from '@/Components/SelectInput';

function EditPostOption() {
  const { t } = useTranslation();

  const { post_option } = usePage().props;

  const { data, setData, patch, processing, errors } = useForm({
    title: post_option.title || '',
    answer: post_option.answer || 'no',
  });

  const submit = e => {
    e.preventDefault();

    patch(route('post_option.update', post_option.id));
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
        title="back_to_list_option"
        link={`/admin/post-question/${post_option.post_test_question_id}/post-option`}
      />
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="edit_post_test_title" />
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
                value={data.answer}
                options={answer}
                className="w-full"
                onChange={e => setData('answer', e.target.value)}
              />
              <span className="text-red-600">{errors.answer}</span>
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

export default EditPostOption;
