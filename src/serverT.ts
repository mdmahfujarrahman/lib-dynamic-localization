import i18next, { TFunction } from "i18next";

export const serverT = (
  key: string,
  options: Record<string, any> = {},
  lang: string = "en"
): string => {
  const fixedT: TFunction = i18next.getFixedT(lang);
  const result = fixedT(key, options);
  return typeof result === "string" ? result : "";
};
