import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import TextInput from '@/Components/TextInput';
import Guest from '@/Layouts/GuestLayout';
import Button from '@/Components/Button';
import { badgeColor } from '@/Helper/BadgeColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faImage } from '@fortawesome/free-solid-svg-icons';

function AddThread({ member }) {
  const { t } = useTranslation();
  console.log(member);

  const { data, setData, post, errors } = useForm({
    title: '',
    text: '',
    images: null,
    file: null,
    category: 'thread',
  });

  const submit = e => {
    e.preventDefault();

    post(route('member.forum.thread.store'), {});
  };

  return (
    <Guest>
      <section className="flex items-center gap-3 mb-4 text-sm">
        <Link href={route('member.forum.index')} className="text-primary">
          {t('member_forums')}
        </Link>
        <div>/</div>
        <div className="font-bold">{t('create_topic')}</div>
      </section>
      <h1 className="font-bold text-2xl mb-6">{t('create_topic')}</h1>
      <form
        onSubmit={submit}
        className="p-6 rounded-xl bg-lightPrimary flex bg-opacity-30 shadow-lg flex-wrap"
      >
        <div className="w-full lg:w-1/5 flex mb-4 lg:mb-0">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1">{member?.business_name}</h4>
            <div className="flex gap-2 items-center">
              <div>
                <img
                  className="max-h-[32px]"
                  src={'/storage/badges/' + member?.badge?.image}
                />
              </div>
              <div
                className={`text-center whitespace-nowrap  ${badgeColor(
                  member?.badge?.name,
                  'text'
                )}`}
              >
                {member?.badge?.name} Member
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/5">
          <div className="font-bold text-sm text-primary mb-2">
            {moment().format('LLL')}
          </div>
          <div>
            <TextInput
              className="mb-4 w-full"
              placeholder="Title"
              value={data.title}
              isFocused={true}
              onChange={e => setData('title', e.target.value)}
            />
          </div>
          <div>
            <TextInput
              typeForm="textarea"
              className="w-full mb-2"
              placeholder="Topic Content"
              value={data.text}
              onChange={e => setData('text', e.target.value)}
            />
          </div>
          <div className="flex items-center mb-4">
            <div className="whitespace-nowrap mr-2 font-bold">
              Add Images <FontAwesomeIcon icon={faImage} /> :
            </div>
            <input
              type="file"
              multiple
              name="images"
              onChange={e => setData('images', e.target.files)}
              className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-secondary file:text-white"
            />
          </div>
          <div className="flex items-center mb-4">
            <div className="whitespace-nowrap mr-2 font-bold">
              Add File <FontAwesomeIcon icon={faFileUpload} /> :
            </div>
            <input
              type="file"
              name="file"
              onChange={e => setData('file', e.target.files[0])}
              className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-secondary file:text-white"
            />
          </div>
          <Button className="py-3">
            <div className="w-full">{t('submit')}</div>
          </Button>
        </div>
      </form>
    </Guest>
  );
}

export default AddThread;
