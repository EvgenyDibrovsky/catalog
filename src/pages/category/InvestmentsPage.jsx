import MetaTags from '../../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import Titles from 'components/PageSettings/Titles';

export default function InvestmentsPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('page-category.investments.meta_title')} metaDescription={t('page-category.investments.meta_description')} />
      <div className="min-h-screen">
        <div className="container">
          <div className="my-10"></div>
          <Titles title={t('page-category.investments.title')} subTitle={t('page-category.investments.sub_title')} />
        </div>
      </div>
    </>
  );
}
