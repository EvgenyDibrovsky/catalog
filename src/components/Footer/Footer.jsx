import { useTranslation } from 'react-i18next';
import MenuFooter from './MenuFooter';
import LogoFooter from './LogoFooter';
import LinksFooter from './LinksFooter';
import SocialLinks from './SocialLinks';
import PayLogo from './PayLogo';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t">
      <div className="bg-white dark:bg-footerBgDark py-8 flex justify-between items-center">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col justify-center md:justify-start">
              <LogoFooter />
              <p className="text-center md:text-left mt-5">Contacts infos</p>
            </div>
            <div className="flex justify-center md:justify-start">
              <MenuFooter />
            </div>
            <div className="flex justify-center md:justify-start">
              <LinksFooter />
            </div>
            <div className="flex flex-col justify-center md:justify-end">
              <SocialLinks />
              <PayLogo />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-footerBgMini dark:bg-footerBgMiniDark text-footerTextMini py-5 flex justify-between items-center">
        <div className="container flex flex-col sm:flex-row justify-between items-center">
          <p className="flex">{t('footer.reserved')}</p>
          <p className="flex items-baseline">
            Powered by
            <a
              href="https://edweb.site"
              target="_blank"
              rel="noreferrer"
              className="duration-200 hover:underline"
            >
              <span className="ml-1 font-semibold text-[1.1rem]">edWeb</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
