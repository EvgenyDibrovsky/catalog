import PageTitle from 'components/PageSettings/PageTitle';
import { useTranslation } from 'react-i18next';
import { TbDeviceIpadHorizontalSearch } from 'react-icons/tb';
import MetaTags from '../components/MetaTags/MetaTags';

export default function ErrorPage() {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags
        metaTitle={t('pages.not_found.meta_title')}
        metaDescription={t('pages.not_found.meta_description')}
      />
      <div className="container mx-auto">
        <PageTitle title={t('pages.not_found.title')} />

        <p className="text-[5rem] text-center text-black dark:text-white">
          {t('pages.not_found.sub_title')}
        </p>
        <TbDeviceIpadHorizontalSearch className="mx-auto my-5 text-[10rem] text-textSecondary dark:text-yellow-500" />
      </div>
    </>
  );
}
