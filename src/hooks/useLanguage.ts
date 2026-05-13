import { useEffect, useState } from "react";
import type { Lang } from "../data/content";

const storageKey = "portfolio-language";

const getInitialLanguage = (): Lang => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(storageKey);
  if (stored === "en" || stored === "es") return stored;
  return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Lang>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
  }, [language]);

  const toggleLanguage = () => setLanguage((current) => (current === "en" ? "es" : "en"));

  return { language, setLanguage, toggleLanguage };
};
