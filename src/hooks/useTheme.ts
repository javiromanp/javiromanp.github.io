import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const storageKey = "portfolio-theme";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(storageKey);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(storageKey, theme);

    const metaTheme = document.querySelector<HTMLMetaElement>("meta[name='theme-color']");
    if (metaTheme) {
      metaTheme.content = theme === "dark" ? "#0c1014" : "#f7f4ee";
    }
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
};
