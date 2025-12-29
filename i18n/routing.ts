import { defineRouting } from "next-intl/routing";

export const locales = ["ar", "en"];
export const defaultLocale = "ar";

export const routing = defineRouting({
  locales,
  defaultLocale,
});
