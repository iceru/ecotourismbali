import React, { useState } from 'react';
import { router, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';

function Assessment({ assessments, session }) {
  const [active, setActive] = useState(0);
  const { t, i18n } = useTranslation();

  const { data, setData, post, processing, errors } = useForm();

  const lang = i18n.language;
  const submit = e => {
    e.preventDefault();

    post(route('member.assessment.save'), {
      onSuccess: () => {
        if (assessments.length > active + 1) {
          setActive(active + 1);
          setData({});
        } else {
          router.post(route('member.assessment.complete', session.id));
        }
      },
    });
  };

  const handleOptionChange = (questionId, optionId) => {
    setData(prevData => ({
      ...prevData,
      [`radio.${questionId}`]: optionId,
      assessment_id: assessments[active].id,
      session_id: session.id,
    }));
  };

  const handleCheckboxChange = (questionId, optionId) => {
    setData(prevData => {
      const updatedOptions = prevData[`checkbox.${questionId}`] || [];
      if (updatedOptions.includes(optionId)) {
        // Remove the option if it was already selected
        const updatedOptionsWithoutRemoved = updatedOptions.filter(
          id => id !== optionId
        );
        return {
          ...prevData,
          [`checkbox.${questionId}`]: updatedOptionsWithoutRemoved,
        };
      } else {
        // Add the option if it was not selected
        const updatedOptionsWithAdded = [...updatedOptions, optionId];
        return {
          ...prevData,
          [`checkbox.${questionId}`]: updatedOptionsWithAdded,
        };
      }
    });
  };

  return (
    <MemberLayout>
      <AdminSection>
        <TitleSection title="assessment" className="mb-6" />
        <div>
          {assessments.map((item, i) => {
            return (
              <form
                onSubmit={submit}
                className={`${active === i ? '' : 'hidden'}`}
              >
                <div className="mb-4 flex justify-center">
                  <img
                    src={`/storage/assessments/${
                      lang === 'en' && item.image_en
                        ? item.image_en
                        : item.image
                    }`}
                    alt=""
                  />
                </div>
                <div className="font-bold mb-3 text-xl text-center">
                  {lang === 'en' && item.title_en ? item.title_en : item.title}
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      lang === 'en' && item.description_en
                        ? item.description_en
                        : item.description,
                  }}
                  className="text-center mb-10"
                />
                {item.assessment_question.map((question, i) => {
                  return (
                    <div>
                      <div className="font-bold text-lg">{question.title}</div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === 'en' && question.question_en
                              ? question.question_en
                              : question.question,
                        }}
                      />
                      <div className="mt-4">
                        {question.assessment_option.map(option => {
                          return (
                            <div className="flex items-center px-5 py-3 mb-4 rounded-3xl bg-lightPrimary bg-opacity-60">
                              {question.type === 'radio' ? (
                                <input
                                  type="radio"
                                  name={`radio.${question.id}`}
                                  id={`option_${option.id}`}
                                  value={option.id}
                                  className="mr-3 text-primary focus:ring-primary"
                                  checked={
                                    data[`radio.${question.id}`] === option.id
                                  }
                                  required
                                  onChange={() =>
                                    handleOptionChange(question.id, option.id)
                                  }
                                />
                              ) : (
                                <input
                                  type="checkbox"
                                  name={`checkbox.${question.id}`}
                                  id={`option_${option.id}`}
                                  value={option.id}
                                  className="mr-3 text-primary focus:ring-primary"
                                  onChange={() =>
                                    handleCheckboxChange(question.id, option.id)
                                  }
                                />
                              )}
                              <label
                                htmlFor={`option_${option.id}`}
                                className="w-full"
                              >
                                {lang === 'en' && option.option_en
                                  ? option.option_en
                                  : option.option}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                      {i + 1 !== item.assessment_question.length && (
                        <div className="h-0.5 w-1/2 my-10 box-border left-1/2 mx-auto -translate-y-1/2 bg-gray-300"></div>
                      )}
                    </div>
                  );
                })}
                <div className="flex justify-center gap-6 mt-6">
                  <PrimaryButton
                    className="min-w-[160px] flex justify-center"
                    color="gray"
                  >
                    {t('back')}
                  </PrimaryButton>
                  <PrimaryButton
                    type="submit"
                    className="min-w-[160px] flex justify-center"
                  >
                    {t('next')}
                  </PrimaryButton>
                </div>
              </form>
            );
          })}
        </div>
      </AdminSection>
    </MemberLayout>
  );
}

export default Assessment;
