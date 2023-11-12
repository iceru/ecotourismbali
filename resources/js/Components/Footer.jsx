import moment from 'moment';
import React from 'react';

function Footer() {
  return (
    <div className="text-gray-500 pb-10 pt-16 px-4 lg:px-0">
      <div className="flex justify-center mb-2">
        <div className="font-poppins hover:text-secondary text-sm lg:text-base mr-3 pr-3 border-r-gray-400 border-r">
          <a href="https://ecotourismbali.com/terms-conditions/">
            Terms & Conditions
          </a>
        </div>
        <div className="font-poppins hover:text-secondary text-sm lg:text-base mr-3 pr-3 border-r-gray-400 border-r">
          <a href="https://ecotourismbali.com/privacy-policy/">
            Privacy Policy
          </a>
        </div>
        <div className="font-poppins hover:text-secondary">
          <a href="https://ecotourismbali.com/faq/">FAQ</a>
        </div>
      </div>
      <div className="text-primary tracking-wide uppercase mb-2 text-center font-neue text-2xl">
        Eco Tourism Bali {moment().format('YYYY')}
      </div>
      <div className="flex justify-center">
        <div className="hover:text-secondary text-sm lg:text-base mr-3 pr-3 border-r-gray-400 border-r">
          <a href="mailto:info@ecotourismbali.com" className="font-poppins">
            info@ecotourismbali.com
          </a>
        </div>
        <div className="hover:text-secondary text-sm lg:text-base">
          <a href="tel:+6281139800055" className="font-poppins">
            +62811 3980 0055
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
