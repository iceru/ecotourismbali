import { Link } from '@inertiajs/react';
import Logo from '../../images/logo.png';
import Pin from '../../images/pin-1.png';
import Email from '../../images/mail.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
  faTiktok,
  faTwitterSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import TextInput from './TextInput';
import { useTranslation } from 'react-i18next';
import enImg from '../../images/en.png';
import idImg from '../../images/id.png';

function Navbar() {
  const { i18n } = useTranslation();

  function changeLanguage(code) {
    if (i18n.language !== code) {
      i18n.changeLanguage(code);
    }
  }
  return (
    <>
      {/* <div className="border border-gray-400">
        <div className="container flex justify-between py-[7px]">
          <div className="flex items-center text-[#b0b0b0] text-[12px]">
            <div className="flex mr-6 items-center">
              <img src={Pin} className="h-[21px] mr-[5px]" />
              Bali, Indonesia
            </div>
            <div className="flex items-center">
              <img src={Email} className="h-[9px] mr-[5px]" />
              info@ecotourismbali.com
            </div>
          </div>
          <div className="flex justify-end">
            <TextInput
              placeholder="Search"
              className="text-[12px] px-3 py-[4px]"
            />
            <div className="flex items-center text-[12px] ml-4">
              <div className="mr-1 text-[#545454]">Language</div>
              <div
                className={`flex items-center cursor-pointer`}
                onClick={() => changeLanguage('en')}
              >
                <div className="mr-2">
                  <img
                    src={enImg}
                    className="w-full object-contain h-[10px]"
                    alt="English"
                  />
                </div>
              </div>
              <div
                className={`flex items-center cursor-pointer `}
                onClick={() => changeLanguage('id')}
              >
                <div className="mr-2">
                  <img
                    src={idImg}
                    className="w-full object-contain h-[11px]"
                    alt="Indonesia"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center ml-4">
              <a href="" className="block">
                <FontAwesomeIcon
                  className="text-[20px] px-[5px] text-[#a1a1a1]"
                  icon={faYoutube}
                />
              </a>
              <a href="" className="block">
                <FontAwesomeIcon
                  className="text-[20px] px-[5px] text-[#a1a1a1]"
                  icon={faInstagramSquare}
                />
              </a>
              <a href="" className="block">
                <FontAwesomeIcon
                  className="text-[20px] px-[5px] text-[#a1a1a1]"
                  icon={faTiktok}
                />
              </a>
              <a href="" className="block">
                <FontAwesomeIcon
                  className="text-[20px] px-[5px] text-[#a1a1a1]"
                  icon={faFacebook}
                />
              </a>
              <a href="" className="block">
                <FontAwesomeIcon
                  className="text-[20px] px-[5px] text-[#a1a1a1]"
                  icon={faTwitterSquare}
                />
              </a>
              <a href="" className="block">
                <FontAwesomeIcon
                  className="text-[20px] px-[5px] text-[#a1a1a1]"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <nav className="flex bg-white justify-between items-center container px-3 py-3 mx-auto">
        <div className="logo">
          <img src={Logo} alt="Eco Tourism Bali" className="w-[80px]" />
        </div>
        <div>
          <ul className="flex gap-6 uppercase text-[15px] text-[#b0b0b0] items-center">
            <Link href="#">
              <li>About</li>
            </Link>
            <Link href="#">
              <li>Programs</li>
            </Link>
            <Link href="#">
              <li>Eco Tourism Tribe</li>
            </Link>
            <Link href="#">
              <li className="bg-primary text-white px-[10px] py-[5px]">
                Sustainable Verification
              </li>
            </Link>
            <Link href="#">
              <li>Blog and News</li>
            </Link>
            <Link href="#">
              <li>Member Login</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
