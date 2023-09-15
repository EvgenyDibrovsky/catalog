import MetaTags from '../components/MetaTags/MetaTags';
import PageTitle from 'components/PageSettings/PageTitle';
import SubTitle from 'components/PageSettings/SubTitle';
import { useTranslation } from 'react-i18next';
import CardsListCompany from '../components/CardsListCompany/CardsListCompany';
export default function CatalogPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags
        metaTitle={t('pages.catalog.meta_title')}
        metaDescription={t('pages.catalog.meta_description')}
      />
      <div className="container mx-auto">
        <PageTitle title={t('pages.catalog.title')} />
        <SubTitle subTitle={t('pages.catalog.sub_title')} />
        <CardsListCompany />
      </div>
    </>
  );
}
