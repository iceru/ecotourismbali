import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Document,
  Image,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import { usePage } from '@inertiajs/react';
import Lottie from 'lottie-react';
import moment from 'moment';
import { saveAs } from 'file-saver';
import { toUpper } from 'lodash';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';
import { badgeColor } from '@/Helper/BadgeColor';

import Certificate from '../../../../images/certificate.png';
import confetti from '../../../../images/confetti2.json';

function AssessmentResult({ session, member, scores, expiredDate }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  useEffect(() => {
    localStorage.clear('assessment');
  }, []);

  const styles = StyleSheet.create({
    certWrapper: {
      width: '100%',
      position: 'relative',
    },
    certImage: {
      width: '100vw',
      position: 'absolute',
      height: '100vh',
    },
    certName: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '28px',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      textAlign: 'center',
    },
    certBadge: {
      position: 'absolute',
      top: '65%',
      left: '30%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translate(-50%, -50%)',
    },
    certBadgeImage: {
      width: '100px',
      height: '100%',
    },
    certValid: {
      position: 'absolute',
      bottom: '11px',
      left: '25.5%',
      transform: 'translateX(-50%)',
      fontSize: '12px',
      color: 'white',
    },
    certNumber: {
      position: 'absolute',
      bottom: '11px',
      left: '81%',
      transform: 'translateX(-50%)',
      fontSize: '12px',
      color: 'white',
    },
  });

  const renderCertificate = () => (
    <Document>
      <Page size="A4" orientation="portrait">
        <View style={styles?.certWrapper}>
          <Image src={Certificate} style={styles?.certImage}></Image>
        </View>
        <View style={styles?.certName}>
          <Text>{member?.business_name}</Text>
        </View>
        <View style={styles?.certBadge}>
          <Image
            src={'/storage/badges/' + member?.badge?.image}
            style={styles?.certBadgeImage}
          ></Image>
          <Text>{member?.badge?.name} Badge</Text>
        </View>
        <View style={styles?.certValid}>
          <Text>{moment(expiredDate).format('ll')}</Text>
        </View>
        <View style={styles?.certNumber}>
          <Text>{`ETB-${moment(session?.created_at).format('DDMMYY')}-${
            member.id
          }-${toUpper(member?.badge?.name.replace(/[aeiou]/gi, ''))}`}</Text>
        </View>
      </Page>
    </Document>
  );

  const downloadImage = url => {
    saveAs(url, 'badge.png'); // Put your image URL here.
  };

  return (
    <MemberLayout>
      {flash.success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl relative mb-3">
          <span className="inline">{flash.success}</span>
        </div>
      )}
      <AdminSection>
        <TitleSection title="assessment" className="mb-6" />

        <div className="mb-6 pb-6 border-b text-center">
          <div className="text-3xl mb-1 font-bold text-primary">
            {t('congrats')}
          </div>
          <p className=" mb-3 text-lg font-bold text-primary">
            {t('finish_assessment')}
          </p>
          <p className="lg:w-2/3 text-sm lg:text-base text-start lg:text-center mx-auto py-4 px-6 rounded-lg bg-lightPrimary text-primary">
            {t('finish_assessment_text')}
          </p>
        </div>
        {member?.status?.includes('active') ? (
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] z-0">
              <Lottie animationData={confetti} loop={3} className="w-full" />
            </div>
            <div className="relative z-[2]">
              <div className="grid lg:grid-cols-2 gap-6 xl:w-[80%] mx-auto">
                <div className="mb-4 pb-6 lg:pb-0 lg:mb-0 text-center lg:border-r-2 border-gray-200">
                  <div className="mb-4 font-bold">
                    {t('your_assessment_scores')}&nbsp;
                  </div>
                  <div className=" text-7xl text-primary font-bold rounded-2xl inline-flex">
                    {session?.total_score}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  {member?.badge?.image ? (
                    <div className="justify-center">
                      <div className="mb-4 font-bold">{t('your_badge_is')}</div>
                      <div
                        className={`rounded-3xl px-6 py-4 bg-opacity-70 flex gap-2 lg:gap-8 items-center justify-center flex-wrap 
                        lg:flex-nowrap text-white ${badgeColor(
                          member?.badge?.name,
                          'color'
                        )}`}
                      >
                        <div>
                          <div className="font-bold  text-4xl text-start mb-1">
                            {member?.badge?.name}
                          </div>
                          <PrimaryButton
                            onClick={() =>
                              downloadImage(
                                '/storage/badges/' + member?.badge?.image
                              )
                            }
                            className={`text-xs !px-2 !py-1.5 mt-1 border-white border-2 ${badgeColor(
                              member?.badge?.name,
                              'color'
                            )}`}
                          >
                            {t('download_badge')}
                          </PrimaryButton>
                        </div>
                        <div className="bg-white w-[120px] h-[120px] rounded-full">
                          <img
                            className="max-h-[120px] ml-4"
                            src={'/storage/badges/' + member?.badge?.image}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">{t('not_eligible_badge')}</div>
                  )}
                </div>
              </div>
              <div className="flex justify-center lg:w-[60%] mx-auto gap-6 mt-12">
                <div className="bg-lightSecondary text-center p-4 lg:p-6 bg-opacity-50 rounded-lg border-secondary border-dashed border-2">
                  <h5 className=" font-bold text-lg mb-2">
                    {t('verify_badge')}
                  </h5>
                  <p>{t('verify_badge_text')}</p>
                  <PrimaryButton
                    as="link"
                    color="secondary"
                    href={route('member.assessment.verifyEmail', session.id)}
                    className="w-full flex justify-center mt-4"
                  >
                    {t('notify_us')}
                  </PrimaryButton>
                </div>
              </div>
            </div>
            <PrimaryButton
              as="link"
              href={route('member.dashboard')}
              className="w-full flex justify-center mt-6"
            >
              {t('back_to_dashboard')}
            </PrimaryButton>
          </div>
        ) : (
          <>
            <div className="text-center">{t('result_preview_assessment')}</div>
            <PrimaryButton
              as="link"
              href={route('member.dashboard')}
              className="w-full flex justify-center mt-6"
            >
              {t('back_to_dashboard')}
            </PrimaryButton>
          </>
        )}
      </AdminSection>
    </MemberLayout>
  );
}

export default AssessmentResult;
