"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync theme with local storage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-8 h-8 bg-gray-300 dark:bg-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400 transition-all"
    >
      {/* Icons */}
      <span className="absolute inset-0 flex items-center justify-center transition-opacity">
        {isDarkMode ? (
          <Moon className="w-6 h-6 text-blue-500 transition-transform transform scale-100" />
        ) : (
          <Sun className="w-6 h-6 text-yellow-500 transition-transform transform scale-100" />
        )}
      </span>
    </button>
  );
}