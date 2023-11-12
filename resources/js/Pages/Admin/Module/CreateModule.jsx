import { useState, useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';
import Editor from '../Components/Editor';

import 'react-quill/dist/quill.snow.css';

function CreateModule({ module }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;
  const [value, setValue] = useState('');
  const [valueEn, setValueEn] = useState('');

  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    description: '',
    image: null,
    content: null,
    content_en: null,
    video: '',
    attachment: null,
    author: '',
  });

  const headerTable = [
    'Title',
    'Image',
    'Author',
    'Post Test',
    'Pre Test',
    'Action',
  ];

  const selectedData = ['title', 'image', 'author'];

  const tableButtons = [
    {
      label: 'add_pre_test',
      link: '/admin/module/',
      link2: '/pre-question',
      withId: true,
    },
    {
      label: 'add_post_test',
      link: '/admin/module/',
      link2: '/post-question',
      withId: true,
    },
  ];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/admin/module/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'show_button',
      link: '/admin/module/show',
      withId: true,
      color: 'show',
    },
    {
      label: 'delete_button',
      route: 'module.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
    },
  ];

  const submit = e => {
    e.preventDefault();

    post(route('module.store'), {
      onSuccess: () => {
        reset();
        setValue();
        setValueEn();
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  useEffect(() => {
    setData('content', value);
  }, [value]);

  useEffect(() => {
    setData('content_en', valueEn);
  }, [valueEn]);

  return (
    <AdminLayout>
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="create_module_title" />
        {flash.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
        <form className=" flex flex-col gap-6 w-full" onSubmit={submit}>
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
              <InputLabel
                htmlFor="description"
                value={t('form_label_description')}
              />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="description"
                name="description"
                typeForm="textarea"
                value={data.description}
                className="block w-full"
                isFocused={true}
                rows={4}
                onChange={e => setData('description', e.target.value)}
              />
              <span className="text-red-600">{errors.description}</span>
            </div>
          </div>

          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="content" value={t('form_label_content')} />
            </div>
            <div className="lg:w-4/5">
              <Editor onChange={setValue} value={value} />
              <span className="text-red-600">{errors.content}</span>
            </div>
          </div>

          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="content_en"
                value={t('form_label_content_en')}
              />
            </div>
            <div className="lg:w-4/5">
              <Editor onChange={setValueEn} value={valueEn} />
              <span className="text-red-600">{errors.content_en}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="author" value={t('form_label_author')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="author"
                name="author"
                value={data.author}
                className="block w-full"
                isFocused={true}
                rows={8}
                onChange={e => setData('author', e.target.value)}
              />
              <span className="text-red-600">{errors.author}</span>
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
                id="image"
                className="block"
                onChange={e => setData('image', e.target.files[0])}
              />
              <span className="text-red-600">{errors.image}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="video" value={t('form_label_video')} />
            </div>
            <div className="lg:w-4/5">
              <input
                type="file"
                name="video"
                id="video"
                className="block"
                onChange={e => setData('video', e.target.files[0])}
              />
              <span className="text-red-600">{errors.video}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="attachment"
                value={t('form_label_attachment')}
              />
            </div>
            <div className="lg:w-4/5">
              <input
                type="file"
                name="attachment"
                id="attachment"
                className="block"
                onChange={e => setData('attachment', e.target.files[0])}
              />
              <span className="text-red-600">{errors.attachment}</span>
            </div>
          </div>
          <Button color="secondary" className="w-fit" disabled={processing}>
            {t('submit')}
          </Button>
        </form>
      </AdminSection>
      <AdminSection>
        <TitleSection title="list_module_title" className="mb-5" />
        <Table
          header={headerTable}
          data={module}
          selectedData={selectedData}
          tableButtons={tableButtons}
          tableActions={tableActions}
          pathImage="modules/"
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default CreateModule;
