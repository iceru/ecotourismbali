import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';

import TextInput from '@/Components/TextInput';
import Button from '@/Components/Button';

import { badgeColor } from '@/Helper/BadgeColor';
import { useForm, router } from '@inertiajs/react';
import { isEmpty } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faFile,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { saveAs } from 'file-saver';

function Comment({ comment, type, member, thread, images }) {
  const currentMember = type === 'input' ? member : comment?.member;
  const { t } = useTranslation();

  const { data, setData, post, errors } = useForm({
    thread_id: thread?.id,
    text: '',
  });

  const submit = e => {
    e.preventDefault();

    post(route('member.forum.comment.store'), {
      onSuccess: () => {
        setData('text', '');
      },
    });
  };

  const download = (e, file) => {
    saveAs(`/storage/threads/files/${file}`, file);
  };

  const deleteComment = (e, id) => {
    e.preventDefault();

    if (confirm('Are you sure to delete the comment?')) {
      post(route('member.forum.comment.destroy', id));
    }
  };

  return (
    <div
      className={`p-6 rounded-xl flex gap-6 bg-opacity-30 shadow-lg flex-wrap lg:flex-nowrap ${
        type === 'thread'
          ? 'bg-lightPrimary w-full'
          : 'bg-white lg:w-[90%] ml-auto'
      }`}
    >
      <div className="flex">
        <div className="w-[48px] mr-3 mt-0.5">
          <img src={`/storage/member/images/${currentMember?.image}`} alt="" />
        </div>
        <div>
          <h4 className="text-lg font-bold">{currentMember?.business_name}</h4>
          <div className="flex gap-2 items-center">
            {currentMember?.badge_id && (
              <>
                <div className="h-[32px] w-[24px]">
                  <img
                    className="h-full object-contain w-full"
                    src={'/storage/badges/' + currentMember?.badge?.image}
                  />
                </div>
                <div
                  className={`text-center whitespace-nowrap text-sm ${badgeColor(
                    currentMember?.badge?.name,
                    'text'
                  )}`}
                >
                  {currentMember?.badge?.name} Member
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-full ">
        {type === 'input' ? (
          <form onSubmit={submit}>
            <div className="font-bold text-sm text-primary mb-2">
              {moment().format('LLL')}
            </div>
            <TextInput
              typeForm="textarea"
              className="border mb-4 w-full"
              row={5}
              placeholder="Add Comment"
              value={data.text}
              onChange={e => setData('text', e.target.value)}
            />
            <Button>{t('submit')}</Button>
          </form>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <div className="font-bold text-sm text-primary mb-2">
                {moment(comment?.created_at).format('LLL')}
              </div>
              {type !== 'thread' && member?.id === comment?.member?.id && (
                <Button
                  color="danger"
                  className="!text-xs"
                  onClick={e => {
                    deleteComment(e, comment?.id);
                  }}
                >
                  {t('delete')}
                </Button>
              )}
            </div>
            {!isEmpty(images) && (
              <div className="flex justify-center gap-6 mb-5">
                {images.map(image => {
                  return (
                    <img
                      className="max-h-[200px] object-contain"
                      src={'/storage/threads/images/' + image}
                      alt=""
                    />
                  );
                })}
              </div>
            )}
            <div className="mb-4">{comment?.text}</div>
            {comment?.file && (
              <Button
                color="primary"
                onClick={e => download(e, comment?.file)}
                title={comment?.file}
              >
                <FontAwesomeIcon icon={faFile} className="mr-2" />{' '}
                {comment?.file?.length > 30
                  ? comment?.file?.slice(0, 30) + '....'
                  : comment?.file}
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Comment;
