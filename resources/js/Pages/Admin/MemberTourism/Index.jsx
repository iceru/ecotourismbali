import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import Table from '@/Components/Table';
import { useState } from 'react';

function MemberTourism({ members }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;
  const [errorFile, setErrorFile] = useState();

  const { data, setData, post, processing, errors, reset } = useForm({
    file: null,
  });

  const headerTable = [
    'Name',
    'Business Name',
    'Email',
    'Phone',
    'Category',
    'Member Only',
    'Action',
  ];

  const selectedData = [
    'name',
    'business_name',
    'email',
    'phone',
    'category',
    'member_only',
  ];

  const tableActions = [
    {
      label: 'edit_button',
      link: '/admin/tourism/member/edit',
      withId: true,
      color: 'info',
    },
    {
      label: 'delete_button',
      route: 'admin.member_tourism.destroy',
      withId: true,
      color: 'danger',
      type: 'delete',
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

  const handleFileChange = event => {
    setData('file', event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!data.file) {
      setErrorFile('Please select a file.');
      return;
    }

    post(route('admin.member_tourism.import'), {
      onSuccess: () => {
        reset();
        setErrorFile('');
        alert('File imported successfully.');
      },
      onError: errors => {
        setErrorFile(errors.file || 'An error occurred.');
      },
    });
  };
  return (
    <AdminLayout>
      <AdminSection className="mb-6">
        <TitleSection title="import_tourism_collective" className="mb-4" />
        <form onSubmit={handleSubmit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="file" value={t('import_data')} />
            </div>
            <div className="lg:w-4/5">
              <input
                type="file"
                name="file"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="text-red-600 mb-2">{errorFile}</div>
          <Button type="submit">Import</Button>
        </form>

        {flash.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
      </AdminSection>
      <AdminSection className="flex flex-col gap-6">
        <TitleSection title="list_tourism_collective" />
        <Table
          header={headerTable}
          data={members}
          selectedData={selectedData}
          tableActions={tableActions}
          pathImage="categories/"
        />
      </AdminSection>
    </AdminLayout>
  );
}

export default MemberTourism;
