import React, { useState } from 'react';
import AdminSection from '@/Components/AdminSection';
import PrimaryButton from '@/Components/PrimaryButton';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import { useTranslation } from 'react-i18next';
import { useForm, router } from '@inertiajs/react';

function ModulePostTest({ post_test, module, member }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const { data, setData, post, processing, errors, reset } = useForm({
    member_id: member.id,
    post_test_question_id: post_test[0].id,
    post_test_option_id: null,
  });

  const submit = e => {
    e.preventDefault();
    post(route('member.post-test.store'), {
      onSuccess: () => {
        if (post_test.length > active + 1) {
          setActive(active + 1);
          setData('post_test_question_id', post_test[active + 1].id);
        } else {
          router.visit(route('member.module.result', module.id));
        }
      },
    });
  };

  return (
    <MemberLayout>
      <AdminSection>
        <div className="grid gap-6">
          <TitleSection title="e_learning" />
          <div className="font-bold text-primary">
            {t('module_learning', { number: module.id })}
          </div>
          <div className="text-center font-bold text-xl">{t('post_test')}</div>
          <div className="flex justify-center gap-4">
            {post_test?.map((step, i) => {
              return (
                <div
                  className={`step w-full h-2 bg-lightPrimary rounded-2xl ${
                    active === i ? 'bg-primary' : ''
                  }`}
                ></div>
              );
            })}
          </div>
          <form onSubmit={submit}>
            {post_test?.map((question, i) => {
              return (
                <div className={`grid gap-4 ${active !== i ? 'hidden' : ''}`}>
                  <div className="text-center text-primary font-bold">
                    {t('question', { number: i + 1 })}
                  </div>
                  <div className="text-center">{question.question}</div>
                  {question?.post_test_option?.map((option, i) => {
                    return (
                      <div className="flex items-center px-5 py-3 rounded-3xl bg-lightPrimary bg-opacity-60">
                        <input
                          type="radio"
                          name={`question_${question.id}`}
                          id={`option_${option.id}`}
                          value={option.id}
                          className="mr-3 text-primary focus:ring-primary"
                          onChange={e =>
                            setData(
                              'post_test_option_id',
                              parseInt(e.target.value)
                            )
                          }
                        />
                        <label
                          htmlFor={`option_${option.id}`}
                          className="w-full"
                        >
                          {option.title}
                        </label>
                      </div>
                    );
                  })}
                  <div className="flex justify-center gap-4">
                    {active > 0 && (
                      <PrimaryButton
                        color="gray"
                        className="min-w-[160px] flex justify-center"
                        onClick={() => setActive(active - 1)}
                      >
                        {t('back')}
                      </PrimaryButton>
                    )}
                    <PrimaryButton
                      type="submit"
                      className="min-w-[160px] flex justify-center"
                    >
                      {t('next')}
                    </PrimaryButton>
                  </div>
                </div>
              );
            })}
          </form>
        </div>
      </AdminSection>
    </MemberLayout>
  );
}

export default ModulePostTest;
