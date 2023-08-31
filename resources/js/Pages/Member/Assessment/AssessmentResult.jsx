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

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import TitleSection from '@/Pages/Admin/Components/TitleSection';
import PrimaryButton from '@/Components/PrimaryButton';
import { badgeColor } from '@/Helper/BadgeColor';

import Certificate from '../../../../images/certificate.png';
import { toUpper } from 'lodash';
import moment from 'moment';

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

  return (
    <MemberLayout>
      {flash.success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl relative mb-3">
          <span className="inline">{flash.success}</span>
        </div>
      )}
      <AdminSection>
        <TitleSection title="assessment" className="mb-6" />
        <div className="font-bold text-primary mb-6"></div>

        <div className="mb-6 pb-6 border-b">
          <div className="text-2xl mb-1 font-bold text-primary">
            {t('congrats')}
          </div>
          <p className=" mb-3 text-lg font-bold text-primary">
            {t('finish_assessment')}
          </p>
          <p className="text-etbGray xxl:w-2/3">
            {t('finish_assessment_text')}
          </p>
        </div>
        {member?.status?.includes('active') ? (
          <>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="mb-4 lg:mb-0">
                <div className="mb-4">{t('your_assessment_scores')}&nbsp;</div>
                <div className="px-6 py-4 bg-lightPrimary text-3xl font-bold rounded-2xl inline-flex">
                  {session?.total_score}
                </div>
              </div>
              <div className="flex flex-col">
                {member?.badge?.image ? (
                  <div className="justify-center">
                    <div className="mb-4">{t('your_badge_is')}</div>
                    <div className="flex items-center flex-wrap lg:flex-nowrap">
                      <div>
                        <img
                          className="max-h-[120px] mr-4"
                          src={'/storage/badges/' + member?.badge?.image}
                          alt=""
                        />
                      </div>
                      <div>
                        <div
                          className={
                            'font-bold  text-2xl ' +
                            badgeColor(member?.badge?.name, 'text')
                          }
                        >
                          {member?.badge?.name}
                        </div>
                        <p>Badge</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">{t('not_eligible_badge')}</div>
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 mt-6">
              <div className="bg-orange-200 p-4 lg:p-6 bg-opacity-30 rounded-lg">
                <h5 className="text-center font-bold text-lg mb-2">
                  {t('self_certificate')}
                </h5>
                <p className="mb-4"> {t('self_certificate_text')}</p>
                <PDFDownloadLink
                  document={renderCertificate()}
                  fileName={`certificate_${
                    member.business_name
                  }_${Date.now()}.pdf`}
                  className="flex justify-center rounded-lg bg-orange-600 text-white fw-bold py-2 px-4"
                >
                  {({ loading }) => (loading ? t('loading') : t('download'))}
                </PDFDownloadLink>
              </div>
              <div className="bg-lightSecondary p-4 lg:p-6 bg-opacity-50 rounded-lg">
                <h5 className="text-center font-bold text-lg mb-2">
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
            <PrimaryButton
              as="link"
              href={route('member.dashboard')}
              className="w-full flex justify-center mt-6"
            >
              {t('back_to_dashboard')}
            </PrimaryButton>
          </>
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
