import Link from "next/link";
import { languages } from "../../../i18n/settings";
import { useTranslation } from "../../../i18n";
import "../../../../../node_modules/flag-icons/css/flag-icons.min.css";
import { BsChevronDown } from "react-icons/bs";

const LanguageSwitcher = async ({ lng }) => {
  const { t } = await useTranslation(lng);

  const languageNames = {
    en: t("language.english"),
    pl: t("language.poland"),
    ua: t("language.ukraine"),
    // ru: t("language.russian"),
  };

  const languageFlags = {
    en: "fi fi-us",
    pl: "fi fi-pl",
    ua: "fi fi-uk",
    // ru: "fi fi-ru",
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4">
          <span className={languageFlags[lng]}></span>
          <p>{languageNames[lng]}</p>
        </div>
        <BsChevronDown className="h-4" />
      </div>

      <ul className="flex flex-col items-center gap-4 mt-20">
        {languages
          .filter((l) => l !== lng)
          .map((l) => (
            <li key={l} className="flex items-center gap-4">
              <Link href={`/${l}`}>
                <div className="flex item-center gap-2">
                  <span className={languageFlags[l]}></span>
                  <p>{languageNames[l]}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export { LanguageSwitcher };
