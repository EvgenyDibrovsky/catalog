import Link from "next/link";
import Section from "../components/Base/Section";
export default function CatalogLayout({ children }) {
  return (
    <Section>
      <div className="container">
        <ul className="grid grid-cols-3 gap-6 mb-20">
          <li className="flex justify-center items-center shadow-md dark:shadow-sky-400 hover:shadow-lg">
            <Link href="/catalog/developers" className="p-10 w-full flex justify-center items-center">
              Застройщики
            </Link>
          </li>
          <li className="flex justify-center items-center shadow-md dark:shadow-sky-400 hover:shadow-lg">
            <Link href="/catalog/flats" className="p-10 w-full flex justify-center items-center">
              Квартиры
            </Link>
          </li>
          <li className="flex justify-center items-center shadow-md dark:shadow-sky-400 hover:shadow-lg">
            <Link href="/catalog/houses" className="p-10 w-full flex justify-center items-center">
              Дома
            </Link>
          </li>
          <li className="flex justify-center items-center shadow-md dark:shadow-sky-400 hover:shadow-lg">
            <Link href="/catalog/investments" className="p-10 w-full flex justify-center items-center">
              Инвестиции
            </Link>
          </li>
          <li className="flex justify-center items-center shadow-md dark:shadow-sky-400 hover:shadow-lg">
            <Link href="/catalog/plots" className="p-10 w-full flex justify-center items-center">
              Участки
            </Link>
          </li>
          <li className="flex justify-center items-center shadow-md dark:shadow-sky-400 hover:shadow-lg">
            <Link href="/catalog/premises" className="p-10 w-full flex justify-center items-center">
              Посредники
            </Link>
          </li>
        </ul>
        {children}
      </div>
    </Section>
  );
}
