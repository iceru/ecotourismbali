import PrimaryButton from '@/Components/PrimaryButton';
import Logo from '../../images/logo.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileClipboard,
  faHome,
  faLongArrowAltLeft,
  faPencilRuler,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link, usePage } from '@inertiajs/react';
import AdminSection from '@/Components/AdminSection';
import { useTranslation } from 'react-i18next';
import enImg from '../../images/en.png';
import idImg from '../../images/id.png';

function MemberLayout({ children, state }) {
  const { t, i18n } = useTranslation();
  const { url } = usePage();

  const [sideActive, setSideActive] = useState(true);

  function changeLanguage(code) {
    if (i18n.language !== code) {
      i18n.changeLanguage(code);
      setLanguage(code);
    }
  }
  return (
    <div className="flex bg-lightPrimary p-6 gap-6 min-h-screen">
      <AdminSection
        className={`transition ${
          !sideActive
            ? '-translate-x-[120%] hidden p-0 opacity-0'
            : 'translate-x-0 block lg:w-1/4 p-6 opacity-100'
        }`}
      >
        <div className="logo mb-12">
          <img src={Logo} alt="Eco Tourism Bali" />
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
      <div className={`${!sideActive ? 'w-screen' : 'w-3/4'}`}>
        <div className="flex justify-between items-center bg-white drop-shadow-admin rounded-2xl mb-6 px-6 py-4">
          <div className="flex items-center">
            <PrimaryButton
              type="lightPrimary"
              className="mr-4"
              onClick={() => setSideActive(!sideActive)}
            >
              <FontAwesomeIcon icon={faLongArrowAltLeft} className="mr-2" />
              {t('collapse')}
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
          <div className="flex gap-4 items-center">
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
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default MemberLayout;
