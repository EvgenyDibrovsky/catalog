import "../../../../node_modules/flag-icons/css/flag-icons.min.css";
import { BsChevronDown } from "react-icons/bs";
const LanguageSwitcher = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="fi fi-us bg-left bg-contain "></span>
          <p>English</p>
        </div>
        <BsChevronDown />
      </div>

      <ul className="flex flex-col mt-10">
        <li className="flex items-center gap-4 py-1 px-3">
          <span className="fi fi-us bg-left bg-contain "></span>
          <p>English</p>
        </li>
        <li className="flex items-center gap-4 py-1 px-3">
          <span className="fi fi-pl bg-left bg-contain "></span>
          <p>Poland</p>
        </li>
        <li className="flex items-center gap-4 py-1 px-3">
          <span className="fi fi-ua bg-left bg-contain "></span>
          <p>Ukraine</p>
        </li>
        <li className="flex items-center gap-4 py-1 px-3">
          <span className="fi fi-ru bg-left bg-contain "></span>
          <p>Russian</p>
        </li>
      </ul>
    </>
  );
};

export { LanguageSwitcher };
