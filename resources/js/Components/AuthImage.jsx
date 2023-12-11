import DefaultImage from '../../images/authImage.jpg';

function AuthImage({ image }) {
  return (
    <div className="pr-12 h-full">
      <img
        className="rounded-2xl w-full h-full object-cover min-h-[70vh]"
        src={image || DefaultImage}
        alt=""
      />
    </div>
  );
}

export default AuthImage;
