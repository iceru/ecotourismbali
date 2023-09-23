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
  Font,
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
import Logo from '../../../../images/logo.png';

function AssessmentResult({ session, member, scores, expiredDate }) {
  const { t } = useTranslation();
  const { flash } = usePage().props;

  useEffect(() => {
    localStorage.clear('assessment');
  }, []);

  Font.register({
    family: 'Inter',
    fonts: [
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.ttf',
        fontWeight: 100,
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZhrib2Bg-4.ttf',
        fontWeight: 200,
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZhrib2Bg-4.ttf',
        fontWeight: 300,
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf',
        fontWeight: 400,
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf',
        fontWeight: 500,
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf',
        fontWeight: 600,
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf',
        fontWeight: 700,
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf',
        fontWeight: 800,
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYMZhrib2Bg-4.ttf',
        fontWeight: 900,
      },
    ],
  });

  const style = StyleSheet.create({
    wrapper: {
      padding: '16px',
      fontSize: '16px',
      fontFamily: 'Inter',
      fontWeight: 300,
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '24px',
      justifyContent: 'space-between',
    },
    logoWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    date: {
      fontSize: '14px',
    },
    logo: {
      width: '60px',
    },
    textHeader: {
      marginLeft: '12px',
    },
    text1: {
      fontSize: '14px',
      fontWeight: 700,
      color: '#1F656C',
      marginBottom: '2px',
    },
    textInfo: {
      fontSize: '12px',
    },
    info: {
      fontSize: '12px',
      padding: '16px',
      borderRadius: '16px',
      color: '#1F656C',
      marginBottom: '16px',
      backgroundColor: '#D2E0E2',
    },
    business: {
      textAlign: 'center',
      fontWeight: 700,
      marginBottom: '16px',
      fontSize: '24px',
      paddingBottom: '16px',
      borderBottom: '1px solid lightgray',
    },
    results: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      textAlign: 'center',
      marginBottom: '32px',
    },
    scoreWrapper: {
      marginRight: '0',
      paddingRight: '32px',
      borderRight: '1px solid lightgray',
    },
    badges: {
      marginLeft: '0',
      paddingLeft: '32px',
    },
    score: {
      fontSize: '48px',
      color: '#1F656C',
      fontWeight: 700,
    },
    resultText: {
      fontWeight: 600,
      fontSize: '14px',
    },
    badgeWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '8px',
    },
    badgeName: {
      fontWeight: 700,
      fontSize: '20px',
    },
    badgeText: {
      fontSize: '14px',
    },
    badgeImage: {
      height: '60px',
      width: 'auto',
      marginRight: '10px',
    },
    scoreList: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    scoreItem: {
      width: '45%',
      marginBottom: '24px',
      marginRight: '24px',
    },
    scoreTitle: {
      fontSize: '10px',
      fontWeight: 700,
    },
    scoreListTitle: {
      marginBottom: '16px',
    },
    scoreText: {
      fontSize: '14px',
      marginTop: '4px',
    },
    scoreNum: {
      fontWeight: 700,
      color: '#1F656C',
    },
    scoreImage: {
      width: '100%',
      height: 'auto',
      marginBottom: '4px',
    },
  });

  const renderResult = () => (
    <Document>
      <Page size="A4" orientation="portrait">
        <View style={style?.wrapper}>
          <View style={style?.header}>
            <View style={style?.logoWrapper}>
              <Image src={Logo} style={style?.logo}></Image>
              <View style={style?.textHeader}>
                <Text style={style?.text1}>Self Assessment</Text>
                <Text>Eco Tourism Bali</Text>
              </View>
            </View>
            <View>
              <Text style={style?.date}>
                {moment(session.created_at).format('LL')}
              </Text>
            </View>
          </View>
          <View style={style?.info}>
            <Text style={style?.textInfo}>{t('finish_assessment_text')}</Text>
          </View>
          <View>
            <Text style={style?.business}>{member?.business_name}</Text>
          </View>
          <View style={style?.results}>
            <View style={style?.scoreWrapper}>
              <Text style={style?.resultText}>Total Score:</Text>
              <Text style={style?.score}>{session?.total_score}</Text>
            </View>
            <View style={style?.badges}>
              <Text style={style?.resultText}>Badge Result:</Text>
              <View style={style?.badgeWrapper}>
                <Image
                  src={'/storage/badges/' + member?.badge?.image}
                  style={style?.badgeImage}
                ></Image>
                <View>
                  <Text style={style?.badgeName}>{member?.badge?.name}</Text>
                  <Text style={style?.badgeText}>Badge</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={style?.scoreListTitle}>
            <Text>Component's Score</Text>
          </View>
          <View style={style?.scoreList}>
            {scores.map(score => {
              return (
                <View style={style?.scoreItem}>
                  <Text style={style?.scoreTitle}>
                    {score?.assessment?.title_en}
                  </Text>
                  <Text style={style?.scoreText}>
                    Score:{' '}
                    <Text style={style?.scoreNum}>{score?.score} Points</Text>
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </Page>
    </Document>
  );

  const downloadImage = url => {
    saveAs(url, 'badge.png');
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
                  <PDFDownloadLink
                    document={renderResult()}
                    fileName={`result_${
                      member.business_name
                    }_${Date.now()}.pdf`}
                    className="flex justify-center rounded-lg bg-lightPrimary lg:w-[60%] mx-auto mt-4 border-2 border-primary text-primary font-bold hover:bg-primary transition hover:text-white fw-bold py-2 px-4"
                  >
                    {({ loading }) =>
                      loading ? t('loading') : t('download_result')
                    }
                  </PDFDownloadLink>
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
              className="w-full flex justify-center mt-6 relative z-5"
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
