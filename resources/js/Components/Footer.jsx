import moment from 'moment';
import React from 'react';

function Footer() {
  return (
    <div className="text-gray-500 pb-10 pt-16">
      <div className="flex justify-center mb-2">
        <div className="font-poppins mr-3 pr-3 border-r-gray-400 border-r">
          Terms & Conditions
        </div>
        <div className="font-poppins mr-3 pr-3 border-r-gray-400 border-r">
          Privacy Policy
        </div>
        <div className="font-poppins">FAQ</div>
      </div>
      <div className="text-primary tracking-wide uppercase mb-2 text-center font-neue text-2xl">
        Eco Tourism Bali {moment().format('YYYY')}
      </div>
      <div className="flex justify-center">
        <div className="hover:text-secondary mr-3 pr-3 border-r-gray-400 border-r">
          <a href="mailto:info@ecotourismbali.com" className="font-poppins">
            info@ecotourismbali.com
          </a>
        </div>
        <div className="hover:text-secondary">
          <a href="tel:+6281139800055" className="font-poppins">
            +62811 3980 0055
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
