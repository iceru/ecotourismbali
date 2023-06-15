import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';

function EditAssessment() {
  const { t } = useTranslation();

  const { module } = usePage().props;

  const { data, setData, patch, processing, errors } = useForm({
    title: module.title || '',
    description: module.description || '',
    content: module.content || '',
    video: module.video || '',
    resource_person: module.resource_person || '',
    image: '',
    attachment: '',
  });

  const submit = e => {
    e.preventDefault();

    patch(route('module.update', module.id));
  };

  return (
    <AdminLayout>
      <BackTo title="back_to_list_module" link="/module" />
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="edit_module_title" />
        <form className="lg:w-3/4 flex flex-col gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="title" value={t('form_label_title')} />
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
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="description"
                value={t('form_label_description')}
              />
            </div>
            <div className="lg:w-3/4">
              <TextInput
                id="description"
                name="description"
                type="text"
                typeForm="textarea"
                value={data.description}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('description', e.target.value)}
              />
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="resource_person"
                value={t('form_label_author')}
              />
            </div>
            <div className="lg:w-3/4">
              <TextInput
                id="resource_person"
                name="resource_person"
                type="text"
                value={data.resource_person}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('resource_person', e.target.value)}
              />
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="video" value={t('form_label_video')} />
            </div>
            <div className="lg:w-3/4">
              <TextInput
                id="video"
                name="video"
                type="text"
                value={data.video}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('video', e.target.value)}
              />
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="content" value={t('form_label_content')} />
            </div>
            <div className="lg:w-3/4">
              <TextInput
                id="content"
                name="content"
                type="text"
                value={data.content}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('content', e.target.value)}
              />
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="image" value={t('form_label_image')} />
            </div>
            <div className="lg:w-3/4">
              <input
                type="file"
                name="image"
                id="image"
                onChange={e => setData('image', e.target.files[0])}
              />
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="attachment"
                value={t('form_label_attachment')}
              />
            </div>
            <div className="lg:w-3/4">
              <input
                type="file"
                name="attachment"
                id="attachment"
                onChange={e => setData('attachment', e.target.files[0])}
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

export default EditAssessment;
