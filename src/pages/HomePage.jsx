import MetaTags from '../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import HeroFilter from 'components/HeroFilter/HeroFilter';
import CategoryCardsHonePage from 'components/CategoryCards/CategoryCardsHonePage';
export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <MetaTags metaTitle={t('pages.home.meta_title')} metaDescription={t('pages.home.meta_description')} />
      <HeroFilter />
      <div className="container mt-10">
        <div className="my-10">
          <CategoryCardsHonePage />
        </div>
      </div>
    </div>
  );
}
