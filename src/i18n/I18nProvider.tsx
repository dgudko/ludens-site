"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Dictionary, Language } from "./i18n";
import { getDictionary, t, ta, tv } from "./i18n";

type I18nContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  dict: Dictionary;
  t: (key: string) => string;
  ta: (key: string) => string[];
  tv: <T,>(key: string) => T | undefined;
};

const I18nContext = createContext<I18nContextValue | null>(null);

// Persist language choice across reloads.
const STORAGE_KEY = "ludens.lang";
const DEFAULT_LANG: Language = "ru";

function normalizeLanguage(value: string | null | undefined): Language | null {
  if (!value) return null;
  const lowered = value.toLowerCase().split(/[-_]/)[0] ?? "";
  if (lowered === "en") return "en";
  if (lowered === "ru") return "ru";
  return null;
}

function inferLanguage(): Language {
  const browser = normalizeLanguage(
    typeof navigator === "undefined" ? null : navigator.language,
  );
  return browser ?? DEFAULT_LANG;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(DEFAULT_LANG);

  useEffect(() => {
    // Load persisted language or infer it from the browser locale.
    const stored = normalizeLanguage(localStorage.getItem(STORAGE_KEY));
    setLang(stored ?? inferLanguage());
  }, []);

  useEffect(() => {
    // Keep <html lang="..."> in sync for accessibility/SEO hints.
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const dict = useMemo(() => getDictionary(lang), [lang]);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      dict,
      t: (key) => t(dict, key),
      ta: (key) => ta(dict, key),
      tv: (key) => tv(dict, key),
    }),
    [dict, lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return value;
}
