import MetaTags from '../../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import Titles from 'components/PageSettings/Titles';
import underConstruction from '../../images/support/under-construction.png';

export default function HousesPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('pages_category.houses.meta_title')} metaDescription={t('pages_category.houses.meta_description')} />
      <div className="min-h-screen">
        <div className="container">
          <img src={underConstruction} alt="underConstruction" className="w-6/12 mx-auto" />

          <div className="my-10"></div>
          <Titles title={t('pages_category.houses.title')} subTitle={t('pages_category.houses.sub_title')} />
        </div>
      </div>
    </>
  );
}
