import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import TitleSection from '../Components/TitleSection';
import AdminSection from '@/Components/AdminSection';
import BackTo from '../Components/BackTo';
import { useEffect } from 'react';

function EditProgram() {
  const { t } = useTranslation();

  const { program } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    name: program.name || '',
    image: null,
  });

  const submit = e => {
    e.preventDefault();

    post(route('program.update', program.id));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <AdminLayout>
      <BackTo title="back_to_list_program" link="/program" />
      <AdminSection className="flex flex-col gap-6 mb-6">
        <TitleSection title="edit_program_title" />
        <form className="lg:w-3/4 flex flex-col gap-6" onSubmit={submit}>
          <div className="block lg:flex items-center">
            <div className="lg:w-1/4 mb-2 lg:mb-0">
              <InputLabel htmlFor="name" value={t('form_label_name')} />
            </div>
            <div className="lg:w-3/4">
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
            <span className="text-red-600">{errors.image}</span>
          </div>
          <PrimaryButton className="w-fit" disabled={processing}>
            {t('submit')}
          </PrimaryButton>
        </form>
      </AdminSection>
    </AdminLayout>
  );
}

export default EditProgram;
