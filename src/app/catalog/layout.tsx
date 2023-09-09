import Link from "next/link";
import Section from "../components/Base/Section";
export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section>
    <div className="container">
      <ul className="grid grid-cols-3 gap-6 justify-center">
        <li>
          <Link href="/catalog/developers">Застройщики</Link>
        </li>
        <li>
          <Link href="/catalog/flats">Квартиры</Link>
        </li>
        <li>
          <Link href="/catalog/houses">Дома</Link>
        </li>
        <li>
          <Link href="/catalog/investments">Инвестиции</Link>
        </li>
        <li>
          <Link href="/catalog/plots">Участки</Link>
        </li>
        <li>
          <Link href="/catalog/premises">Посредники</Link>
        </li>
      </ul>
      {children}
    </div>
    </Section>
  );
}
