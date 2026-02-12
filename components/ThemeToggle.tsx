"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "cv-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey);
    const initialTheme: Theme = savedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  };

  return (
    <button
      aria-label="Toggle theme"
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
