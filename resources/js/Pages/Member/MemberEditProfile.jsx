import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHome, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useForm, usePage } from '@inertiajs/react';
import Slider from 'react-slick';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';

import noImage from '../../../images/no-image.jpg';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import SelectInput from '@/Components/SelectInput';

const MAX_PROFILE_IMAGE_SIZE = 1024 * 1024;
const MAX_GALLERY_IMAGE_SIZE = 2 * 1024 * 1024;

const resizeImage = (file, maxSize, maxDimension) =>
  new Promise(resolve => {
    if (!file?.type?.startsWith('image/') || file.size <= maxSize) {
      resolve(file);
      return;
    }

    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);

      const scale = Math.min(
        1,
        maxDimension / Math.max(image.width, image.height)
      );
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(image.width * scale);
      canvas.height = Math.round(image.height * scale);

      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      const createBlob = quality => {
        canvas.toBlob(
          blob => {
            if (!blob) {
              resolve(file);
              return;
            }

            if (blob.size <= maxSize || quality <= 0.5) {
              const resizedFile = new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              resolve(resizedFile);
              return;
            }

            createBlob(quality - 0.1);
          },
          'image/jpeg',
          quality
        );
      };

      createBlob(0.85);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(file);
    };

    image.src = objectUrl;
  });

function MemberEditProfile({ categories }) {
  const { t } = useTranslation();
  const [editImage, setEditImage] = useState(false);
  const [fileErrors, setFileErrors] = useState({});
  const { user, member, flash } = usePage().props;

  const { data, setData, post, processing, errors, reset } = useForm({
    business_name: member.business_name || '',
    address: member.address || '',
    website: member.website || '',
    description: member.description || '',
    image: null,
    sliders: null,
    facebook: member.facebook || null,
    whatsapp: member.whatsapp || null,
    twitter: member.twitter || null,
    instagram: member.instagram || null,
    merchant_promo: member.merchant_promo || null,
    category: member.category_id || null,
  });

  const submit = e => {
    e.preventDefault();

    if (Object.keys(fileErrors).length > 0) {
      return;
    }

    post(route('member.profile.store', member.id), {
      forceFormData: true,
      onSuccess: () => {
        reset('image', 'sliders');
        setFileErrors({});
      },
    });
  };

  const onDelete = id => {
    post(route('member.profile.deleteImage', id));
  };

  const handleProfileImageChange = async e => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const resizedFile = await resizeImage(file, MAX_PROFILE_IMAGE_SIZE, 1024);

    if (resizedFile.size > MAX_PROFILE_IMAGE_SIZE) {
      setData('image', null);
      e.target.value = '';
      setFileErrors(current => ({
        ...current,
        image: 'Profile image must be 1MB or smaller.',
      }));
      return;
    }

    setFileErrors(current => {
      const { image, ...rest } = current;
      return rest;
    });
    setData('image', resizedFile);
  };

  const handleGalleryChange = async e => {
    const files = Array.from(e.target.files);

    if (files.length === 0) {
      return;
    }

    const resizedFiles = await Promise.all(
      files.map(file => resizeImage(file, MAX_GALLERY_IMAGE_SIZE, 1920))
    );
    const oversizedFiles = resizedFiles.filter(
      file => file.size > MAX_GALLERY_IMAGE_SIZE
    );

    if (oversizedFiles.length > 0) {
      setData('sliders', null);
      e.target.value = '';
      setFileErrors(current => ({
        ...current,
        sliders: 'Each gallery image must be 2MB or smaller.',
      }));
      return;
    }

    setFileErrors(current => {
      const { sliders, ...rest } = current;
      return rest;
    });
    setData('sliders', resizedFiles);
  };

  const sliderCount = member.member_slider?.length || 0;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: sliderCount > 1 ? 2 : sliderCount,
    slidesToScroll: 1,
  };

  return (
    <MemberLayout>
      <AdminSection>
        <h2 className="font-bold text-xl mb-4">{t('edit_profile')}</h2>
        {flash.success && (
          <div className="bg-green-100 border border-green-400 mb-3 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold mr-2">Success!</strong>
            <span className="inline">{flash.success}</span>
          </div>
        )}
        <form onSubmit={submit}>
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center">
              <div>
                {member.image ? (
                  <div
                    className="relative mr-4 group cursor-pointer bg-primary bg-opacity-10 flex justify-center items-center rounded-full "
                    onClick={() => setEditImage(!editImage)}
                  >
                    <img
                      className="w-24 h-24 object-contain"
                      src={`/storage/member/images/${member.image}`}
                      alt=""
                    />
                    <div className="rounded-full group-hover:bg-opacity-40 group-hover:opacity-100 transition flex items-center justify-center text-white bg-black opacity-0 bg-opacity-0 content-['Update'] top-1/2 left-1/2 w-full h-full absolute -translate-x-1/2 -translate-y-1/2">
                      Update
                    </div>
                  </div>
                ) : (
                  <div
                    className="relative mr-4 group cursor-pointer"
                    onClick={() => setEditImage(!editImage)}
                  >
                    <img
                      className="w-24 h-24 rounded-full"
                      src={noImage}
                      alt=""
                    />
                    <div className="rounded-full group-hover:bg-opacity-40 group-hover:opacity-100 transition flex items-center justify-center text-white bg-black opacity-0 bg-opacity-0 content-['Update'] top-1/2 left-1/2 w-full h-full absolute -translate-x-1/2 -translate-y-1/2">
                      Update
                    </div>
                  </div>
                )}
              </div>
              <div>
                {editImage && (
                  <div>
                    <input
                      className="mb-2"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      onChange={handleProfileImageChange}
                    />
                    <div className="text-red-600 mb-2">
                      {fileErrors.image || errors.image}
                    </div>
                  </div>
                )}
                <TextInput
                  id="business_name"
                  name="business_name"
                  placeholder={t('your_business_name')}
                  value={data.business_name}
                  className="block w-full"
                  isFocused={true}
                  onChange={e => setData('business_name', e.target.value)}
                />
                <SelectInput
                  id="category"
                  name="category"
                  options={categories}
                  valueData="id"
                  labelData="name"
                  value={data.category}
                  className="block w-full mt-2"
                  isFocused={true}
                  onChange={e => setData('category', e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mb-10">
            {sliderCount > 0 && (
              <div className="mb-8 -mx-2">
                <Slider {...settings}>
                  {member.member_slider.map(slider => {
                    return (
                      <div key={slider.id} className="px-2">
                        <button
                          type="button"
                          onClick={() => onDelete(slider.id)}
                          className="absolute bg-red-700 text-white px-4 py-2 rounded-lg z-10 top-4 ml-4 text-sm flex gap-2 items-center opacity-90"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                          Delete
                        </button>
                        <div className="relative overflow-hidden pb-2/3 z-0">
                          <img
                            src={`/storage/member/sliders/${slider.image}`}
                            alt=""
                            className="absolute h-full w-full object-cover p-2"
                          />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            )}
            <div>
              <label
                className="block mb-2 font-medium text-gray-900 "
                htmlFor="sliders"
              >
                {t('your_gallery')}
              </label>
              <input
                className="block w-full text-gray-900 border border-gray-300 p-2 cursor-pointer bg-gray-50 focus:outline-none"
                id="sliders"
                multiple
                type="file"
                name="sliders"
                accept="image/*"
                onChange={handleGalleryChange}
              />
              {fileErrors.sliders && (
                <div className="text-red-600 mb-2">{fileErrors.sliders}</div>
              )}
              {Object.keys(errors).map((errorKey, index) => {
                // Check if the error key starts with "sliders."
                if (errorKey.startsWith('sliders.')) {
                  return (
                    <div key={index} className="text-red-600 mb-2">
                      {errors[errorKey]} {/* Display the error message */}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="flex justify-center lg:gap-8 mb-10 flex-wrap">
            <div className="flex gap-2 text-gray-600 justify-center items-center w-full lg:w-auto mb-4 lg:mb-0">
              <FontAwesomeIcon icon={faHome} />
              <TextInput
                id="address"
                name="address"
                placeholder={t('your_address')}
                value={data.address}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('address', e.target.value)}
              />
            </div>
            <div className="flex gap-2 text-gray-600 justify-center items-center w-full lg:w-auto">
              <FontAwesomeIcon icon={faGlobe} />
              <TextInput
                id="website"
                name="website"
                placeholder={t('your_website')}
                value={data.website}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('website', e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex gap-2 text-gray-600 justify-center items-center">
              <TextInput
                id="description"
                name="description"
                typeForm="textarea"
                placeholder={t('your_description')}
                value={data.description}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('description', e.target.value)}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            <div className="flex gap-4 text-gray-600 justify-center items-center ">
              <FontAwesomeIcon className="text-xl" icon={faFacebook} />
              <TextInput
                id="facebook"
                name="facebook"
                placeholder={'Facebook'}
                value={data.facebook}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('facebook', e.target.value)}
              />
            </div>
            <div className="flex gap-4 text-gray-600 justify-center items-center ">
              <FontAwesomeIcon className="text-xl" icon={faInstagram} />
              <TextInput
                id="instagram"
                name="instagram"
                placeholder={'Instagram'}
                value={data.instagram}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('instagram', e.target.value)}
              />
            </div>
            <div className="flex gap-4 text-gray-600 justify-center items-center ">
              <FontAwesomeIcon className="text-xl" icon={faWhatsapp} />
              <TextInput
                id="whatsapp"
                name="whatsapp"
                placeholder={'Whatsapp'}
                value={data.whatsapp}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('whatsapp', e.target.value)}
              />
            </div>
            <div className="flex gap-4 text-gray-600 justify-center items-center ">
              <FontAwesomeIcon className="text-xl" icon={faTwitter} />
              <TextInput
                id="twitter"
                name="twitter"
                placeholder={'Twitter'}
                value={data.twitter}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('twitter', e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex gap-2 text-gray-600 justify-center items-center">
              <TextInput
                id="merchant_promo"
                name="merchant_promo"
                typeForm="textarea"
                placeholder={t('your_merchant_promo')}
                value={data.merchant_promo}
                className="block w-full"
                isFocused={true}
                onChange={e => setData('merchant_promo', e.target.value)}
              />
            </div>
          </div>
          <div>
            <Button className="w-full flex justify-center !py-2 ">
              Update
            </Button>
          </div>
        </form>
      </AdminSection>
    </MemberLayout>
  );
}

export default MemberEditProfile;
