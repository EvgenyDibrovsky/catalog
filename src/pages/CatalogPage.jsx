import MetaTags from '../components/MetaTags/MetaTags';
import Titles from 'components/PageSettings/Titles';
import { useTranslation } from 'react-i18next';
import CategoryCardsCategoryPage from 'components/CategoryCards/CategoryCardsCategoryPage';
import { Outlet } from 'react-router-dom';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
export default function CatalogPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('pages.catalog.meta_title')} metaDescription={t('pages.catalog.meta_description')} />
      <div className="container pt-10">
        <Titles title={t('pages.catalog.title')} subTitle={t('pages.catalog.sub_title')} />
        <div className="my-2">
          <Breadcrumb />
        </div>
        <div className="mb-10">
          <CategoryCardsCategoryPage />
        </div>
      </div>
      <Outlet />
    </>
  );
}
