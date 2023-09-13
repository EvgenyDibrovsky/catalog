"use client";
import "../../../../node_modules/flag-icons/css/flag-icons.min.css";
// import { BsChevronDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="flex flex-col mt-10">
        <div className="flex items-center gap-4 py-1 px-3" onClick={() => changeLanguage("en")}>
          <span className="fi fi-us bg-left bg-contain "></span>
          <p>English</p>
        </div>
        <div className="flex items-center gap-4 py-1 px-3" onClick={() => changeLanguage("pl")}>
          <span className="fi fi-pl bg-left bg-contain "></span>
          <p>Poland</p>
        </div>
        <div className="flex items-center gap-4 py-1 px-3" onClick={() => changeLanguage("uk")}>
          <span className="fi fi-ua bg-left bg-contain "></span>
          <p>Ukraine</p>
        </div>
        <div className="flex items-center gap-4 py-1 px-3" onClick={() => changeLanguage("ru")}>
          <span className="fi fi-ru bg-left bg-contain "></span>
          <p>Russian</p>
        </div>
      </div>
    </>
  );
};

export { LanguageSwitcher };
