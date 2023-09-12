import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-40 w-full border-t border-black dark:border-white">
      <div className="bg-white dark:bg-black  py-5 h-full">
        <div className="container">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <p className="text-center text-black dark:text-white ">Block 1 </p>
            </div>
            <div>
              <p className="text-center text-black dark:text-white ">Block 2 </p>
            </div>
            <div>
              <p className="text-center text-black dark:text-white ">Block 3 </p>
            </div>
            <div>
              <p className="text-center text-black dark:text-white ">Block 4 </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black flex items-center py-2">
        <div className="container flex justify-between items-center">
          <p className="flex text-white">© 2023 Всі права захищені</p>
          <div className="flex gap-4 items-center ">
            <Image
              src="/icons/paypal.svg"
              alt="mastercard"
              width={80}
              height={15}
              
            />
            <Image
              src="/icons/mastercard.svg"
              alt="paypal"
              width={40}
              height={15}
              
            />
            <Image
              src="/icons/visa.svg"
              alt="visa"
              width={50}
              height={15}
              
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export { Footer };
