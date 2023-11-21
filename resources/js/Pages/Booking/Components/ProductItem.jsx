import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/Components/Button';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import imageExample from '../../../../images/hotel_example.png';

function ProductItem() {
  const { t } = useTranslation();
  return (
    <section className="flex gap-6 mb-8 pb-8 last:border-none border-b border-gray-300">
      <div className="min-w-[30%]">
        <img className="w-full h-auto" src={imageExample} alt="" />
      </div>
      <div className="">
        <h3 className="font-bold text-xl mb-2">Como Hotels and Resorts Bali</h3>
        <div className="flex gap-2.5 items-center mb-2">
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faStar} className="text-gold" />
            <FontAwesomeIcon icon={faStar} className="text-gold" />
            <FontAwesomeIcon icon={faStar} className="text-gold" />
          </div>
          <div className="border-secondary border font-bold text-secondary rounded-md px-2 py-1">
            Rp450.000 / Night
          </div>
        </div>
        <div className="flex items-center text-primary gap-2 mb-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <div className="text-sm line-clamp-1">
            Echo Beach, Jl. Pantai Batu Mejan, Canggu, Kec. Kuta Utara,
            Kabupaten Badung, Bali 80361
          </div>
        </div>
        <p className="line-clamp-4 mb-3">
          Lorem ipsum dolor sit amet consectetur. Feugiat elementum cursus risus
          urna vivamus sed pretium ullamcorper. Enim lacus et nisi commodo
          dignissim dignissim justo.
        </p>
        <Button as="link" href="#" className="inline-flex">
          {t('learn_more')}
        </Button>
      </div>
    </section>
  );
}

export default ProductItem;
