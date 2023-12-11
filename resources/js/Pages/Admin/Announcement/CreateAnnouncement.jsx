import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';

function CreateAnnouncement({ announcement }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    text: '',
    images: null,
    file: null,
    category: 'announcements',
  });

  const headerTable = ['Title', 'Text', 'Action'];

  const selectedData = ['title', 'text'];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/admin/announcement/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'announcement.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
    },
  ];
  const submit = e => {
    e.preventDefault();

    post(route('announcement.store'), {
      onSuccess: () => {
        setData({ title: '', text: '', images: null, file: null });
      },
    });
  };

  return (
    <AdminLayout>
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="create_announcement_title" />
        {flash.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
        <form className="flex flex-col gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="title" value={t('form_label_title')} />
            </div>
            <div className="lg:w-4/5">
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
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="text" value={t('form_label_text')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="text"
                typeForm="textArea"
                type="text"
                name="text"
                value={data.text}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('text', e.target.value)}
              />
              <span className="text-red-600">{errors.text}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="image" value={t('form_label_image')} />
            </div>
            <div className="lg:w-4/5">
              <input
                type="file"
                name="image"
                multiple
                id="image"
                className="block"
                onChange={e => setData('image', e.target.files)}
              />
              <span className="text-red-600">{errors.image}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="file" value={t('form_label_file')} />
            </div>
            <div className="lg:w-4/5">
              <input
                type="file"
                name="file"
                id="file"
                className="block"
                onChange={e => setData('file', e.target.files[0])}
              />
              <span className="text-red-600">{errors.file}</span>
            </div>
          </div>
          <Button color="secondary" className="w-fit" disabled={processing}>
            {t('submit')}
          </Button>
        </form>
      </AdminSection>
      <AdminSection className="flex flex-col gap-6">
        <TitleSection title="list_announcement" />
        <Table
          header={headerTable}
          data={announcement}
          selectedData={selectedData}
          tableActions={tableActions}
          pathImage="threads/images/"
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreateAnnouncement;
