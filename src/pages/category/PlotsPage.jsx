import MetaTags from '../../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import Titles from 'components/PageSettings/Titles';
import underConstruction from '../../images/support/under-construction.png';

export default function PlotsPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('pages_category.plots.meta_title')} metaDescription={t('pages_category.plots.meta_description')} />
      <div className="min-h-screen">
        <div className="container">
          <img src={underConstruction} alt="underConstruction" className="w-6/12 mx-auto" />

          <div className="my-10"></div>
          <Titles title={t('pages_category.plots.title')} subTitle={t('pages_category.plots.sub_title')} />
        </div>
      </div>
    </>
  );
}
