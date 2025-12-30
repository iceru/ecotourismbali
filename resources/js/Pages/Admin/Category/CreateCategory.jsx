import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';
function CreateCategory({ category }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  // 1. Added name_en to the form state
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    name_en: '',
  });

  // 2. Added 'Name (EN)' to the table header and data selection
  const headerTable = ['Name', 'Name (EN)', 'Action'];
  const selectedData = ['name', 'name_en'];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/admin/category/edit',
      withId: true,
      color: 'info',
    },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('category.store'), {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <AdminLayout>
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="create_category_title" />
        {flash.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
        <form className="flex flex-col gap-6" onSubmit={submit}>
          {/* Default Name Input */}
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
              <span className="text-red-600">{errors.name}</span>
            </div>
          </div>

          {/* 3. Added English Name Input */}
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
              <span className="text-red-600">{errors.name_en}</span>
            </div>
          </div>

          <Button color="secondary" className="w-fit" disabled={processing}>
            {t('submit')}
          </Button>
        </form>
      </AdminSection>

      <AdminSection className="flex flex-col gap-6">
        <TitleSection title="list_category_title" />
        <Table
          header={headerTable}
          data={category}
          selectedData={selectedData}
          tableActions={tableActions}
          pathImage="categories/"
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreateCategory;
