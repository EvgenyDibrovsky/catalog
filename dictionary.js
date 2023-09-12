const dictionaries = {
  en: () => import("./languages/en.json").then((r) => r.default),
  pl: () => import("./languages/pl.json").then((r) => r.default),
  uk: () => import("./languages/uk.json").then((r) => r.default),
  ru: () => import("./languages/ru.json").then((r) => r.default),
};

export const getDictionary = (lang) => {
  return dictionaries[lang]();
};
