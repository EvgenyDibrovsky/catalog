import PageTitle from 'components/PageTitle';
import SubTitle from 'components/SubTitle';
import { useTranslation } from 'react-i18next';
import CardsListCompany from '../components/CardsListCompany/CardsListCompany';
export default function CatalogPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto">
      <PageTitle title={t('catalog')} />
      <SubTitle subTitle={t('sub-catalog')} />
      <CardsListCompany />
    </div>
  );
}
