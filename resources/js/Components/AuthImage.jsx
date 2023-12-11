import DefaultImage from '../../images/authImage.jpg';

function AuthImage({ image }) {
  return (
    <div className="pr-20">
      <img
        className="rounded-2xl w-full h-full object-cover min-h-[60vh]"
        src={image || DefaultImage}
        alt=""
      />
    </div>
  );
}

export default AuthImage;
