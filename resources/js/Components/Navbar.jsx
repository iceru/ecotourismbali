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

import Logo from '../../images/logo.png';

function Navbar() {
  const { i18n } = useTranslation();
  const [sidebar, setSidebar] = useState(false);
  const [about, setAbout] = useState(false);
  const [programs, setPrograms] = useState(false);
  const [tribe, setTribe] = useState(false);
  const [blog, setBlog] = useState(false);
  const { auth } = usePage().props;
  const { t } = useTranslation();
  const [openProducts, setOpenProducts] = useState(false);
  const { url } = usePage();

  return (
    <header className="py-2 bg-white">
      <nav className="flex bg-white justify-between items-center container px-3 pb-3 mx-auto">
        <div className="logo w-[136px]">
          <a href="https://ecotourismbali.com">
            <img src={Logo} alt="Eco Tourism Bali" className="h-14 lg:h-20" />
          </a>
        </div>
        <div>
          <ul className="hidden lg:flex gap-8 items-center text-primary">
            <li className="">
              <a href="https://ecotourismbali.com">Home</a>
            </li>
            <li className="">
              <a href="https://ecotourismbali.com/about">About</a>
            </li>
            <li className="">
              <button
                type="button"
                className="flex gap-1 items-center"
                onClick={() => setOpenProducts(!openProducts)}
              >
                Products & Events
                <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
              </button>
            </li>

            <div
              className={`bg-white top-[100px] absolute z-20  left-0 w-[98.7vw] h-fit transition shadow-md ${
                openProducts ? '' : 'hidden'
              }`}
              id="programs"
            >
              <div className="container flex justify-center gap-20 py-6">
                <div>
                  <a
                    className="text-primary text-2xl mb-3 block font-serif"
                    href="https://ecotourimbali.com/programs"
                  >
                    Products
                  </a>
                  <ul className="grid gap-2">
                    <li>
                      <a href="https://ecotourimbali.com/eco-climate-badge">
                        Eco Climate Badge
                      </a>
                    </li>
                    <li>
                      <a href="https://ecotourimbali.com/regenerative-bali">
                        Regenerative Bali
                      </a>
                    </li>
                    <li>
                      <a href="https://ecotourimbali.com/products#training">
                        Training & Consultancy
                      </a>
                    </li>
                    <li>
                      <a href="https://ecotourimbali.com/products#sustainable">
                        Sustainable Workshop Program
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-[1px] bg-gray-300"></div>
                <div>
                  <a href="https://ecotourimbali.com/events">
                    <h4 className="text-primary text-2xl mb-3 font-serif">
                      Events
                    </h4>
                  </a>
                  <ul className="grid gap-2">
                    <li>
                      <a href="https://ecotourimbali.com/events#etw">
                        Eco Tourism Week
                      </a>
                    </li>
                    <li>
                      <a href="https://ecotourimbali.com/events#calendar">
                        Calendar Events
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <li className="">
              <Link
                href={route('member.list')}
                className={url === '/directory' ? 'font-bold' : ''}
              >
                Directory
              </Link>
            </li>

            <li className="relative group">
              <span>Insights</span>
              <ul className="hidden absolute top-2 pt-8 group-hover:block hover:block">
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/blog/">{t('blog')}</a>
                </li>
                <li className="py-3 px-5 whitespace-nowrap hover:bg-gray-100 hover:text-primary bg-white">
                  <a href="https://ecotourismbali.com/news/">{t('news')}</a>
                </li>
              </ul>
            </li>
          </ul>
          <div onClick={() => setSidebar(true)} className="lg:hidden">
            <FontAwesomeIcon icon={faBars} className="text-3xl text-primary" />
          </div>
        </div>
        {auth?.user ? (
          <div className="flex items-center gap-3">
            {/* <Button color="altPrimary" className="!py-1 !px-3 text-sm">
              {t('cart')}
              <FontAwesomeIcon icon={faCartShopping} className="ml-2" />
            </Button> */}
            <div className="group relative capitalize">
              <div className="flex bg-primary text-white p-1 px-3 rounded text-sm">
                <div className=" font-bold group relative">
                  {auth?.user?.name}
                </div>
                <div className="ml-2">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
              <ul className="hidden absolute top-2 pt-8 group-hover:block hover:block z-10 shadow-lg">
                <Link
                  href={route('member.dashboard')}
                  className="w-full text-left py-3 px-5 block text-sm hover:bg-gray-100 hover:text-primary bg-white"
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
                  className="w-full text-left py-3 px-5 block text-sm bg-white hover:bg-red-600 hover:text-white text-red-600 "
                >
                  <li className=" whitespace-nowrap ">{t('logout')}</li>
                </Link>
              </ul>
            </div>
          </div>
        ) : (
          <Link href={route('member.dashboard')}>
            <li className="flex items-center gap-2 text-primary">
              <Link
                href="/register"
                className={url === '/register' ? 'font-bold' : ''}
              >
                Register
              </Link>
              <span>|</span>
              <Link
                href="/login"
                className={url === '/login' ? 'font-bold' : ''}
              >
                Sign In
              </Link>
            </li>
          </Link>
        )}
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
              {t('about')}
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
                <a href="https://ecotourismbali.com/programs/regenerative-bali/">
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
    </header>
  );
}

export default Navbar;
