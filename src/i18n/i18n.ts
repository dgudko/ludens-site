import en from "./en.json";
import ru from "./ru.json";

export const dictionaries = { en, ru } as const;

export type Language = keyof typeof dictionaries;
export type Dictionary = (typeof dictionaries)["en"];

export function getDictionary(lang: Language): Dictionary {
  return dictionaries[lang];
}

// Minimal i18n helpers:
// - `t` reads a string by dot-path (returns the key if missing)
// - `ta` reads a string[] by dot-path
// - `tv` reads any value by dot-path (typed)
function getValueByPath(dictionary: unknown, path: string): unknown {
  const parts = path.split(".");
  let current: unknown = dictionary;
  for (const part of parts) {
    if (typeof current !== "object" || current === null) return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

export function t(dictionary: Dictionary, key: string): string {
  const value = getValueByPath(dictionary, key);
  return typeof value === "string" ? value : key;
}

export function ta(dictionary: Dictionary, key: string): string[] {
  const value = getValueByPath(dictionary, key);
  return Array.isArray(value) && value.every((v) => typeof v === "string")
    ? (value as string[])
    : [];
}

export function tv<T>(dictionary: Dictionary, key: string): T | undefined {
  return getValueByPath(dictionary, key) as T | undefined;
}
