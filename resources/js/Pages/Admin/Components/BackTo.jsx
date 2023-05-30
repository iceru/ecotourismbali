import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function BackTo({ link, title }) {
  const { t } = useTranslation();
  return (
    <div>
      <Link href={link} className="mb-6 flex items-center">
        <FontAwesomeIcon icon={faLongArrowAltLeft} className="mr-2" />
        {t(title)}
      </Link>
    </div>
  );
}

export default BackTo;
