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

function EditMemberTourism() {
  const { t } = useTranslation();

  const { member } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    name: member.name || '',
    business_name: member.business_name || '',
    email: member.email || '',
    phone: member.phone || '',
    member_only: member.member_only || '',
    category: member.category || '',
  });

  const submit = e => {
    e.preventDefault();

    post(route('admin.member_tourism.update', member.id));
  };

  const member_onlys = [
    {
      label: 'Yes',
      value: 'yes',
    },
    {
      label: 'No',
      value: 'no',
    },
  ];

  return (
    <AdminLayout>
      <BackTo
        title="back_to_list_tourism_collective"
        link={route('admin.member_tourism.index')}
      />
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="edit_tourism_title" />
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
              <span className="text-red-600">{errors.name}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="business_name" value={t('business_name')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="business_name"
                name="business_name"
                type="text"
                value={data.business_name}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('business_name', e.target.value)}
              />
              <span className="text-red-600">{errors.business_name}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="email" value={t('form_label_email')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="email"
                name="email"
                type="email"
                value={data.email}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('email', e.target.value)}
              />
              <span className="text-red-600">{errors.email}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="phone" value={t('phone')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="phone"
                name="phone"
                type="text"
                value={data.phone}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('phone', e.target.value)}
              />
              <span className="text-red-600">{errors.phone}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel htmlFor="category" value={t('category')} />
            </div>
            <div className="lg:w-4/5">
              <TextInput
                id="category"
                name="category"
                type="text"
                value={data.category}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('category', e.target.value)}
              />
              <span className="text-red-600">{errors.category}</span>
            </div>
          </div>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/5 mb-2 lg:mb-0">
              <InputLabel
                htmlFor="member_only"
                value={t('form_label_member_only')}
              />
            </div>
            <div className="lg:w-4/5">
              <SelectInput
                id="member_only"
                name="member_only"
                value={data.member_only}
                options={member_onlys}
                className="w-full"
                onChange={e => setData('member_only', e.target.value)}
              />
              <span className="text-red-600">{errors.member_only}</span>
            </div>
          </div>
          <Button color="secondary" className="w-fit" disabled={processing}>
            {t('submit')}
          </Button>
        </form>
      </AdminSection>
    </AdminLayout>
  );
}

export default EditMemberTourism;
