import MetaTags from '../../../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import Titles from 'components/PageSettings/Titles';
import underConstruction from '../../../images/support/under-construction.png';
import CardsListCompany from '../../../components/CardsListCompany/CardsListCompany';

export default function DevelopersPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('pages_category.developers.meta_title')} metaDescription={t('pages_category.developers.meta_description')} />

      <div>
        <img src={underConstruction} alt="underConstruction" className="w-6/12 mx-auto" />
        <div>
          <Titles title={t('pages_category.developers.title')} subTitle={t('pages_category.developers.sub_title')} />
        </div>
        <div>
          <CardsListCompany />
        </div>
      </div>
    </>
  );
}
