import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faChevronDown,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
  faTiktok,
  faTwitterSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import TextInput from './TextInput';
import enImg from '../../images/en.png';
import idImg from '../../images/id.png';
import Logo from '../../images/logo.png';
import Pin from '../../images/pin-1.png';
import Email from '../../images/mail.png';

function Navbar() {
  const { i18n } = useTranslation();
  const [sidebar, setSidebar] = useState(false);
  const [about, setAbout] = useState(false);
  const [programs, setPrograms] = useState(false);
  const [tribe, setTribe] = useState(false);
  const [blog, setBlog] = useState(false);
  const { auth } = usePage().props;
  const { t } = useTranslation();

  function changeLanguage(code) {
    if (i18n.language !== code) {
      i18n.changeLanguage(code);
    }
  }
  return (
    <>
      <nav className="flex bg-white justify-between items-center container px-3 py-3 mx-auto">
        <div className="logo">
          <img src={Logo} alt="Eco Tourism Bali" className="w-[80px]" />
        </div>
        <div>
          <ul className="hidden lg:flex gap-8 uppercase text-[15px] text-[#b0b0b0] items-center">
            <li className="relative group">
              <span>About</span>
              <ul className="hidden absolute top-2 pt-8 group-hover:block hover:block">
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/about/climate-ambition/">
                    Climate Ambition
                  </a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/about/team/">Our Team</a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/about/partners/">
                    Partners
                  </a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/about/pillars/">
                    Pillars
                  </a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/about/etb-road-map/">
                    Road Map
                  </a>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <span>Programs</span>
              <ul className="hidden absolute top-2 pt-8 group-hover:block hover:block">
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/sustainable-verification/">
                    Sustainable Verification
                  </a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://joinetw.ecotourismbali.com/">
                    Eco Tourism Week
                  </a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/programs/regenarive-bali/">
                    Regenerative Bali
                  </a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/programs/workshop/">
                    Workshop
                  </a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/programs/consultation/">
                    Consulting
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <span>Eco Tourism Tribe</span>
              <ul className="hidden absolute top-2 pt-8 group-hover:block hover:block">
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white flex items-center w-full">
                  <img
                    src="https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_greenPAL_1-36x36.png"
                    width="36"
                    height="36"
                    className="mr-3"
                  />
                  <a href="https://ecotourismbali.com/tribe/community/">
                    Community
                  </a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white flex items-center">
                  <img
                    src="https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_greenforce_1-36x36.png"
                    className="mr-3"
                    width="36"
                    height="36"
                  />
                  <a href="https://ecotourismbali.com/tribe/member/">Member</a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white flex items-center">
                  <img
                    src="https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_earth_guard_1-36x36.png"
                    className="mr-3"
                    width="36"
                    height="36"
                  />
                  <a href="https://ecotourismbali.com/tribe/eco-tourism-partners/">
                    Partners
                  </a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white flex items-center w-full min-w-[230px]">
                  <img
                    src="https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_greenAvenger_1-36x36.png"
                    className="mr-3"
                    width="36"
                    height="36"
                  />
                  <a href="https://ecotourismbali.com/tribe/verified-member/">
                    Verified Members
                  </a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white flex items-center">
                  <img
                    src="https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_etb_ambass_1-36x36.png"
                    className="mr-3"
                    width="36"
                    height="36"
                  />
                  <a href="https://ecotourismbali.com/tribe/ambassadors/">
                    Ambassadors
                  </a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white flex items-center">
                  <img
                    src="https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_warrior_1-36x36.png"
                    className="mr-3"
                    width="36"
                    height="36"
                  />
                  <a href="https://ecotourismbali.com/tribe/warriors/">
                    Warriors
                  </a>
                </li>
              </ul>
            </li>
            <a href="https://ecotourismbali.com/sustainable-verification/">
              <li className="bg-primary text-white px-[10px] py-[5px] transition hover:bg-white hover:text-primary border hover:border-primary">
                Sustainable Verification
              </li>
            </a>
            <li className="relative group">
              <span>Blog and News</span>
              <ul className="hidden absolute top-2 pt-8 group-hover:block hover:block">
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/blog/">Blog</a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/news/">News</a>
                </li>
              </ul>
            </li>
            {auth?.user ? (
              <div className="group relative capitalize">
                <div className="flex text-primary">
                  <div className="mr-2">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className=" font-bold group relative">
                    {auth?.user?.name}
                  </div>
                </div>
                <ul className="hidden absolute top-2 pt-8 group-hover:block hover:block">
                  <Link
                    href={route('member.dashboard')}
                    className="w-full text-left py-3 px-5 block hover:bg-gray-100 hover:text-primary bg-white"
                  >
                    <li className=" whitespace-nowrap ">
                      {t('member_dashboard')}
                    </li>
                  </Link>
                  <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    type="button"
                    className="w-full text-left py-3 px-5 block hover:bg-red-600 hover:text-white text-red-600 "
                  >
                    <li className=" whitespace-nowrap ">{t('logout')}</li>
                  </Link>
                </ul>
              </div>
            ) : (
              <Link href={route('member.dashboard')}>
                <li className="flex text-primary">
                  <div className="mr-2">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div>Member Login</div>
                </li>
              </Link>
            )}
          </ul>
          <div onClick={() => setSidebar(true)} className="lg:hidden">
            <FontAwesomeIcon icon={faBars} className="text-3xl text-primary" />
          </div>
        </div>
      </nav>
      <div
        className={`bg-primary transition  text-white w-full h-full fixed z-40 top-0 left-0 p-6 pt-0 ${
          sidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-white flex justify-between items-center p-3 mb-12 -mx-6">
          <img src={Logo} alt="Eco Tourism Bali" className="w-[80px]" />
          <div onClick={() => setSidebar(false)}>
            <FontAwesomeIcon
              icon={faTimes}
              className="text-3xl text-primary cursor-pointer"
            />
          </div>
        </div>

        <ul className=" gap-8 flex flex-col uppercase text-[15px]">
          <li className="relative group">
            <span
              onClick={() => setAbout(!about)}
              className="cursor-pointer flex items-center"
            >
              About
              <FontAwesomeIcon className="ml-2 text-xs" icon={faChevronDown} />
            </span>
            <ul className={`${about ? 'block' : 'hidden'} pt-3 -mb-4`}>
              <li className="py-3 px-5 whitespace-nowrap ">
                <a href="https://ecotourismbali.com/about/climate-ambition/">
                  Climate Ambition
                </a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap ">
                <a href="https://ecotourismbali.com/about/team/">Our Team</a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap ">
                <a href="https://ecotourismbali.com/about/partners/">
                  Partners
                </a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap ">
                <a href="https://ecotourismbali.com/about/pillars/">Pillars</a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap ">
                <a href="https://ecotourismbali.com/about/etb-road-map/">
                  Road Map
                </a>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <span
              onClick={() => setPrograms(!programs)}
              className="cursor-pointer flex items-center"
            >
              Programs
              <FontAwesomeIcon className="ml-2 text-xs" icon={faChevronDown} />
            </span>
            <ul className={`${programs ? 'block' : 'hidden'} pt-3 -mb-4`}>
              <li className="py-3 px-5 whitespace-nowrap ">
                <a href="https://ecotourismbali.com/sustainable-verification/">
                  Sustainable Verification
                </a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap ">
                <a href="https://joinetw.ecotourismbali.com/">
                  Eco Tourism Week
                </a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap ">
                <a href="https://ecotourismbali.com/programs/regenarive-bali/">
                  Regenerative Bali
                </a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap ">
                <a href="https://ecotourismbali.com/programs/workshop/">
                  Workshop
                </a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap ">
                <a href="https://ecotourismbali.com/programs/consultation/">
                  Consulting
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span
              onClick={() => setTribe(!tribe)}
              className="cursor-pointer flex items-center"
            >
              Eco Tourism Tribe
              <FontAwesomeIcon className="ml-2 text-xs" icon={faChevronDown} />
            </span>
            <ul className={`${tribe ? 'block' : 'hidden'} pt-3 -mb-4`}>
              <li className="py-3 px-5 whitespace-nowrap  flex items-center w-full">
                <img
                  src="https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_greenPAL_1-36x36.png"
                  width="36"
                  height="36"
                  className="mr-3 brightness-0 transform invert"
                />
                <a href="https://ecotourismbali.com/tribe/community/">
                  Community
                </a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap  flex items-center">
                <img
                  src="https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_greenforce_1-36x36.png"
                  className="mr-3 brightness-0 transform invert"
                  width="36"
                  height="36"
                />
                <a href="https://ecotourismbali.com/tribe/member/">Member</a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap  flex items-center">
                <img
                  src="https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_earth_guard_1-36x36.png"
                  className="mr-3 brightness-0 transform invert"
                  width="36"
                  height="36"
                />
                <a href="https://ecotourismbali.com/tribe/eco-tourism-partners/">
                  Partners
                </a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap  flex items-center w-full min-w-[230px]">
                <img
                  src="https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_greenAvenger_1-36x36.png"
                  className="mr-3 brightness-0 transform invert"
                  width="36"
                  height="36"
                />
                <a href="https://ecotourismbali.com/tribe/verified-member/">
                  Verified Members
                </a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap  flex items-center">
                <img
                  src="https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_etb_ambass_1-36x36.png"
                  className="mr-3 brightness-0 transform invert"
                  width="36"
                  height="36"
                />
                <a href="https://ecotourismbali.com/tribe/ambassadors/">
                  Ambassadors
                </a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap  flex items-center">
                <img
                  src="https://ecotourismbali.com/wp-content/uploads/2022/11/Icon_warrior_1-36x36.png"
                  className="mr-3 brightness-0 transform invert"
                  width="36"
                  height="36"
                />
                <a href="https://ecotourismbali.com/tribe/warriors/">
                  Warriors
                </a>
              </li>
            </ul>
          </li>
          <a href="https://ecotourismbali.com/sustainable-verification/">
            <li className="">Sustainable Verification</li>
          </a>
          <li className="relative group">
            <span
              onClick={() => setBlog(!blog)}
              className="cursor-pointer flex items-center"
            >
              Blog And News
              <FontAwesomeIcon className="ml-2 text-xs" icon={faChevronDown} />
            </span>
            <ul className={`${blog ? 'block' : 'hidden'} pt-3 -mb-4`}>
              <li className="py-3 px-5 whitespace-nowrap ">
                <a href="https://ecotourismbali.com/blog/">Blog</a>
              </li>
              <li className="py-3 px-5 whitespace-nowrap ">
                <a href="https://ecotourismbali.com/news/">News</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
