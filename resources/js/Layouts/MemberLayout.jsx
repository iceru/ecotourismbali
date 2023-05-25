import PrimaryButton from '@/Components/PrimaryButton';
import Logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileClipboard,
  faHome,
  faPencilRuler,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

function MemberLayout({ children }) {
  return (
    <div className="flex bg-lightPrimary p-6 gap-6">
      <div className="min-h-screen bg-white shadow-md rounded-2xl w-1/4 p-6">
        <div className="logo mb-12">
          <img src={Logo} alt="Eco Tourism Bali" />
        </div>
        <nav className="navigation text-etbGray">
          <ul className="grid gap-6">
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="fa-fw mr-2 text-primary"
                  icon={faHome}
                />
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="fa-fw mr-2 text-primary"
                  icon={faUser}
                />
                My Profile
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="fa-fw mr-2 text-primary"
                  icon={faPencilRuler}
                />
                My Assessment
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="fa-fw mr-2 text-primary"
                  icon={faFileClipboard}
                />
                E-Learning
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-3/4">
        <div className="flex justify-between items-center bg-white shadow-md rounded-2xl mb-6 px-6 py-4">
          <div>
            <PrimaryButton>Collapse</PrimaryButton>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <h5>
                Hello, <strong>Member 1</strong>
              </h5>
              <div className="text-primary">Member</div>
            </div>
            <div>
              <PrimaryButton>Logout</PrimaryButton>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default MemberLayout;
