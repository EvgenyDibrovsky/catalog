import MetaTags from '../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import HeroFilter from 'components/HeroFilter/HeroFilter';
import CategoryCardsHonePage from 'components/CategoryCards/CategoryCardsHonePage';
import Adv from '../components/Adv/Adv';
export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <MetaTags metaTitle={t('pages.home.meta_title')} metaDescription={t('pages.home.meta_description')} />
      <HeroFilter />
      <div className="container my-10">
        <CategoryCardsHonePage />
        <Adv />
      </div>
    </div>
  );
}
