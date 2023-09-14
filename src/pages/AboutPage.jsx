import PageTitle from 'components/PageTitle';
import SubTitle from 'components/SubTitle';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto h-[calc(100vh-20rem)]">
      <PageTitle title={t('about-us')} />
      <SubTitle subTitle={t('sub-about-us')} />
      <p className="text-xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        voluptate optio consequatur obcaecati, eum ipsam dolores tempore
        similique, voluptatum autem iusto quod? Dolor, necessitatibus corrupti.
        Nisi error numquam soluta sequi.
      </p>
      <p className="text-xl text-center text-black dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quo
        maiores? Eveniet, fugit non ab corporis laudantium a nobis aspernatur
        qui, illum, cum officiis sunt debitis nihil fuga minima expedita.
      </p>
    </div>
  );
}
