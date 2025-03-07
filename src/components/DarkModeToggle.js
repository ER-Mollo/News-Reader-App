import { useState, useEffect } from "react";

export default function DarkmodeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      <span>{darkMode ? "🌙" : "☀️"}</span>
      <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
}
