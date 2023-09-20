import MetaTags from '../../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import Titles from 'components/PageSettings/Titles';

export default function ApartmentsPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('page-category.apartments.meta_title')} metaDescription={t('page-category.apartments.meta_description')} />
      <div className="min-h-screen">
        <div className="container">
          <div className="my-10"></div>
          <Titles title={t('page-category.apartments.title')} subTitle={t('page-category.apartments.sub_title')} />
        </div>
      </div>
    </>
  );
}
