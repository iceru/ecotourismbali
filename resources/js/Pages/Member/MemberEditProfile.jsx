import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHome } from '@fortawesome/free-solid-svg-icons';
import { useForm, usePage } from '@inertiajs/react';
import Slider from 'react-slick';

import AdminSection from '@/Components/AdminSection';
import MemberLayout from '@/Layouts/MemberLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

import noImage from '../../../images/no-image.jpg';

function MemberEditProfile() {
  const { t } = useTranslation();
  const [editImage, setEditImage] = useState(false);
  const { user, member } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    business_name: member.business_name || '',
    address: member.address || '',
    website: member.website || '',
    description: member.description || '',
    image: member.image || null,
    sliders: member.sliders || null,
  });

  const submit = e => {
    e.preventDefault();

    post(route('member.profile.store', member.id), {
      onSuccess: () => {
        reset();
      },
    });
    console.log(data);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      member.member_slider.length > 2 ? 3 : member.member_slider.length,
    slidesToScroll: 1,
  };

  return (
    <MemberLayout>
      <AdminSection>
        <h2 className="font-bold text-xl mb-4">{t('edit_profile')}</h2>

        <form onSubmit={submit}>
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center">
              <div>
                {member.image ? (
                  <div
                    className="relative mr-4 group cursor-pointer"
                    onClick={() => setEditImage(!editImage)}
                  >
                    <img
                      className="w-24 h-24 rounded-full object-cover"
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
                      className="mb-3"
                      type="file"
                      name="image"
                      id="image"
                      onChange={e => setData('image', e.target.files[0])}
                    />
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
              </div>
            </div>
          </div>
          <div className="mb-10">
            {member.member_slider && (
              <div className="-mx-2">
                <Slider {...settings}>
                  {member.member_slider.map(slider => {
                    return (
                      <div>
                        <img
                          src={`/storage/member/sliders/${slider.image}`}
                          alt=""
                          className="p-2"
                        />
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
                onChange={e => {
                  setData('sliders', e.target.files);
                }}
              />
            </div>
          </div>
          <div className="flex justify-around mb-10">
            <div className="flex gap-2 text-gray-600 justify-center items-center">
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
            <div>
              <div className="flex gap-2 text-gray-600 justify-center items-center">
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
          </div>
          <div className="mb-6">
            {member?.description ? (
              <div>{t('add_description')}</div>
            ) : (
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
            )}
          </div>
          <div>
            <PrimaryButton className="w-full flex justify-center !py-2 ">
              Update
            </PrimaryButton>
          </div>
        </form>
      </AdminSection>
    </MemberLayout>
  );
}

export default MemberEditProfile;
