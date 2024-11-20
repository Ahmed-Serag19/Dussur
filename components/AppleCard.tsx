"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useLocale, useTranslations } from "next-intl";

export function AppleCardsCarousel() {
  const locale = useLocale();
  const t = useTranslations();
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const arabicCards = arData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {t("whyDussur")}
      </h2>
      {locale === "en" ? (
        <Carousel items={cards} />
      ) : (
        <div dir="rtl">
          <Carousel items={arabicCards} />
        </div>
      )}
    </div>
  );
}
export const WhyDusser = () => {
  return (
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 max-w-4xl mx-auto"
      dir="ltr"
    >
      {/* Image */}
      <div className="image-container mb-6">
        <Image
          src="/images/why-dussur.jpg"
          alt="Why Dussur"
          height="500"
          width="500"
          className=" h-full w-full mx-auto object-contain rounded-md"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-sky-600 font-bold text-2xl md:text-3xl mb-4">
          Vision and Mission
        </h3>
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Our Vision:
          </span>{" "}
          To create a revolution in the digital landscape through innovative
          programming solutions. We aspire to be a global leader in the IT
          industry by setting new benchmarks for excellence and customer
          satisfaction.
        </p>
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Our Mission:
          </span>{" "}
          To provide top-tier IT services, including development and beyond,
          tailored to meet the unique needs of our clients. We aim to offer
          seamless, scalable, and sustainable solutions that drive efficiency
          and growth. Our commitment is to build long-term partnerships that
          contribute to our clients' success through quality, innovation, and a
          client-focused approach.
        </p>
      </div>
    </div>
  );
};

export const WhyDusserAr = () => {
  return (
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 max-w-4xl mx-auto"
      dir="rtl"
    >
      {/* Image */}
      <div className="image-container mb-6">
        <Image
          src="/images/why-dussur.jpg"
          alt="لماذا دسر"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain rounded-md"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-red-600 font-bold text-2xl md:text-3xl py-7">
          الرؤية والرسالة
        </h3>
        <p className="text-neutral-600 dark:text-neutral-200 text-base md:text-xl font-sans py-3 leading-relaxed">
          <span className="font-bold text-neutral-700 dark:text-blue-400">
            رؤيتنا:
          </span>{" "}
          هي إحداث ثورة في المشهد الرقمي من خلال حلول برمجية مبتكرة. نطمح إلى أن
          نكون شركة رائدة عالميًا في صناعة تكنولوجيا المعلومات، ووضع معايير
          جديدة للتميز ورضا العملاء.
        </p>
        <p className="text-neutral-600 dark:text-neutral-200 text-base md:text-xl font-sans leading-relaxed mt-4">
          <span className="font-bold text-neutral-700 dark:text-blue-400">
            رسالتنا:
          </span>{" "}
          هي تقديم خدمات تكنولوجيا معلومات من الدرجة الأولى تشمل التطوير وغيرها،
          ومصممة خصيصًا لتلبية الاحتياجات الفريدة لعملائنا. نحن نهدف إلى توفير
          حلول برمجية سلسة وقابلة للتطوير ومستدامة تدفع الكفاءة والنمو. نسعى إلى
          إقامة شراكات طويلة الأمد تساهم في نجاح عملائنا من خلال التزامنا
          بالجودة والإبداع والتركيز على العميل.
        </p>
      </div>
    </div>
  );
};

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/images/apply-idea.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Why choose us?",
    title: "Our Message and Vision",
    src: "/images/why.jpg",
    content: <WhyDusser />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/images/apply-idea.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/images/apply-idea.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/images/apply-idea.jpg",
    content: <DummyContent />,
  },
];
const arData = [
  {
    category: "لماذا تختارنا؟",
    title: "الرؤية و الرسالة",
    src: "/images/why.jpg",
    content: <WhyDusserAr />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/images/apply-idea.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/images/apply-idea.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/images/apply-idea.jpg",
    content: <DummyContent />,
  },
];
