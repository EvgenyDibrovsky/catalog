import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const MetaTags = ({ metaTitle, metaDescription }) => {
  const { i18n } = useTranslation();

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  );
};

export default MetaTags;
