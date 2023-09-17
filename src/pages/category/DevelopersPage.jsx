import MetaTags from '../../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import CategoryCardsCategoryPage from 'components/CategoryCards/CategoryCardsCategoryPage';
export default function DevelopersPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <MetaTags
        metaTitle={t('pages.category.meta_title')}
        metaDescription={t('pages.category.meta_description')}
      />

      <div className="container mt-10">
        <CategoryCardsCategoryPage />
      </div>
    </div>
  );
}
