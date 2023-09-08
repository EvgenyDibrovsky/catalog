import { BsSun, BsMoon } from "react-icons/bs";

const ToggleTheme = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="mr-auto text-switherTheme transition-all duration-500 text-[1.5rem] dark:text-orange-400" title="Переключатель темы">
      {theme === "light" ? <BsSun className="duration-1000 hover:rotate-[10deg]" /> : <BsMoon className="duration-1000 hover:rotate-[10deg]" />}
    </button>
  );
};
export { ToggleTheme };
