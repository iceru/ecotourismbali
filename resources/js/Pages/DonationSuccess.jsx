import Button from '@/Components/Button';
import Guest from '@/Layouts/GuestLayout';
import React from 'react';
import donationImg from '../../images/donation.png';

function DonationSucces() {
  return (
    <Guest>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold mb-4">
          Thank You for the Donations!
        </h1>
        <p className="text-center lg:w-3/4 mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          architecto dolore itaque illum aspernatur perferendis possimus
          veritatis aliquam doloribus quibusdam? Deserunt non ullam tenetur
          voluptas nulla? Quis nesciunt vitae id.
        </p>
        <Button
          as="link"
          color="secondary"
          href="https://ecotourismbali.com"
          className="mb-4"
        >
          Back to Homepage
        </Button>

        <div>
          <img src={donationImg} alt="Donation" className="rounded w-full" />
        </div>
      </div>
    </Guest>
  );
}

export default DonationSucces;
