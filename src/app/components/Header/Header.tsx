import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black z-50 w-full fixed top-0 left-0 h-20 flex items-center justify-between">
      <div className="container flex justify-between items-center">
        <div>
          <Link href="/">
            {/* <Image src="/images/edweb.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority /> */}
          <p className="text-white text-[1.5rem] font-semibold">LOGO</p>
          </Link>
        </div>
        <nav className="flex gap-4">
          <Link href="/" className="text-black dark:text-white duration-200 hover:text-gray-400">
            Главная
          </Link>
          <Link href="/catalog" className="text-black dark:text-white duration-200 hover:text-gray-400">
            Каталог
          </Link>
          <Link href="/contacts" className="text-black dark:text-white duration-200 hover:text-gray-400">
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
};
export { Header };
