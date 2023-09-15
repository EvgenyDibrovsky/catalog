import MetaTags from '../components/MetaTags/MetaTags';
import { useTranslation } from 'react-i18next';
import PageTitle from 'components/PageSettings/PageTitle';
import SubTitle from 'components/PageSettings/SubTitle';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags
        metaTitle={t('pages.home.meta_title')}
        metaDescription={t('pages.home.meta_description')}
      />
      <PageTitle title={t('pages.home.title')} />
      <SubTitle subTitle={t('pages.home.sub_title')} />
      <div className="min-h-screen">
        <h1>Home</h1>
      </div>
    </>
  );
}
