import { Link } from 'react-router-dom';
import { SiHomebridge } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

export default function Logo() {
  const { t } = useTranslation();

  return (
    <>
      <Link to="/">
        <div className="flex gap-4 items-center justify-center md:justify-start">
          <SiHomebridge className="text-colorLogo dark:text-yellow-500 transition-all duration-500 text-[2rem]" />
          <div className="flex flex-col">
            <p className="text-[0.6rem] font-semibold text-black dark:text-white transition-all duration-200">
              {t('header.logo.logo_text_1')}
            </p>
            <p className="text-[0.6rem] font-semibold text-black dark:text-white transition-all duration-200">
              {t('header.logo.logo_text_2')}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
