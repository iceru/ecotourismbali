import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthImage from '@/Components/AuthImage';
import { useTranslation } from 'react-i18next';

import RegisImage from '../../../images/regisImage.jpg';
import greenforce from '../../../images/green_force.png';
import greenpal from '../../../images/greenpal.png';
import SelectInput from '@/Components/SelectInput';
import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Register({ programs }) {
  const parsed = queryString.parse(location.search);
  const [toggle, setToggle] = useState(true);
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    business_name: '',
    password_confirmation: '',
    subscribed: true,
    program: programs[parsed?.tribe === 'greenpal' ? 1 : 0].id,
  });
  const { t } = useTranslation();

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit = e => {
    e.preventDefault();

    post(route('register'));
  };

  return (
    <GuestLayout>
      <Head title="Register" />
      <div className="grid lg:grid-cols-2">
        <div className="hidden lg:block relative mr-12">
          <div className="bg-black w-full h-full opacity-70 absolute left-0 top-0 z-[5] rounded-xl"></div>
          <div className="h-full absolute left-0 top-0">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={RegisImage}
              alt=""
            />
          </div>
          <section className="p-8 text-white relative z-10">
            <button
              onClick={() => setToggle(!toggle)}
              className="text-xl lg:text-2xl whitespace-nowrap gap-2 flex items-center font-bold mb-6"
            >
              Why Join ETB Membership?
              <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
            </button>
            <div className={`mt-4 ${!toggle ? 'hidden' : 'block'}`}>
              <div className="grid 2 gap-6">
                <div className="flex gap-2.5">
                  <div className="h-9 w-9 rounded-full font-serif text-lg flex-shrink-0 text-white flex justify-center items-center bg-primary">
                    1
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-1">
                      International Standard of Sustainability
                    </p>
                    <p>
                      Verification service customized to Bali's local context.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2.5" data-aos-delay="300">
                  <div className="h-9 w-9 rounded-full font-serif text-lg flex-shrink-0 text-white flex justify-center items-center bg-primary">
                    2
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-1">Affordable</p>
                    <p>Affordable cost with many benefits and added value</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className="h-9 w-9 rounded-full font-serif text-lg flex-shrink-0 text-white flex justify-center items-center bg-primary">
                    3
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-1">
                      Contributing to Local Supply Chain
                    </p>
                    <p>
                      Drive positive impact to Social, Economy and Cultural
                      benefits.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2.5" data-aos-delay="300">
                  <div className="h-9 w-9 rounded-full font-serif text-lg flex-shrink-0 text-white flex justify-center items-center bg-primary">
                    4
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-1">Regular Updates</p>
                    <p>Regular Updates on Sustainable Practices</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className="h-9 w-9 rounded-full font-serif text-lg flex-shrink-0 text-white flex justify-center items-center bg-primary">
                    5
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-1">
                      Search and Filter Capabilities
                    </p>
                    <p></p>
                  </div>
                </div>
                <div className="flex gap-2.5" data-aos-delay="300">
                  <div className="h-9 w-9 rounded-full font-serif text-lg flex-shrink-0 text-white flex justify-center items-center bg-primary">
                    6
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-1">
                      Event and Collaboration Spaces
                    </p>
                    <p></p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className="h-9 w-9 rounded-full font-serif text-lg flex-shrink-0 text-white flex justify-center items-center bg-primary">
                    7
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-1">
                      Contributing to Nature Restoration{' '}
                    </p>
                    <p>
                      Contributing to nature restoration and preservation
                      through the Regenerative Bali Program
                    </p>
                  </div>
                </div>
                <div className="flex gap-2.5" data-aos-delay="300">
                  <div className="h-9 w-9 rounded-full font-serif text-lg flex-shrink-0 text-white flex justify-center items-center bg-primary">
                    8
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-1">
                      Data Analytics and Reporting
                    </p>
                    <p>
                      Businesses can access analytics and reports to track their
                      sustainability goals, monitor the impact of their supply
                      chain choices, and make data-driven decisions for
                      continual improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className="mb-8">
            <h3 className="font-bold text-2xl mb-3">{t('register_welcome')}</h3>
            <p className="mb-2">{t('register_welcome_text')}</p>
          </div>
          <form onSubmit={submit}>
            <div>
              <InputLabel htmlFor="name" value={t('form_label_name')} />

              <TextInput
                id="name"
                name="name"
                value={data.name}
                className="mt-1 block w-full"
                autoComplete="name"
                isFocused={true}
                onChange={e => setData('name', e.target.value)}
                required
              />

              <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel htmlFor="business_name" value={t('business_name')} />

              <TextInput
                id="business_name"
                name="business_name"
                value={data.business_name}
                className="mt-1 block w-full"
                autoComplete="business_name"
                isFocused={true}
                onChange={e => setData('business_name', e.target.value)}
                required
              />

              <InputError message={errors.business_name} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel htmlFor="program" value={t('program')} />

              <SelectInput
                id="program"
                name="program"
                value={data.program}
                className="mt-1 block w-full"
                labelData="name"
                valueData="id"
                options={programs}
                onChange={e => setData('program', e.target.value)}
                required
              />

              <InputError message={errors.program} className="mt-2" />
            </div>

            <div className="text-sm text-gray-500 mt-3">
              {data.program == 1 ? (
                <div className="flex">
                  <img src={greenforce} className="w-16 h-16 mr-2" alt="" />
                  <p>
                    <strong>Green Force </strong> Tribe is a group of
                    accommodation and restaurant businesses that have become
                    members of Eco Tourism Bali and have undertaken
                    self-assessment. Green Force is divided into members who
                    conduct self-assessments and verified members who Eco
                    Tourism Bali expert verifiers have verified.
                  </p>
                </div>
              ) : (
                <div className="flex">
                  <img src={greenpal} className="w-16 h-16 mr-2" alt="" />
                  <p>
                    <strong>Green Pal</strong> is a whole community that joins
                    together with Eco Tourism Bali of small scale suppliers,
                    community and travel who have the same vision to support
                    Bali to become a Green Tourism Destination and
                    sustainability.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-4">
              <InputLabel htmlFor="email" value={t('form_label_email')} />

              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                autoComplete="username"
                onChange={e => setData('email', e.target.value)}
                required
              />

              <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel htmlFor="password" value={t('form_label_password')} />

              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full"
                autoComplete="new-password"
                onChange={e => setData('password', e.target.value)}
                required
              />

              <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel
                htmlFor="password_confirmation"
                value={t('form_label_password_confirmation')}
              />

              <TextInput
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="mt-1 block w-full"
                autoComplete="new-password"
                onChange={e => setData('password_confirmation', e.target.value)}
                required
              />

              <InputError
                message={errors.password_confirmation}
                className="mt-2"
              />
            </div>

            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="subscribed"
                name="subscribed"
                value={data.subscribed}
                checked={data.subscribed}
                className="mr-2 mt-1"
                onChange={e => setData('subscribed', !data.subscribed)}
              />
              <InputLabel
                htmlFor="subscribed"
                value={t('subscribe_checkbox')}
              />

              <InputError message={errors.subscribed} className="mt-2" />
            </div>

            <div className="flex items-center justify-between mt-6">
              <Button disabled={processing}>Register</Button>
              <Link
                href={route('login')}
                className="text-sm font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {t('already_registered')}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
