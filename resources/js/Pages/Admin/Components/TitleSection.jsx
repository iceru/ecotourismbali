import { useTranslation } from 'react-i18next';

function TitleSection({ title }) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="font-bold text-xl">{t(title)}</div>
    </div>
  );
}

export default TitleSection;
