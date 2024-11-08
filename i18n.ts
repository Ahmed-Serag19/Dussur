// import { notFound } from "next/navigation";
// import { getRequestConfig } from "next-intl/server";

// // Can be imported from a shared config
// export const locales = ["ar", "en"];

// export default getRequestConfig(async ({ locale }) => {
//   // Validate that the incoming `locale` parameter is valid
//   if (!locales.includes(locale as any)) notFound();

//   return {
//     messages: (await import(`/messages/${locale}.json`)).default,
//   };
// });
import { getRequestConfig } from "next-intl/server";
import { defineRouting } from "next-intl/routing";

export const locales = ["ar", "en"];
export const defaultLocale = "ar";

export const routing = defineRouting({
  locales,
  defaultLocale,
});

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`/messages/${locale}.json`)).default,
  };
});
