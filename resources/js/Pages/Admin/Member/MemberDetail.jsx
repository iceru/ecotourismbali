import { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import AdminLayout from '@/Layouts/AdminLayout';
import TitleSection from '../Components/TitleSection';
import BackTo from '../Components/BackTo';
import SelectInput from '@/Components/SelectInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { capitalize, lowerCase } from 'lodash';
import moment from 'moment/moment';
import { badgeColor } from '@/Helper/BadgeColor';
import TextInput from '@/Components/TextInput';
import axios from 'axios';

function MemberIndex() {
  const {
    member,
    categories,
    programs,
    verified_badges,
    remaining,
    dateAssessment,
    scores,
    lastSession,
    lastPayment,
  } = usePage().props;
  const { t } = useTranslation();

  const [edit, setEdit] = useState(false);
  const [statusMember, setStatusMember] = useState(member?.status);

  const { data, setData, post, processing, errors, reset } = useForm({
    category: member?.category_id || '',
    program: member.program_id || '',
    verified_badge: member.verified_badge_id || '',
    total_payment: member.total_payment || '',
    status: member?.status || null,
    invoice_no: lastPayment?.status_code || null,
    invoice_item_text: lastPayment?.invoice_item_text || null,
  });

  const submit = e => {
    e.preventDefault();

    post(route('admin.member.update', member.id), {
      onSuccess: () => {
        reset();
        setEdit(false);
      },
    });
  };

  let currency = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  });

  const total_payments = [
    {
      label: 'Rp1',
      value: 1,
    },
    {
      label: 'Rp500.000',
      value: 500000,
    },
    {
      label: 'Rp1.500.000',
      value: 1500000,
    },
    {
      label: 'Rp2.000.000',
      value: 2000000,
    },
    {
      label: 'Rp6.000.000',
      value: 6000000,
    },
    {
      label: 'Rp12.000.000',
      value: 12000000,
    },
  ];

  const status = [
    {
      label: 'Inactive',
      value: 'inactive',
    },
    {
      label: 'Waiting Approval',
      value: 'waiting_approval',
    },
    {
      label: 'Payment',
      value: 'payment',
    },
    {
      label: 'Active',
      value: 'active',
    },
  ];

  const items = (label, data) => {
    return (
      <div className="flex flex-wrap mb-6">
        <div className="w-full lg:w-1/4 mb-2 lg:mb-0 pr-6">
          <div className="font-bold">{t(label)}</div>
        </div>
        <div className="w-full lg:w-3/4">{data || '-'}</div>
      </div>
    );
  };

  const downloadInvoice = () => {
    axios({
      url: '/admin/member/invoice/' + member.id,
      method: 'POST',
      responseType: 'blob',
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `invoice-${member.business_name}.pdf`);
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <AdminLayout>
      <BackTo link="/admin/member/index" title="back_to_list_members" />
      <AdminSection>
        <div className="flex mb-6 flex-wrap">
          <div className="lg:w-4/5 pr-4">
            <div className="flex flex-wrap items-center mb-6">
              {member?.image && (
                <img
                  className="mr-4 w-[100px]"
                  src={`/storage/member/images/${member?.image}`}
                />
              )}
              <div className="font-bold text-2xl">{member?.business_name}</div>
            </div>
            <div className="flex gap-4">
              <PrimaryButton
                className="mb-6"
                onClick={() => setEdit(!edit)}
                color={!edit ? 'primary' : 'gray'}
              >
                {!edit ? t('edit_member') : t('close_edit_member')}
              </PrimaryButton>
              {statusMember === 'active' || statusMember === 'payment' ? (
                <PrimaryButton
                  className="mb-6"
                  onClick={() => downloadInvoice()}
                  color={'secondary'}
                >
                  Download Invoice
                </PrimaryButton>
              ) : null}
            </div>
            <form onSubmit={submit}>
              {edit ? (
                <div className="flex flex-wrap items-center mb-6">
                  <div className="font-bold lg:w-1/4">{t('status')}</div>
                  <SelectInput
                    id="status"
                    name="status"
                    value={data.status}
                    options={status}
                    className="lg:w-3/4 w-full mt-2 lg:mt-0"
                    onChange={e => {
                      setData('status', e.target.value);
                      setStatusMember(e.target.value);
                    }}
                  />
                </div>
              ) : (
                items('status', capitalize(member?.status?.replace('_', ' ')))
              )}

              {edit && statusMember === 'payment' && (
                <>
                  <div className="flex flex-wrap items-center mb-6">
                    <div className="font-bold lg:w-1/4">{t('invoice_no')}</div>
                    <TextInput
                      id="invoice_no"
                      name="invoice_no"
                      value={data.invoice_no}
                      className="lg:w-3/4 w-full mt-2 lg:mt-0"
                      onChange={e => setData('invoice_no', e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap items-center mb-6">
                    <div className="font-bold lg:w-1/4">
                      {t('invoice_item_text')}
                    </div>
                    <TextInput
                      id="invoice_item_text"
                      name="invoice_item_text"
                      value={data.invoice_item_text}
                      className="lg:w-3/4 w-full mt-2 lg:mt-0"
                      onChange={e =>
                        setData('invoice_item_text', e.target.value)
                      }
                    />
                  </div>
                </>
              )}
              {edit && !member?.status?.includes('active') ? (
                <div className="flex flex-wrap items-center mb-6">
                  <div className="font-bold lg:w-1/4">{t('total_payment')}</div>
                  <SelectInput
                    id="total_payment"
                    name="total_payment"
                    value={data.total_payment}
                    options={total_payments}
                    placeholder="select_total_payment"
                    className="lg:w-3/4 w-full mt-2 lg:mt-0"
                    onChange={e => setData('total_payment', e.target.value)}
                  />
                </div>
              ) : (
                items('total_payment', currency.format(member?.total_payment))
              )}
              {items('email', member.user.email)}
              {items('address', member?.address)}
              {items('phone', member.phone)}
              {items('website', member?.website)}
              {items('business_name', member?.business_name)}
              {items('business_type', member?.business_type?.name)}

              {edit ? (
                <div className="flex flex-wrap items-center mb-6">
                  <div className="font-bold lg:w-1/4">{t('category')}</div>
                  <SelectInput
                    id="category"
                    name="category"
                    value={data.category}
                    options={categories}
                    labelData="name"
                    placeholder="select_category"
                    valueData="id"
                    className="lg:w-3/4 w-full mt-2 lg:mt-0"
                    onChange={e => setData('category', e.target.value)}
                  />
                </div>
              ) : (
                items('category', member?.category?.name)
              )}
              {edit ? (
                <div className="flex flex-wrap items-center mb-6">
                  <div className="font-bold lg:w-1/4">{t('program')}</div>
                  <SelectInput
                    id="program"
                    name="program"
                    value={data.program}
                    options={programs}
                    className="lg:w-3/4 w-full mt-2 lg:mt-0"
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
              {dateAssessment &&
                items('assessment_expire', moment(dateAssessment).format('LL'))}
              {items('badge', member?.badge?.name)}
              {edit ? (
                <div className="flex flex-wrap items-center mb-6">
                  <div className="font-bold lg:w-1/4">
                    {t('verified_badge')}
                  </div>
                  <SelectInput
                    id="verified_badge"
                    name="verified_badge"
                    value={data.verified_badge}
                    options={verified_badges}
                    className="lg:w-3/4 w-full mt-2 lg:mt-0"
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
                <PrimaryButton
                  type="submit"
                  className="mt-4"
                  disabled={processing}
                >
                  {t('submit')}
                </PrimaryButton>
              )}
            </form>
          </div>
          <div className="lg:w-1/5 mx-auto flex lg:block gap-12 sticky top-0 lg:border-l pl-4 mt-10 lg:mt-0">
            {member?.verified_badge && (
              <div className="flex flex-col items-center text-primary uppercase mb-6 pb-4 lg:border-b">
                <div>
                  <img
                    className="max-h-[120px]"
                    src={'/storage/badges/' + member?.verified_badge?.image}
                  />
                </div>
                <div
                  className={`font-bold mt-1 text-center ${badgeColor(
                    member?.badge?.name,
                    'text'
                  )}`}
                >
                  {member?.verified_badge?.name} Verified Badge
                </div>
              </div>
            )}
            {member?.badge ? (
              <div>
                <div className="flex flex-col items-center  uppercase mb-1">
                  <div>
                    <img
                      className="max-h-[120px]"
                      src={'/storage/badges/' + member?.badge?.image}
                    />
                  </div>
                  <div
                    className={`font-bold mt-1 ${badgeColor(
                      member?.badge?.name,
                      'text'
                    )}`}
                  >
                    {member?.badge?.name} Badge
                  </div>
                </div>
                {lastSession && (
                  <div className="text-center text-gray-500  text-xs mb-3">
                    <span className="font-bold">{lastSession.total_score}</span>
                    &nbsp;
                    <span className=" uppercase">Points</span>
                  </div>
                )}
                {scores?.map(score => {
                  return (
                    <div className="flex justify-center text-gray-500 text-xs mb-1">
                      <div className="capitalize">
                        {lowerCase(score.assessment.title).slice(0, 11)}
                      </div>
                      <div className="mx-1">-</div>
                      <div>{score.score}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-slate-600 text-white rounded-full px-3 py-1 font-bold inline-block">
                No Badge
              </div>
            )}
          </div>
        </div>
      </AdminSection>
    </AdminLayout>
  );
}

export default MemberIndex;
