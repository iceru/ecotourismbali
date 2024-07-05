import React, { useEffect, useRef, useState } from 'react';
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
  const [programs, setPrograms] = useState(false);
  const { auth } = usePage().props;
  const { t } = useTranslation();
  const [openProducts, setOpenProducts] = useState(false);
  const { url } = usePage();

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
                What We Offer
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
                  <div className="text-primary text-2xl mb-3 block font-serif">
                    What We Offer
                  </div>
                  <li>
                    <a href="https://ecotourimbali.com/eco-climate-badge">
                      Eco Climate Badge
                    </a>
                  </li>
                </div>
                <div className="w-[1px] bg-gray-300"></div>
                <div>
                  <div className="text-primary text-2xl mb-3 block font-serif">
                    Programs
                  </div>
                  <ul className="grid gap-2">
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

            <li className="">
              <a href="https://ecotourismbali.com/insights">Insights</a>
            </li>
          </ul>
          <div onClick={() => setSidebar(!sidebar)} className="lg:hidden">
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
          <li className="items-center gap-2 text-primary hidden lg:flex">
            <Link
              href="/register"
              className={url === '/register' ? 'font-bold' : ''}
            >
              Register
            </Link>
            <span>|</span>
            <Link href="/login" className={url === '/login' ? 'font-bold' : ''}>
              Sign In
            </Link>
          </li>
        )}
      </nav>
      <div
        className={`sidebar fixed overflow-auto top-0 left-0 w-[80vw] duration-500 flex flex-col justify-between h-screen transition bg-white z-40 p-6 ${
          sidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
        ref={sidebarRef}
      >
        <div class="mb-6">
          <div class="logo w-24 lg:w-32 mb-14">
            <a href="/" class="">
              <img class="h-16 lg:h-20" src={Logo} alt="Eco Tourism Bali" />
            </a>
          </div>
          <nav>
            <ul class="flex flex-col  gap-6">
              <li>
                <a class="menulinks" href="/">
                  Home
                </a>
              </li>
              <li>
                <a class="menulinks" href="/about/">
                  About
                </a>
              </li>
              <li>
                <button
                  type="button"
                  class="flex items-center gap-1 sideservice"
                  onClick={() => setPrograms(!programs)}
                >
                  What We Offer
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-xs ml-1"
                  />
                </button>
                <div class={`pl-4 mt-4 ${programs ? '' : 'hidden'}`}>
                  <ul class="grid gap-4 mb-4 pb-4 border-b border-gray-100">
                    <li class="text-primary font-bold">What We Offer</li>
                    <li>
                      <a href="/eco-climate-badge">Eco Climate Badge</a>
                    </li>
                  </ul>
                  <ul class="grid gap-4 mb-4 pb-4 border-b border-gray-100">
                    <li>
                      <a href="/products" class="text-primary font-bold">
                        Products
                      </a>
                    </li>
                    <li>
                      <a href="/regenerative-bali">Regenerative Bali</a>
                    </li>
                    <li>
                      <a href="/products#training">Training & Consultancy</a>
                    </li>
                    <li>
                      <a href="/products#sustainable">
                        Sustainable Event Management
                      </a>
                    </li>
                  </ul>
                  <ul class="grid gap-4">
                    <li>
                      <a href="/events" class="text-primary font-bold">
                        Events
                      </a>
                    </li>
                    <li>
                      <a href="/events#etw">Eco Tourism Week</a>
                    </li>
                    <li>
                      <a href="/events#calendar">Event Calendar</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  class="menulinks"
                  href="https://member.ecotourismbali.com/directory"
                >
                  Directory
                </a>
              </li>
              <li>
                <a class="menulinks" href="/insights/">
                  Insights
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="gap-3 flex text-primary">
          <a
            href="https://member.ecotourismbali.com/register"
            class="whitespace-nowrap"
          >
            Register
          </a>
          <span>|</span>
          <a
            href="https://member.ecotourismbali.com/login"
            class=" whitespace-nowrap"
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
