import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';

function EditAnnouncement() {
  const { t } = useTranslation();

  const { announcement } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    title: announcement?.title || '',
    text: announcement?.text || '',
    images: announcement?.images || null,
    file: announcement?.files || null,
    category: announcement?.category || 'announcement',
  });

  const submit = e => {
    e.preventDefault();

    post(route('announcement.update', announcement?.id), {});
  };

  return (
    <AdminLayout>
      <BackTo
        title="back_to_list_verified_badge"
        link="/admin/verified-badge"
      />
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="edit_verified_badge_title" />
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
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="text" value={t('form_label_text')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="text"
                name="text"
                type="text"
                typeForm="textArea"
                value={data.text}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('text', e.target.value)}
              />
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
                onChange={e => setData('image', e.target.files)}
              />
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
                onChange={e => setData('file', e.target.files[0])}
              />
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

export default EditAnnouncement;
