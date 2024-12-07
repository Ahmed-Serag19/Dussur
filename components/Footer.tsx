import { useLocale } from "next-intl"; // Import useLocale hook

export function Footer() {
  const locale = useLocale(); // Get the current locale

  return (
    <footer className="bg-background border-t border-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center gap-10">
          <h2 className="text-2xl font-bold text-foreground">
            {locale === "ar" ? "دُسر" : "Dusser"}
          </h2>
          <p className="text-muted-foreground pt-2 text-center sm:text-left">
            {locale === "ar"
              ? "نبني حلول البرمجيات المبتكرة لتحديات الغد."
              : "Building innovative software solutions for tomorrow's challenges."}
          </p>
        </div>

        <div className="pt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              {locale === "ar"
                ? `  دُسر جميع الحقوق محفوظة.©${new Date().getFullYear()}`
                : `© ${new Date().getFullYear()} Dusser. All rights reserved.`}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {locale === "ar"
                  ? "صُنع مع ❤️ بواسطة دُسر"
                  : "Made with ❤️ by Dusser"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
