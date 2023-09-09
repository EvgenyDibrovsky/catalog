import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between fixed h-20 w-full top-0 left-0 right-0 bg-white dark:bg-black shadow-md  ">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/">
            <Image src="/images/edweb.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
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
