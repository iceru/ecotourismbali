import Button from '@/Components/Button';
import Logo from '../../images/logo.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import AdminSection from '@/Components/AdminSection';
import { Head, Link, usePage } from '@inertiajs/react';
import enImg from '../../images/en.png';
import idImg from '../../images/id.png';
import { useMediaQuery } from 'react-responsive';
import Sidebar from '@/Components/Sidebar';

function AdminLayout({ children }) {
  const { t, i18n } = useTranslation();
  const { superadmin, auth } = usePage().props;
  const isDesktop = useMediaQuery({
    query: '(min-width: 1000px)',
  });

  const [sideActive, setSideActive] = useState(isDesktop);

  function changeLanguage(code) {
    if (i18n.language !== code) {
      i18n.changeLanguage(code);
    }
  }
  return (
    <div className="flex bg-lightSecondary gap-4 p-3 lg:gap-6 lg:p-6 min-h-screen bg-opacity-70">
      <Head title="Administrator" />
      <AdminSection
        className={`transition hidden fixed lg:static lg:transform-none left-0 top-0 z-10 h-screen w-screen lg:h-full ${
          !sideActive
            ? '-translate-x-[120%] hidden p-0 opacity-0'
            : 'translate-x-0 !block lg:block lg:w-1/4 p-4 lg:p-6 opacity-100'
        }`}
      >
        <Link href={route('member.list')} className="logo mb-12 block">
          <img src={Logo} alt="Eco Tourism Bali" />
        </Link>
        <div
          className="block lg:hidden absolute text-secondary right-6 top-6 text-2xl"
          onClick={() => setSideActive(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <Sidebar />
      </AdminSection>
      <div className={`${!sideActive ? 'w-full' : 'lg:w-3/4'}`}>
        <AdminSection className="flex items-center justify-between mb-6 px-6 py-4 flex-wrap">
          <div className="flex items-center order-2 lg:order-1 w-full justify-between lg:w-auto lg:justify-start">
            <Button
              color="lightSecondary"
              className="mr-4"
              onClick={() => setSideActive(!sideActive)}
            >
              <FontAwesomeIcon icon={faBars} className="mr-2" />
              {t('menu')}
            </Button>
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center cursor-pointer ${
                  i18n.language === 'en' ? 'font-bold text-secondary' : ''
                }`}
                onClick={() => changeLanguage('en')}
              >
                <div className="mr-2">
                  <img
                    src={enImg}
                    className="w-full object-contain h-full"
                    alt="English"
                  />
                </div>
                EN
              </div>
              <div className="text-xs">|</div>
              <div
                className={`flex cursor-pointer ${
                  i18n.language === 'id' ? 'font-bold text-secondary' : ''
                }`}
                onClick={() => changeLanguage('id')}
              >
                <div className="mr-2">
                  <img
                    src={idImg}
                    className="w-full object-contain h-full"
                    alt="Indonesia"
                  />
                </div>
                ID
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-between mb-4 lg:mb-0 lg:justify-start w-full lg:w-auto order-1 lg:order-2">
            <div>
              <h5>
                Hello, <strong>{auth.user.name}</strong>
              </h5>
              <div className="text-secondary">
                {superadmin ? 'Super Administrator' : 'Administrator'}
              </div>
            </div>
            <div>
              <Button
                as="link"
                color="danger"
                href={route('logout')}
                method="post"
              >
                {t('logout')}
              </Button>
            </div>
          </div>
        </AdminSection>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
