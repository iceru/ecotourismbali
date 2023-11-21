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
          <Button color="altPrimary">
            <div className="mr-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_415_1414)">
                  <path
                    d="M12.048 7.87289H12.5708C12.9404 7.87391 13.3065 7.80159 13.648 7.66014C13.9894 7.51869 14.2994 7.31091 14.56 7.04883L17.4375 4.14844L16.6563 3.36094L13.718 6.2993L13.1073 5.68863L16.0457 2.74992L15.2371 1.96559L12.3096 4.8927L11.7007 4.28203L14.6391 1.34332L13.8516 0.5625L10.9512 3.44004C10.6891 3.70068 10.4813 4.01072 10.3398 4.35222C10.1984 4.69372 10.1261 5.0599 10.1271 5.42953V5.95195L8.61082 7.46824L1.6875 0.5625C0.130782 2.49152 1.05012 6.03668 2.80266 7.78957L5.80852 10.7954C6.74191 11.7288 6.92719 11.8121 7.98609 11.3861C8.21426 11.2943 8.29723 11.3045 8.50992 11.5168L8.96695 11.9433C9.06996 12.0487 9.07242 12.0797 9.07242 12.2815V12.4762C9.07242 13.2173 9.54633 13.6434 9.85852 13.9613L13.5 17.4375L16.0312 14.9062L10.5318 9.38918L12.048 7.87289Z"
                    fill="#1F656C"
                  />
                  <path
                    d="M12.048 7.87289H12.5708C12.9404 7.87391 13.3065 7.80159 13.648 7.66014C13.9894 7.51869 14.2994 7.31091 14.56 7.04883L17.4375 4.14844L16.6563 3.36094L13.718 6.2993L13.1073 5.68863L16.0457 2.74992L15.2371 1.96559L12.3096 4.8927L11.7007 4.28203L14.6391 1.34332L13.8516 0.5625L10.9512 3.44004C10.6891 3.70068 10.4813 4.01072 10.3398 4.35222C10.1984 4.69372 10.1261 5.0599 10.1271 5.42953V5.95195L8.61082 7.46824L1.6875 0.5625C0.130782 2.49152 1.05012 6.03668 2.80266 7.78957L5.80852 10.7954C6.74191 11.7288 6.92719 11.8121 7.98609 11.3861C8.21426 11.2943 8.29723 11.3045 8.50992 11.5168L8.96695 11.9433C9.06996 12.0487 9.07242 12.0797 9.07242 12.2815V12.4762C9.07242 13.2173 9.54633 13.6434 9.85852 13.9613L13.5 17.4375L16.0312 14.9062L10.5318 9.38918L12.048 7.87289Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M7.99348 12.466C6.94512 12.6808 6.30211 12.8788 5.0727 11.6494C5.05301 11.6297 5.03262 11.6107 5.01293 11.591L4.32738 10.9055L0.5625 14.625L3.375 17.4375L8.4375 12.375L7.99348 12.466Z"
                    fill="#1F656C"
                  />
                  <path
                    d="M7.99348 12.466C6.94512 12.6808 6.30211 12.8788 5.0727 11.6494C5.05301 11.6297 5.03262 11.6107 5.01293 11.591L4.32738 10.9055L0.5625 14.625L3.375 17.4375L8.4375 12.375L7.99348 12.466Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_415_1414">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
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
