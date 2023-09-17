import MetaTags from '../components/MetaTags/MetaTags';
import Titles from 'components/PageSettings/Titles';
import { useTranslation } from 'react-i18next';

export default function OfferPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <MetaTags
        metaTitle={t('pages.offer.meta_title')}
        metaDescription={t('pages.offer.meta_description')}
      />
      <div className="container mt-10">
        <Titles
          title={t('pages.offer.title')}
          subTitle={t('pages.offer.sub_title')}
        />
      </div>
    </div>
  );
}
