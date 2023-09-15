import MetaTags from '../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags
        metaTitle={t('pages.home.meta_title')}
        metaDescription={t('pages.home.meta_description')}
      />

      <div className="min-h-screen">
        <h1>Home</h1>
      </div>
    </>
  );
}
