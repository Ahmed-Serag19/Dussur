"use client";

import { ContactForm } from "@/components/ContactForm";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Clock, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ContactSection() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 py-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("get_in_touch")}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            {t("contact_description")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Link target="_blank" href="https://wa.me/+966549976777">
            <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center transition duration-300 cursor-pointer hover:dark:bg-slate-900 hover:bg-slate-100">
              <IconBrandWhatsapp className="w-10 h-10 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">
                {t("whatsapp_message")}
              </h3>{" "}
            </div>
          </Link>
          <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Clock className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">{t("business_hours")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("business_days")}
              <br />
              {t("business_time")}
            </p>
          </div>
          <Link target="_blank" href="tel:+966549976777">
            <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer transition duration-300 hover:dark:bg-slate-900 hover:bg-slate-100">
              <Phone className="w-10 h-10 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{t("software_company")}</h3>
            </div>
          </Link>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
