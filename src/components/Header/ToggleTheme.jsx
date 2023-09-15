// import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ToggleTheme({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="text-switherTheme transition-all duration-500 text-[1.2rem] dark:text-yellow-500"
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
