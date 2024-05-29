import moment from 'moment';
import React from 'react';
import Wave from '../../images/wave.png';
import Logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import enImg from '../../images/en.png';
import idImg from '../../images/id.png';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

function Footer() {
  const { changeLanguage, language } = i18n;
  const { t } = useTranslation();
  function changeLang(code) {
    if (language !== code) {
      changeLanguage(code);
    }
  }

  return (
    <footer className="pt-16">
      <div>
        <img src={Wave} className="w-full object-cover" alt="" />
      </div>
      <section className="bg-primary">
        <div className="grid lg:grid-cols-2 gap-12 container py-8">
          <div>
            <h5 className="font-sans text-xl mb-2 font-bold text-white">
              {t('newsletter')}
            </h5>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
              <div>
                <input
                  type="text"
                  placeholder={t('your_email')}
                  className="p-2 min-w-[300px]"
                />
              </div>
              <div>
                <button className="px-4 py-2 text-white bg-secondary">
                  {t('sign_up')}
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white">{t('newsletter_text')}</p>
          </div>
        </div>
      </section>
      <section className="container flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between py-12 text-primary">
        <div className="flex gap-8 flex-col lg:flex-row">
          <div>
            <img className="w-14" src={Logo} alt="Eco Tourism Bali" />
          </div>
          <div>
            <h6 className="font-bold mb-2 text-lg">Eco Tourism Bali</h6>
            <p className="mb-2">
              Jalan Srirama Gang. Kayumanis III <br />
              No. 6, Second Floor <br />
              Bali, Indonesia 80361 <br />
            </p>
            <div className="flex gap-2.5 items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:info@ecotourismbali.com">
                info@ecotourismbali.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <h6 className="font-bold mb-4 text-lg">Links</h6>
          <ul>
            <li className="mb-4">
              <a href="#">Terms & Condition</a>
            </li>
            <li className="mb-4">
              <a href="#">Privacy & Policy</a>
            </li>
            <li className="mb-4">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-4 text-lg">{t('social_media')}</h6>
          <ul>
            <li className="mb-4 flex items-center gap-3">
              <FontAwesomeIcon icon={faYoutube} />
              <a href="#">Youtube</a>
            </li>
            <li className="mb-4 flex items-center gap-3">
              <FontAwesomeIcon icon={faInstagram} />
              <a href="#">Instagram</a>
            </li>
            <li className="mb-4 flex items-center gap-3">
              <FontAwesomeIcon icon={faFacebook} />
              <a href="#">Facebook</a>
            </li>
            <li className="mb-4 flex items-center gap-3">
              <FontAwesomeIcon icon={faLinkedin} />
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold mb-4 text-lg">{t('language')}</h6>
          <div
            onClick={() => changeLang('en')}
            className={`flex items-center cursor-pointer gap-2 mb-4 ${
              language === 'en' ? 'font-bold' : ''
            }`}
          >
            <img src={enImg} alt="" />
            <span>English</span>
          </div>
          <div
            onClick={() => changeLang('id')}
            className={`flex items-center cursor-pointer gap-2 mb-4 ${
              language === 'id' ? 'font-bold' : ''
            }`}
          >
            <img className="w-[23px]" src={idImg} alt="" />
            <span>Bahasa Indonesia</span>
          </div>
        </div>
      </section>

      <section className="bg-primary py-3">
        <div className="container text-center text-white font-bold">
          &copy; Eco Tourism Bali - {moment().format('YYYY')}
        </div>
      </section>
    </footer>
  );
}

export default Footer;
