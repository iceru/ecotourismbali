import React from 'react';
import { useTranslation } from 'react-i18next';

function TitlePage({ title, className }) {
  const { t } = useTranslation();
  return (
    <h1 className={'font-bold text-2xl lg:text-3xl mb-6 lg:mb-10 ' + className}>
      {t(title)}
    </h1>
  );
}

export default TitlePage;
