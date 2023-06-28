import React, { useState } from 'react';
import AdminSection from '@/Components/AdminSection';
import PrimaryButton from '@/Components/PrimaryButton';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import { useTranslation } from 'react-i18next';

function ModulePreTest({ pre_test, module }) {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  return (
    <MemberLayout>
      <AdminSection>
        <div className="grid gap-6">
          <TitleSection title="e_learning" />
          <div className="font-bold text-primary">
            {t('module_learning', { number: module.id })}
          </div>
          <div className="text-center font-bold text-xl">{t('pre_test')}</div>
          <div className="flex justify-center">
            {pre_test?.map((step, i) => {
              return (
                <div
                  className={`step w-full h-2 bg-lightPrimary rounded-2xl ${
                    active === i ? 'bg-primary' : ''
                  }`}
                ></div>
              );
            })}
          </div>
          <div>
            {pre_test?.map((question, i) => {
              return (
                <div className="grid gap-4">
                  <div>{t('question', { number: i + 1 })}</div>
                  <div className="text-center">{question.question}</div>
                  {question?.pre_test_option?.map((option, i) => {
                    return (
                      <div className="flex items-center px-4 py-2 rounded-2xl bg-lightPrimary bg-opacity-60">
                        <input
                          type="radio"
                          name={`question_${question.id}_option_${option.id}`}
                          id=""
                          className="mr-3"
                        />
                        {option.title}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-4">
            {active > 0 && (
              <PrimaryButton
                color="gray"
                className="min-w-[160px] flex justify-center"
              >
                {t('back')}
              </PrimaryButton>
            )}
            <PrimaryButton className="min-w-[160px] flex justify-center">
              {t('next')}
            </PrimaryButton>
          </div>
        </div>
      </AdminSection>
    </MemberLayout>
  );
}

export default ModulePreTest;
