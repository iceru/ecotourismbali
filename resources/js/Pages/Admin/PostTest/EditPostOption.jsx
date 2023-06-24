import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';

function EditPostOption() {
  const { t } = useTranslation();

  const { post_option } = usePage().props;

  const { data, setData, patch, processing, errors } = useForm({
    title: post_option.title || '',
  });

  const submit = e => {
    e.preventDefault();

    patch(route('post_option.update', post_option.id));
  };

  return (
    <AdminLayout>
      <BackTo
        title="back_to_list_option"
        link={`/post-question/${post_option.post_test_question_id}/post-option`}
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
          <PrimaryButton className="w-fit" disabled={processing}>
            {t('submit')}
          </PrimaryButton>
        </form>
      </AdminSection>
    </AdminLayout>
  );
}

export default EditPostOption;
