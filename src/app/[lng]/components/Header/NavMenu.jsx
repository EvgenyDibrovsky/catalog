import Link from "next/link";
import { useTranslation } from "../../../i18n";

const NavMenu = async ({ lng }) => {
  const { t } = await useTranslation(lng);

  return (
    <>
      <nav className="flex gap-4">
        <Link href={`/${lng}`} className="text-black dark:text-white duration-200 hover:text-gray-400">
          {t("nav_neader.nav_item_1")}
        </Link>
        <Link href={`/${lng}/catalog`} className="text-black dark:text-white duration-200 hover:text-gray-400">
          {t("nav_neader.nav_item_2")}
        </Link>
        <Link href={`/${lng}/contacts`} className="text-black dark:text-white duration-200 hover:text-gray-400">
          {t("nav_neader.nav_item_3")}
        </Link>
      </nav>
    </>
  );
};

export { NavMenu };
