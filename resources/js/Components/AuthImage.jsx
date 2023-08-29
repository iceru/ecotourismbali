import DefaultImage from '../../images/authImage.png';

function AuthImage({ image }) {
  return (
    <div className="pr-20">
      <img
        className="rounded-2xl w-full h-full object-cover"
        src={image || DefaultImage}
        alt=""
      />
    </div>
  );
}

export default AuthImage;
