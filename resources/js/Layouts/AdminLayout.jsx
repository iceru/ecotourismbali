import PrimaryButton from '@/Components/PrimaryButton';
import Logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileClipboard,
  faHome,
  faLongArrowAltLeft,
  faPencilRuler,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import AdminSection from '@/Components/AdminSection';

function AdminLayout({ children }) {
  const { t } = useTranslation();
  return (
    <div className="flex bg-lightSecondary p-6 gap-6 min-h-screen">
      <AdminSection addClass="hidden lg:block lg:w-1/4">
        <div className="logo mb-12">
          <img src={Logo} alt="Eco Tourism Bali" />
        </div>
        <nav className="navigation text-etbGray">
          <ul className="grid gap-6">
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="fa-fw mr-2 text-secondary"
                  icon={faHome}
                />
                {t('home')}
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="fa-fw mr-2 text-secondary"
                  icon={faUsers}
                />
                {t('member')}
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="fa-fw mr-2 text-secondary"
                  icon={faPencilRuler}
                />
                {t('assessment')}
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="fa-fw mr-2 text-secondary"
                  icon={faFileClipboard}
                />
                {t('module_test')}
              </a>
            </li>
          </ul>
        </nav>
      </AdminSection>
      <div className="w-3/4">
        <div className="flex justify-between items-center bg-white drop-shadow-admin rounded-2xl mb-6 px-6 py-4">
          <div>
            <PrimaryButton>
              <FontAwesomeIcon icon={faLongArrowAltLeft} className="mr-2" />
              {t('collapse')}
            </PrimaryButton>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <h5>
                Hello, <strong>Admin</strong>
              </h5>
              <div className="text-secondary">Administrator</div>
            </div>
            <div>
              <PrimaryButton>{t('logout')}</PrimaryButton>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
