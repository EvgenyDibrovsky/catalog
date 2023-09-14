import PageTitle from 'components/PageTitle';
import SubTitle from 'components/SubTitle';
import { useTranslation } from 'react-i18next';
export default function TermsUsePage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto content-text">
      <PageTitle title={t('terms-of-Use-title')} />
      <SubTitle subTitle={t('sub-contacts')} />
      <p className="text-xl text-center text-black dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quo
        maiores? Eveniet, fugit non ab corporis laudantium a nobis aspernatur
        qui, illum, cum officiis sunt debitis nihil fuga minima expedita.
      </p>
    </div>
  );
}
