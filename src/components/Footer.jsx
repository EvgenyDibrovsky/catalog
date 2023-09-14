import paypal from '../image/paypal.svg';
import mastercard from '../image/mastercard.svg';
import visa from '../image/visa.svg';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-bgFooter dark:bg-darkBgFooter h-20 flex justify-between items-center">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="flex text-black dark:text-gray-400">
          {t('rights reserved')}
        </p>
        <div className="flex gap-4 items-center">
          <img src={paypal} alt="paypal" className="h-6" />
          <img src={mastercard} alt="paypal" className="h-8" />
          <img src={visa} alt="paypal" className="h-10" />
        </div>
      </div>
    </footer>
  );
}
