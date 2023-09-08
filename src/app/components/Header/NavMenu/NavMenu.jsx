import Link from "next/link";

const NavMenu = () => {
  return (
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
  );
};

export { NavMenu };
