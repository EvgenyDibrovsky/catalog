import PageTitle from 'components/PageSettings/PageTitle';
import SubTitle from 'components/PageSettings/SubTitle';
import { useTranslation } from 'react-i18next';
import MetaTags from '../components/MetaTags/MetaTags';

export default function TermsUsePage() {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags
        metaTitle={t('pages.regulations.meta_title')}
        metaDescription={t('pages.regulations.meta_description')}
      />
      <div className="container mx-auto content-text">
        <PageTitle title={t('pages.regulations.title')} />
        <SubTitle subTitle={t('pages.regulations.sub_title')} />
        <p className="text-xl text-center text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quo
          maiores? Eveniet, fugit non ab corporis laudantium a nobis aspernatur
          qui, illum, cum officiis sunt debitis nihil fuga minima expedita.
        </p>
      </div>
    </>
  );
}