import React, { useEffect, useState } from 'react';
import Guest from '@/Layouts/GuestLayout';
import { useTranslation } from 'react-i18next';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import Button from '@/Components/Button';
import { Head, Link, router } from '@inertiajs/react';
import { badgeColor } from '@/Helper/BadgeColor';
import Pagination from '@/Components/Pagination';
import queryString from 'query-string';
import TitlePage from '@/Components/TitlePage';
import Filter from './Components/Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBowlRice,
  faBox,
  faCodeFork,
  faHotel,
  faSpoon,
} from '@fortawesome/free-solid-svg-icons';
import ProductItem from './Components/ProductItem';

import iconRes from '../../../images/icon-res.svg';

function HotelList({ programs, categories, badges, members }) {
  const sorts = [
    {
      label: 'Name - Ascending',
      value: 'name-ascending',
    },
    {
      label: 'Name - Descending',
      value: 'name-descending',
    },
  ];

  const { t } = useTranslation();
  const [category, setCategory] = useState('all');
  const [program, setProgram] = useState();
  const [badge, setBadge] = useState();
  const [keyword, setKeyword] = useState();
  const [sort, setSort] = useState(sorts[0].value);
  const [payload, setPayload] = useState({});

  // const filterData = () => {
  //   const value = {
  //     ...payload,
  //     program: program || null,
  //     badge: badge || null,
  //     keyword,
  //     category,
  //   };
  //   setPayload(value);
  //   router.post(
  //     route(
  //       'member.filter',
  //       Object.fromEntries(Object.entries(value).filter(([_, v]) => v != null))
  //     ),
  //     value
  //   );
  // };
  // const qs = queryString.parse(location.search);

  // useEffect(() => {
  //   const filterObject = {
  //     min: qs.min,
  //     max: qs.max,
  //     keyword: qs.keyword,
  //     stars: qs.stars,
  //   };

  //   if (qs.category && qs.category !== 'all') {
  //     setCategory(qs.category);
  //   }

  //   qs.program && setProgram(qs.program);
  //   qs.badge && setBadge(qs.badge);
  //   qs.keyword && setKeyword(qs.keyword);

  //   if (!qs.page) {
  //     setTimeout(() => {
  //       router.post(
  //         route(
  //           'member.filter',
  //           Object.fromEntries(
  //             Object.entries(filterObject).filter(([_, v]) => v != null)
  //           )
  //         ),
  //         filterObject
  //       );
  //     }, 1000);
  //   }
  // }, []);

  // const changeCategory = cat => {
  //   const value = {
  //     ...payload,
  //     category: cat,
  //   };
  //   setCategory(cat);
  //   router.post(route('member.filter', { category: category }), value);
  // };

  // const changeSort = data => {
  //   const value = {
  //     ...payload,
  //     sort: data,
  //   };
  //   setSort(data);
  //   router.post(route('member.filter'), value);
  // };

  return (
    <Guest>
      <Head title="Hotel List" />
      <TitlePage title="hotel_bookings" />
      <div className="flex flex-wrap justify-between mb-6 pb-6 border-b">
        <div className="mb-6 lg:mb-0 lg:pr-4 flex items-end gap-2">
          <Button color="primary">
            <FontAwesomeIcon icon={faHotel} className="mr-2" /> {t('hotel')}
          </Button>
          <Button color="altPrimary" className="group">
            <div className="mr-2">
              <img
                src={iconRes}
                className="group-hover:brightness-0 group-hover:invert"
                alt=""
              />
            </div>
            {t('restaurant')}
          </Button>
          <Button color="altPrimary">
            <FontAwesomeIcon className="mr-2" icon={faBox} />
            {t('product')}
          </Button>
        </div>
        <div className="flex justify-center items-end gap-2">
          <Button color="secondary">{t('list_items')}</Button>
          <Button color="altSecondary">{t('maps')}</Button>
        </div>
        <div>
          <div className="ml-auto flex items-center gap-4">
            <div className="font-bold text-lg inline-flex">{t('sort')}</div>
            <div className="flex">
              <div className="flex items-center">
                <SelectInput
                  options={sorts}
                  onChange={e => changeSort(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="sidebar w-full lg:w-1/5">
          <Filter />
        </div>
        <div className="lg:w-4/5 lg:pl-6">
          <div className="grid h-fit">
            {Array(1, 2, 3, 4, 5).map(() => {
              return <ProductItem />;
            })}
          </div>
          <Pagination class="mt-6" links={members?.links} />
        </div>
      </div>
    </Guest>
  );
}

export default HotelList;
