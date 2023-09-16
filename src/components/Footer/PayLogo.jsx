import paypal from '../../image/paypal.svg';
import mastercard from '../../image/mastercard.svg';
import visa from '../../image/visa.svg';

export default function PayLogo() {
  return (
    <>
      <div className="flex gap-4 items-center justify-end">
        <img src={paypal} alt="paypal" className="h-6" />
        <img src={mastercard} alt="paypal" className="h-8" />
        <img src={visa} alt="paypal" className="h-10" />
      </div>
    </>
  );
}
