import Logo from '../../../../images/logo.png';

import {
  Document,
  Image,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
  View,
  Font,
  Link,
} from '@react-pdf/renderer';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

export default function ResultPdf({ scores, member, session }) {
  const { t } = useTranslation();

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
    climate: {
      marginBottom: '16px',
      fontSize: '12px',
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
      gap: '16px',
    },
    scoreItem: {
      width: '45%',
    },

    titleLogo: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    scoreLogo: {
      marginRight: '6px',
      width: '30px',
      height: '30px',
      objectFit: 'contain',
    },
    scoreTitle: {
      fontSize: '10px',
      fontWeight: 500,
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
          <Text style={style?.climate}>
            Members who have completed the self-assessment on the Eco Tourism
            Bali platform are eligible to apply for the Climate Friendly Travel
            Commitment. Please click this link:
            <Link src="https://climatefriendly.travel/resources/Registration/index.php">
              https://climatefriendly.travel/resources/Registration/index.php
            </Link>
          </Text>
          <View>
            <Text style={style?.business}>{member?.business_name}</Text>
          </View>
          <View style={style?.results}>
            <View style={style?.scoreWrapper}>
              <Text style={style?.resultText}>Total Score:</Text>
              <Text style={style?.score}>{session?.total_score}</Text>
            </View>
          </View>
          <View style={style?.scoreListTitle}>
            <Text>Component's Score</Text>
          </View>
          <View style={style?.scoreList}>
            {scores.map(score => {
              return (
                <View style={style?.scoreItem}>
                  <View style={style?.titleLogo}>
                    <Image
                      src={'/storage/assessments/' + score?.assessment?.logo}
                      style={style?.scoreLogo}
                    ></Image>
                    <Text style={style?.scoreTitle}>
                      {score?.assessment?.title_en}
                    </Text>
                  </View>
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

  return (
    <PDFDownloadLink
      document={renderResult()}
      fileName={`result_${member.business_name}_${Date.now()}.pdf`}
      className="flex justify-center rounded-lg bg-lightPrimary mx-auto mt-4 border-2 border-primary text-primary font-bold hover:bg-primary transition hover:text-white fw-bold py-2 px-4"
    >
      {({ loading }) => (loading ? t('loading') : t('download_result'))}
    </PDFDownloadLink>
  );
}
