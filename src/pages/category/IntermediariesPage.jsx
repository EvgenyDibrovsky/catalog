import MetaTags from '../../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import Titles from 'components/PageSettings/Titles';

export default function IntermediariesPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('page-category.intermediaries.meta_title')} metaDescription={t('page-category.intermediaries.meta_description')} />
      <div className="min-h-screen">
        <div className="container">
          <div className="my-10"></div>
          <Titles title={t('page-category.intermediaries.title')} subTitle={t('page-category.intermediaries.sub_title')} />
        </div>
      </div>
    </>
  );
}
