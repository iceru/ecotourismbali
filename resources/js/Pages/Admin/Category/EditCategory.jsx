import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';

function EditCategory() {
  const { t } = useTranslation();

  const { category } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    name: category.name || '',
    image: '',
  });

  const submit = e => {
    e.preventDefault();

    post(route('category.update', category.id));
  };

  return (
    <AdminLayout>
      <BackTo title="back_to_list_category" link="/category" />
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="edit_category_title" />
        <form className="flex flex-col gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="name" value={t('form_label_name')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="name"
                name="name"
                type="text"
                value={data.name}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('name', e.target.value)}
              />
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

export default EditCategory;
