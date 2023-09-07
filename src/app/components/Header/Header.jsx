import Link from "next/link";
const Header = () => {
  return (
    <header className="fixed h-40 w-full top-0 left-0 right-0 ">
      <div className="container">
        <Link href="/home">Главная</Link>
        <Link href="/catalog">Каталог</Link>
        <Link href="/contacts">Контакты</Link>
      </div>
    </header>
  );
};
export { Header };
