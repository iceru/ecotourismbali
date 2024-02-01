import React, { useEffect, useState } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

import AdminSection from '@/Components/AdminSection';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import Button from '@/Components/Button';
import { sortBy } from 'lodash';
import AdminLayout from '@/Layouts/AdminLayout';
import noImage from '../../../../images/no-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Assessment({ assessments, session, answers, member }) {
  const [active, setActive] = useState(0);
  const { t, i18n } = useTranslation();
  const { ziggy } = usePage().props;

  const { data, setData, processing } = useForm();
  const [loading, setLoading] = useState(false);
  const lang = i18n.language;

  useEffect(() => {
    answers.forEach(ans => {
      if (ans.assessment_question.type === 'checkbox') {
        handleCheckboxChange(
          ans.assessment_question_id,
          ans.assessment_option_id
        );
      } else {
        handleOptionChange(
          ans.assessment_question_id,
          ans.assessment_option_id
        );
      }
    });
  }, [answers]);

  const handleOptionChange = (questionId, optionId, noStore) => {
    const updatedData = {
      [`radio.${questionId}`]: optionId,
      assessment_id: assessments[ziggy?.query?.question || 0].id,
      session_id: session.id,
    };

    setData(prevData => {
      const newData = { ...prevData, ...updatedData };
      if (!noStore) {
        localStorage.setItem('assessment', JSON.stringify(newData)); // Store in localStorage
      }
      return newData;
    });
  };
  const handleCheckboxChange = (questionId, optionId, noStore) => {
    setData(prevData => {
      const updatedOptions = prevData[`checkbox.${questionId}`] || [];
      const updatedData = updatedOptions.includes(optionId)
        ? {
            ...prevData,
            [`checkbox.${questionId}`]: updatedOptions.filter(
              id => id !== optionId
            ),
          }
        : {
            ...prevData,
            [`checkbox.${questionId}`]: [...updatedOptions, optionId],
          };

      if (!noStore) {
        localStorage.setItem('assessment', JSON.stringify(updatedData)); // Store in localStorage
      }
      return updatedData;
    });
  };
  const downloadPDF = () => {
    const container = document.getElementsByClassName('assess_container');
    for (var i = 0; i < container.length; i++) {
      container.item(i).classList.remove('hidden');
    }
    const button = document.querySelector('#assess_button');
    button.style.display = 'none';
    setLoading(true);

    html2canvas(document.querySelector('#assessments'), {
      scrollY: -window.scrollY,
    })
      .then(canvas => {
        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        heightLeft -= pageHeight;
        const pdf = new jsPDF('p', 'mm');
        pdf.addImage(
          canvas,
          'PNG',
          0,
          position,
          imgWidth,
          imgHeight,
          '',
          'FAST'
        );
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(
            canvas,
            'PNG',
            0,
            position,
            imgWidth,
            imgHeight,
            '',
            'FAST'
          );
          heightLeft -= pageHeight;
        }
        pdf.save(`${member?.business_name}-result`);
      })
      .finally(() => {
        setLoading(false);
        const container = document.getElementsByClassName('assess_container');
        for (var i = 0; i < container.length; i++) {
          if (i !== 0) {
            container.item(i).classList.add('hidden');
          }
        }
        const button = document.querySelector('#assess_button');
        button.style.display = 'flex';
      });
  };
  return (
    <AdminLayout>
      <AdminSection>
        <Link
          href={route('statistic.index')}
          className="flex gap-2 items-center"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
          {t('back')}
        </Link>
        <div className="flex my-4">
          <Button onClick={downloadPDF} disabled={loading}>
            {loading ? 'On Process of Downloading PDF...' : 'Download PDF'}
          </Button>
        </div>
        <TitleSection title="assessment" className="mb-6" />
        <div className="assessments p-4" id="assessments">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div>
              {member?.image ? (
                <img
                  className="w-12 h-12 object-contain"
                  src={`/storage/member/images/${member?.image}`}
                  alt=""
                />
              ) : (
                <img className="w-12 h-12" src={noImage} alt="" />
              )}
            </div>
            <div className="font-bold text-lg">{member?.business_name}</div>
          </div>
          {assessments.map((item, i) => {
            return (
              <div
                className={`${active === i ? '' : 'hidden'} assess_container`}
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
                {item.description !== '<p>-</p>' && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        lang === 'en' && item.description_en
                          ? item.description_en
                          : item.description,
                    }}
                    className="text-center mb-10"
                  />
                )}
                {item.assessment_question.map((question, i) => {
                  return (
                    <div>
                      <div className="font-bold text-lg mb-3">
                        {lang === 'en' && question.title_en
                          ? question.title_en
                          : question.title}
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            lang === 'en' && question.question_en
                              ? question.question_en
                              : question.question,
                        }}
                      />
                      <div className="mt-4">
                        {sortBy(question.assessment_option, ['option_no']).map(
                          option => {
                            return (
                              <div className="flex items-center px-5 py-3 mb-4 rounded-3xl bg-lightPrimary bg-opacity-60">
                                {question.type === 'radio' ? (
                                  <input
                                    type="radio"
                                    name={`radio.${question.id}`}
                                    id={`option_${option.id}`}
                                    value={option.id}
                                    disabled
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
                                    disabled
                                    checked={
                                      data[`checkbox.${question.id}`] &&
                                      data[`checkbox.${question.id}`].includes(
                                        option.id
                                      )
                                    }
                                    className="mr-3 text-primary focus:ring-primary"
                                    onChange={() =>
                                      handleCheckboxChange(
                                        question.id,
                                        option.id
                                      )
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
                                  <span className="font-bold ml-2">{`(${option?.point} Point)`}</span>
                                </label>
                              </div>
                            );
                          }
                        )}
                      </div>
                      {i + 1 !== item.assessment_question.length && (
                        <div className="h-0.5 w-1/2 my-10 box-border left-1/2 mx-auto -translate-y-1/2 bg-gray-300"></div>
                      )}
                    </div>
                  );
                })}
                <div
                  className="flex justify-center gap-6 mt-6"
                  id="assess_button"
                >
                  {active > 0 && (
                    <Button
                      type="button"
                      onClick={() => {
                        setActive(active - 1);
                      }}
                      className="min-w-[160px] flex justify-center"
                      color="gray"
                    >
                      {t('back')}
                    </Button>
                  )}
                  {active + 1 < assessments.length && (
                    <Button
                      type="button"
                      disabled={processing}
                      className="min-w-[160px] flex justify-center"
                      onClick={() => {
                        setActive(active + 1);
                      }}
                    >
                      {t('next')}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </AdminSection>
    </AdminLayout>
  );
}

export default Assessment;
