"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={toggleTheme} className="text-sky-400 transition-all duration-500 text-[1.2rem] dark:text-yellow-500">
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitcher;
