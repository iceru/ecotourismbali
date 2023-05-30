import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';

function EditBusinessType() {
  const { t } = useTranslation();

  const { business_type } = usePage().props;

  const { data, setData, patch, processing } = useForm({
    name: business_type.name || '',
  });

  const submit = e => {
    e.preventDefault();

    patch(route('business_type.update', business_type.id));
  };

  return (
    <AdminLayout>
      <BackTo title="back_to_list_business" link="/business-type" />
      <AdminSection className="grid gap-6 mb-6">
        <TitleSection title="edit_business_title" />
        <form className="lg:w-3/4 grid gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="name" value={t('form_label_name')} />
            </div>
            <div className="w-3/4">
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

export default EditBusinessType;
