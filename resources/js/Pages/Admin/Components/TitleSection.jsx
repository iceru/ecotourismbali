import { useTranslation } from 'react-i18next';

function TitleSection({ title, className }) {
  const { t } = useTranslation();

  return (
    <div>
      <div className={`font-bold text-xl ${className}`}>{t(title)}</div>
    </div>
  );
}

export default TitleSection;
