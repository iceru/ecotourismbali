import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
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
    name_en: category.name_en || '', // 1. Added name_en to initial state
    image: '',
  });

  const submit = e => {
    e.preventDefault();
    post(route('category.update', category.id));
  };

  return (
    <AdminLayout>
      <BackTo title="back_to_list_category" link="/admin/category" />
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="edit_category_title" />
        <form className="flex flex-col gap-6" onSubmit={submit}>
          {/* Original Name Input */}
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
              {errors.name && (
                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
              )}
            </div>
          </div>

          {/* 2. Added English Name Input */}
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="name_en" value={t('form_label_name_en')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="name_en"
                name="name_en"
                type="text"
                value={data.name_en}
                className="block w-full"
                onChange={e => setData('name_en', e.target.value)}
              />
              {errors.name_en && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.name_en}
                </div>
              )}
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

export default EditCategory;
