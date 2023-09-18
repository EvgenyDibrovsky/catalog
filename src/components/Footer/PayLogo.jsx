import paypal from '../../images/paypal.svg';
import mastercard from '../../images/mastercard.svg';
import visa from '../../images/visa.svg';

export default function PayLogo() {
  return (
    <>
      <ul className="flex gap-2 items-center  justify-center lg:justify-end">
        <li className="flex items-center justify-center bg-iconBg dark:bg-iconBgDark h-10 px-2 rounded-sm">
          <img src={paypal} alt="paypal" className="h-6" />
        </li>
        <li className="flex items-center justify-center bg-iconBg dark:bg-iconBgDark h-10 px-2 rounded-sm">
          <img src={mastercard} alt="paypal" className="h-8" />
        </li>
        <li className="flex items-center justify-center bg-iconBg dark:bg-iconBgDark h-10 px-2 rounded-sm">
          <img src={visa} alt="paypal" className="h-10" />
        </li>
      </ul>
    </>
  );
}
