import PageTitle from 'components/PageTitle';
import { useTranslation } from 'react-i18next';
import { TbDeviceIpadHorizontalSearch } from 'react-icons/tb';

export default function ErrorPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <PageTitle title={t('not-found')} />
      <p className="text-[5rem] text-center text-black dark:text-white">
        {t('404')}
      </p>
      <TbDeviceIpadHorizontalSearch className="mx-auto my-5 text-[10rem] text-textSecondary dark:text-yellow-500" />
    </div>
  );
}
