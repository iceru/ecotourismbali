import { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import BackTo from '../Components/BackTo';
import SelectInput from '@/Components/SelectInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { capitalize } from 'lodash';
import moment from 'moment/moment';

function MemberIndex() {
  const {
    member,
    categories,
    programs,
    verified_badges,
    remaining,
    dateAssessment,
  } = usePage().props;
  const { t } = useTranslation();

  const [edit, setEdit] = useState(false);

  console.log(member);

  const { data, setData, post, processing, errors, reset } = useForm({
    category: '',
    program: '',
    verified_badge: '',
  });

  const submit = e => {
    e.preventDefault();

    post(route('member.update', member.id), {
      onSuccess: () => {
        reset();
        setEdit(false);
      },
    });
  };

  const items = (label, data) => {
    return (
      <div className="flex flex-wrap mb-4">
        <div className="w-full lg:w-1/4 mb-3 lg:mb-0">
          <div className="font-bold">{t(label)}</div>
        </div>
        <div className="w-full lg:w-3/4">{data || '-'}</div>
      </div>
    );
  };

  const attempts = () => {
    const total = 2;
    const length = member?.member_assessment?.length || 0;

    return total - length;
  };

  return (
    <AdminLayout>
      <BackTo link="/admin/member/index" title="back_to_list_members" />
      <AdminSection>
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            {member?.image && (
              <img
                className="mr-4 w-[100px]"
                src={`/storage/member/images/${member?.image}`}
              />
            )}
            <div className="font-bold text-2xl">{member?.business_name}</div>
          </div>
          <div>
            {member?.badge ? (
              <div className="flex flex-col items-center">
                <div>
                  <img
                    className="max-h-[120px]"
                    src={'/storage/badges/' + member.badge.image}
                  />
                </div>
                <div className="font-bold mt-1">{member.badge.name} Member</div>
              </div>
            ) : (
              <div className="bg-red-500 text-white rounded-full px-3 py-1 font-bold">
                No Badge
              </div>
            )}
          </div>
        </div>
        <PrimaryButton className="mb-6" onClick={() => setEdit(!edit)}>
          {t('edit_member')}
        </PrimaryButton>
        <form onSubmit={submit}>
          {items('status', capitalize(member?.status))}
          {items('email', member.user.email)}
          {items('address', member?.address)}
          {items('phone', member.phone)}
          {items('website', member?.website)}
          {items('business_name', member?.business_name)}
          {items('business_type', member?.business_type?.name)}

          {edit ? (
            <div className="flex items-center mb-4">
              <div className="font-bold lg:w-1/4">{t('category')}</div>
              <SelectInput
                id="category"
                name="category"
                value={data.category}
                options={categories}
                labelData="name"
                placeholder="select_category"
                valueData="id"
                className="lg:w-3/4"
                onChange={e => setData('category', e.target.value)}
              />
            </div>
          ) : (
            items('category', member?.category?.name)
          )}
          {edit ? (
            <div className="flex items-center mb-4">
              <div className="font-bold lg:w-1/4">{t('program')}</div>
              <SelectInput
                id="program"
                name="program"
                value={data.program}
                options={programs}
                className="lg:w-3/4"
                placeholder="select_program"
                labelData="name"
                valueData="id"
                onChange={e => setData('program', e.target.value)}
              />
            </div>
          ) : (
            items('program', member?.program?.name)
          )}
          {items('assessment_attempt', remaining)}
          {items('assessment_expire', moment(dateAssessment).format('LL'))}
          {items('badge', member?.badge?.name)}
          {edit ? (
            <div className="flex items-center mb-4">
              <div className="font-bold lg:w-1/4">{t('verified_badge')}</div>
              <SelectInput
                id="verified_badge"
                name="verified_badge"
                value={data.verified_badge}
                options={verified_badges}
                className="lg:w-3/4"
                labelData="name"
                placeholder="select_verify_badge"
                valueData="id"
                onChange={e => setData('verified_badge', e.target.value)}
              />
            </div>
          ) : (
            items('verified_badge', member?.verified_badge?.name)
          )}
          {items('description', member?.description)}
          {edit && (
            <PrimaryButton type="submit" className="mt-4">
              {t('submit')}
            </PrimaryButton>
          )}
        </form>
      </AdminSection>
    </AdminLayout>
  );
}

export default MemberIndex;
