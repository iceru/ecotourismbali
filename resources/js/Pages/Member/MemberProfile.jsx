import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import { useTranslation } from 'react-i18next';
import noImage from '../../../images/no-image.jpg';
import PrimaryButton from '@/Components/PrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightLong,
  faGlobe,
  faHome,
  faImage,
  faPen,
} from '@fortawesome/free-solid-svg-icons';

function MemberDashboard({ member }) {
  const { t } = useTranslation();
  return (
    <MemberLayout>
      <AdminSection>
        <h2 className="font-bold text-xl mb-4">{t('my_profile')}</h2>
        <PrimaryButton className="mb-6 flex items-center gap-2">
          {t('edit_profile')}
          <FontAwesomeIcon icon={faPen} />
        </PrimaryButton>
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center">
            <div>
              {member.image ? (
                <img
                  className="w-24 h-24 rounded-full mr-4"
                  src={member.image}
                  alt=""
                />
              ) : (
                <img
                  className="w-24 h-24 rounded-full mr-4"
                  src={noImage}
                  alt=""
                />
              )}
            </div>
            <div>
              <h3 className="font-bold text-lg">
                {member.name || 'Member Name'}
              </h3>
            </div>
          </div>
          <div>
            <PrimaryButton
              type="lightPrimary"
              className="flex gap-2 items-center"
            >
              {t('start_assessment')}
              <FontAwesomeIcon icon={faArrowRightLong} />
            </PrimaryButton>
          </div>
        </div>
        <div className="mb-10">
          {member?.member_slider ? (
            <div>Sliders</div>
          ) : (
            <div className="flex gap-2 text-gray-600 justify-center items-center p-6 py-12 border rounded-lg border-dashed border-gray-600">
              {t('add_slider')}
              <FontAwesomeIcon icon={faImage} />
            </div>
          )}
        </div>
        <div className="flex justify-around mb-10">
          <div>
            {member?.address ? (
              <div>{member.address}</div>
            ) : (
              <div className="flex gap-2 text-gray-600 justify-center items-center">
                {t('add_address')}
                <FontAwesomeIcon icon={faHome} />
              </div>
            )}
          </div>
          <div>
            {member?.website ? (
              <div>{member.website}</div>
            ) : (
              <div className="flex gap-2 text-gray-600 justify-center items-center">
                {t('add_website')}
                <FontAwesomeIcon icon={faGlobe} />
              </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          {member?.member_slider ? (
            <div>{t('add_description')}</div>
          ) : (
            <div className="flex gap-2 text-gray-600 justify-center items-center">
              {t('add_description')}
              <FontAwesomeIcon icon={faPen} />
            </div>
          )}
        </div>
      </AdminSection>
    </MemberLayout>
  );
}

export default MemberDashboard;
