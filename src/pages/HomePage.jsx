import MetaTags from '../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import Titles from 'components/PageSettings/Titles';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags
        metaTitle={t('pages.home.meta_title')}
        metaDescription={t('pages.home.meta_description')}
      />
      <Titles
        title={t('pages.home.title')}
        subTitle={t('pages.home.sub_title')}
      />
      <div className="min-h-screen">
        <h1>Home</h1>
      </div>
    </>
  );
}
