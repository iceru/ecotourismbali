import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import Guest from '@/Layouts/GuestLayout';
import { router, useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import donationImg from '../../images/donation.png';

function Donation() {
  const { t } = useTranslation();
  const amounts = [100000, 250000, 500000];
  const [selectedAmount, setSelectedAmount] = useState(amounts[0]);
  const [payPending, setPayPending] = useState(false);
  const [displayAmount, setDisplayAmount] = useState();
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    company: '',
    amount: selectedAmount,
  });

  let snapToken = sessionStorage.getItem('snapTokenDonation');

  const handleSubmit = e => {
    e.preventDefault();
    const snapInit = snapToken => {
      snap.pay(snapToken, {
        onSuccess: function () {
          setPayPending(false);
          sessionStorage.clear('snapTokenDonation');
          sessionStorage.setItem('paid', true);
          router.visit('/donation/success');
        },
        onPending: function () {
          setPayPending(true);
        },
        onError: function () {
          setPayPending(false);
          sessionStorage.clear('snapTokenDonation');
        },
        onClose: function () {
          setPayPending(true);
          sessionStorage.clear('snapTokenDonation');
        },
      });
    };
    if (!snapToken) {
      post(route('donation.store'), {
        onSuccess: () => {
          axios
            .post(route('donation.pay'), {
              email: data?.email,
              amount: data?.amount,
            })
            .then(function (res) {
              sessionStorage.setItem('snapTokenDonation', res.data);
              snapInit(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        },
      });
    } else {
      snapInit(snapToken);
    }
  };

  const handleChangeAmount = val => {
    let numericValue = val;
    if (typeof val === 'string') {
      numericValue = val.replace(/[^0-9]/g, '');
    }

    const formattedValue = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numericValue);

    setSelectedAmount(parseInt(numericValue));
    setDisplayAmount(formattedValue);
    setData('amount', parseInt(numericValue));
  };

  useEffect(() => {
    handleChangeAmount(amounts[0]);
  }, []);

  console.log(errors);

  return (
    <Guest>
      <main>
        <div className="container grid lg:grid-cols-2 gap-10">
          <section>
            <h1 className="text-4xl font-bold font-sans leading-snug mb-4">
              Donations for <br /> Regenerative Bali
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ut pharetra lorem nunc mi
              sed. Vitae egestas vitae leo augue. Nec nibh fames vitae libero et
              congue et pellentesque turpis. <br /> <br /> Fermentum sagittis
              sem consectetur integer volutpat scelerisque. Id lobortis maecenas
              aliquet praesent. Faucibus nam amet nullam volutpat orci. Amet
              arcu mauris eget phasellus sit.
            </p>
          </section>
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-3xl shadow-md bg-white relative z-10 mb-4 lg:mb-0"
          >
            <div className="mb-4">
              <label htmlFor="name" className="mb-3 block">
                Your Name
              </label>
              <TextInput
                id="name"
                name="name"
                required
                value={data.name}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('name', e.target.value)}
              />
              {errors?.name && (
                <span className="text-red-600">{errors.name}</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-3 block">
                Your Email
              </label>
              <TextInput
                id="email"
                name="email"
                required
                value={data.email}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('email', e.target.value)}
              />
              {errors?.email && (
                <span className="text-red-600">{errors.email}</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="mb-3 block">
                Company (optional)
              </label>
              <TextInput
                id="company"
                name="company"
                value={data.company}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('company', e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="amount" className="mb-3 block">
                Select Amount
              </label>
              <div className="flex flex-wrap lg:flex-nowrap gap-4 mb-4">
                {amounts?.map(item => {
                  return (
                    <button
                      className={`w-full px-4 py-2 rounded-lg border-secondary border font-bold text-secondary 
                    text-center hover:bg-secondary hover:bg-opacity-70 hover:text-white transition ${
                      selectedAmount === item ? 'bg-secondary text-white' : ''
                    }`}
                      onClick={() => {
                        setSelectedAmount(item);
                        handleChangeAmount(item);
                      }}
                    >
                      {item?.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="mb-3 block">
                or Enter Amount
              </label>
              <TextInput
                id="amount"
                name="amount"
                value={displayAmount}
                className="block w-full"
                isFocused={true}
                onChange={e => {
                  handleChangeAmount(e.target.value);
                }}
              />
            </div>
            <div>
              <Button
                color="secondary"
                className="!font-bold w-full text-center justify-center"
                onClick={handleSubmit}
                disabled={processing}
              >
                {t('submit')}
              </Button>
              {payPending && (
                <div className="mt-2 text-red-600 text-center">
                  You currently have a pending payment. Click submit again
                </div>
              )}
            </div>
          </form>
        </div>
        <div>
          <img
            src={donationImg}
            alt="Donation"
            className="lg:-mt-40 rounded w-full hidden lg:block"
          />
        </div>
      </main>
    </Guest>
  );
}

export default Donation;
