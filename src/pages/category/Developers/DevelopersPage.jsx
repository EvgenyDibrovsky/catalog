import MetaTags from '../../../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import PageTitleCategory from 'components/PageSettings/PageTitleCategory';
import CardsListCompany from '../../../components/CardsListCompany/CardsListCompany';

export default function DevelopersPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('pages_category.developers.meta_title')} metaDescription={t('pages_category.developers.meta_description')} />

      <div>
        <div>
          <PageTitleCategory title={t('pages_category.developers.title')} subTitle={t('pages_category.developers.sub_title')} />
        </div>
        <div>
          <CardsListCompany />
        </div>
      </div>
    </>
  );
}
