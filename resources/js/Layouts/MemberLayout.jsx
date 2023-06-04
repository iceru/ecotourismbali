import PrimaryButton from '@/Components/PrimaryButton';
import Logo from '../../images/logo.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileClipboard,
  faHome,
  faBars,
  faPencilRuler,
  faUser,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Link, usePage } from '@inertiajs/react';
import AdminSection from '@/Components/AdminSection';
import { useTranslation } from 'react-i18next';
import enImg from '../../images/en.png';
import idImg from '../../images/id.png';
import { useMediaQuery } from 'react-responsive';

function MemberLayout({ children, state }) {
  const { t, i18n } = useTranslation();
  const { url } = usePage();

  const isDesktop = useMediaQuery({
    query: '(min-width: 1000px)',
  });

  const [sideActive, setSideActive] = useState(isDesktop);

  function changeLanguage(code) {
    if (i18n.language !== code) {
      i18n.changeLanguage(code);
      setLanguage(code);
    }
  }
  return (
    <div className="flex bg-lightPrimary p-3 gap-4 lg:p-6 lg:gap-6 min-h-screen">
      <AdminSection
        className={`transition hidden fixed lg:static lg:transform-none left-0 top-0 z-10 h-screen w-screen lg:h-auto ${
          !sideActive
            ? '-translate-x-[120%] hidden p-0 opacity-0'
            : 'translate-x-0 !block lg:block lg:w-1/4 p-4 lg:p-6 opacity-100'
        }`}
      >
        <div className="logo mb-12">
          <img src={Logo} alt="Eco Tourism Bali" />
        </div>
        <div
          className="block lg:hidden absolute text-primary right-6 top-6 text-2xl"
          onClick={() => setSideActive(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <nav className="navigation text-etbGray">
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href={state === 'locked' ? '#' : route('member.dashboard')}
                className={
                  url.startsWith('/member/dashboard') ? 'font-bold' : ''
                }
              >
                <FontAwesomeIcon
                  className="fa-fw mr-2 text-primary"
                  icon={faHome}
                />
                {t('home')}
              </Link>
            </li>
            {state !== 'locked' && (
              <>
                <li>
                  <Link href="#">
                    <FontAwesomeIcon
                      className="fa-fw mr-2 text-primary"
                      icon={faUser}
                    />
                    {t('my_profile')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={route('member.assessment.index')}
                    className={
                      url.startsWith('/member/assessment') ? 'font-bold' : ''
                    }
                  >
                    <FontAwesomeIcon
                      className="fa-fw mr-2 text-primary"
                      icon={faPencilRuler}
                    />
                    {t('my_assessment')}
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon
                      className="fa-fw mr-2 text-primary"
                      icon={faFileClipboard}
                    />
                    {t('e_learning')}
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </AdminSection>
      <div className={`${!sideActive ? 'w-full' : 'lg:w-3/4'}`}>
        <AdminSection className="flex items-center justify-between mb-6 px-6 py-4 flex-wrap">
          <div className="flex items-center order-2 lg:order-1 w-full justify-between lg:w-auto lg:justify-start">
            <PrimaryButton
              type="lightPrimary"
              className="mr-4"
              onClick={() => setSideActive(!sideActive)}
            >
              <FontAwesomeIcon icon={faBars} className="mr-2" />
              {t('menu')}
            </PrimaryButton>
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center cursor-pointer ${
                  i18n.language === 'en' ? 'font-bold text-primary' : ''
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
                  i18n.language === 'id' ? 'font-bold text-primary' : ''
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
                Hello, <strong>Member 1</strong>
              </h5>
              <div className="text-primary text-sm font-semibold">Member</div>
            </div>
            <div>
              <PrimaryButton>{t('logout')}</PrimaryButton>
            </div>
          </div>
        </AdminSection>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default MemberLayout;
