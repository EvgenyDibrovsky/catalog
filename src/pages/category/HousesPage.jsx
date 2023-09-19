import MetaTags from '../../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import CategoryCardsCategoryPage from 'components/CategoryCards/CategoryCardsCategoryPage';
import Titles from 'components/PageSettings/Titles';

export default function HousesPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('page-category.houses.meta_title')} metaDescription={t('page-category.houses.meta_description')} />
      <div className="min-h-screen">
        <div className="container">
          <div className="my-10">
            <CategoryCardsCategoryPage />
          </div>
          <Titles title={t('page-category.houses.title')} subTitle={t('page-category.houses.sub_title')} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corporis suscipit facilis corrupti quam enim in dolorum unde fuga natus quibusdam dolorem quae ipsum velit aliquam nam
            dolor, nisi laudantium!
          </p>
        </div>
      </div>
    </>
  );
}
