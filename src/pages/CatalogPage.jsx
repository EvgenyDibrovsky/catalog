import MetaTags from '../components/MetaTags/MetaTags';
// import Titles from 'components/PageSettings/Titles';
import { useTranslation } from 'react-i18next';
import CardsListCompany from '../components/CardsListCompany/CardsListCompany';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import CategoryCardsCategoryPage from 'components/CategoryCards/CategoryCardsCategoryPage';

export default function CatalogPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('pages.catalog.meta_title')} metaDescription={t('pages.catalog.meta_description')} />
      <HeroSlider />

      <div className="container">
        {/* <Titles title={t('pages.catalog.title')} subTitle={t('pages.catalog.sub_title')} /> */}
        <div className="my-10">
          <CategoryCardsCategoryPage />
        </div>

        <div className="mb-10">
          <CardsListCompany />
        </div>
      </div>
    </>
  );
}
