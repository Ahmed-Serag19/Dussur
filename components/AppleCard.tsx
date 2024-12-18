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
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 text-center dark:text-neutral-200 font-sans">
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
          Vision and Message
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
          contribute to our client&lsquo;s success through quality, innovation,
          and a client-focused approach.
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
          الرؤية و الرسالة
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

export const OurVision = () => {
  const points = [
    "Driving Innovation and Shaping the Future of Technology",
    "Fostering Sustainability and Global Responsibility",
    "Empowering Creativity and Cultivating Talent",
    "Client-Centric Approach to Redefine Success",
    "Building Scalable Systems for a Digital-First World",
    "Ensuring Data Integrity and Advanced Cybersecurity",
  ];

  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <Image
            src="/images/apply-idea.jpg"
            alt="Vision"
            height="500"
            width="500"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>

      {/* Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-neutral-700 dark:text-neutral-100 text-lg md:text-xl"
          >
            <span className="text-red-600 dark:text-red-400 font-bold text-2xl">
              {index + 1}.
            </span>
            <p>{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const OurVisionAr = () => {
  const points = [
    "قيادة الابتكار وتشكيل مستقبل التكنولوجيا",
    "تعزيز الاستدامة والمسؤولية العالمية",
    "تمكين الإبداع وتنمية المواهب",
    "نهج يرتكز على العميل لإعادة تعريف النجاح",
    "بناء أنظمة قابلة للتوسع لعالم رقمي أولًا",
    "ضمان أمن البيانات والحماية السيبرانية المتقدمة",
  ];

  return (
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 max-w-6xl mx-auto text-right"
      dir="rtl"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <Image
            src="/images/apply-idea.jpg"
            alt="رؤيتنا"
            height="500"
            width="500"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>

      {/* Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-neutral-700 dark:text-neutral-100 text-lg md:text-xl"
          >
            <span className="text-red-600 dark:text-red-400 font-bold text-2xl">
              {index + 1}.
            </span>
            <p>{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
// OurMessageEn Component
export const OurMessageEn = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 max-w-6xl mx-auto">
      {/* Image */}
      <div className="image-container mb-6">
        <Image
          src="/images/create-idea.jpg" // Change to your image path
          alt="Our Message"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain rounded-md"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-sky-600 font-bold text-2xl md:text-3xl mb-4">
          Our Message
        </h3>

        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Our Focus:
          </span>{" "}
          We prioritize delivering exceptional software solutions that meet the
          unique needs of our clients. Our focus is on innovation, efficiency,
          and delivering outstanding customer service.
        </p>

        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Our Goal:
          </span>{" "}
          Our goal is to empower businesses with technology that drives growth
          and innovation. We are committed to building long-term relationships
          with our clients through quality and collaboration.
        </p>
      </div>

      {/* Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-100 text-lg md:text-xl">
          <span className="text-red-600 dark:text-red-400 font-bold text-2xl">
            1.
          </span>
          <p>Driving innovation with cutting-edge technology solutions.</p>
        </div>
        <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-100 text-lg md:text-xl">
          <span className="text-red-600 dark:text-red-400 font-bold text-2xl">
            2.
          </span>
          <p>Creating scalable solutions that foster business growth.</p>
        </div>
      </div>

      {/* Image */}
      <div className="image-container mb-6">
        <Image
          src="/images/deliver-idea.jpg" // Change to your image path
          alt="Message Illustration"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain rounded-lg py-5"
        />
      </div>

      {/* Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-100 text-lg md:text-xl">
          <span className="text-red-600 dark:text-red-400 font-bold text-2xl">
            3.
          </span>
          <p>Commitment to continuous improvement and customer satisfaction.</p>
        </div>
        <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-100 text-lg md:text-xl">
          <span className="text-red-600 dark:text-red-400 font-bold text-2xl">
            4.
          </span>
          <p>Delivering projects on time with exceptional quality.</p>
        </div>
      </div>
    </div>
  );
};

// OurMessageAr Component
export const OurMessageAr = () => {
  return (
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 max-w-6xl mx-auto text-right"
      dir="rtl"
    >
      {/* Image */}
      <div className="image-container mb-6">
        <Image
          src="/images/create-idea.jpg"
          alt="رسالتنا"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain rounded-md"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-red-600 font-bold text-2xl md:text-3xl mb-4">
          رسالتنا
        </h3>

        <p className="text-neutral-600 dark:text-neutral-200 text-base md:text-xl font-sans leading-relaxed">
          <span className="font-bold text-neutral-700 dark:text-blue-400">
            تركيزنا:
          </span>{" "}
          نحن نركز على تقديم حلول برمجية استثنائية تلبي احتياجات عملائنا
          الفريدة. تركيزنا الأساسي هو الابتكار والكفاءة وتقديم خدمة عملاء
          استثنائية.
        </p>

        <p className="text-neutral-600 dark:text-neutral-200 text-base md:text-xl font-sans leading-relaxed mt-4">
          <span className="font-bold text-neutral-700 dark:text-blue-400">
            هدفنا:
          </span>{" "}
          هدفنا هو تمكين الأعمال من خلال التكنولوجيا التي تدفع النمو والابتكار.
          نحن ملتزمون ببناء علاقات طويلة الأمد مع عملائنا من خلال الجودة
          والتعاون.
        </p>
      </div>

      {/* Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-100 text-lg md:text-xl">
          <span className="text-red-600 dark:text-red-400 font-bold text-2xl">
            1.
          </span>
          <p>الابتكار من خلال حلول تكنولوجيا حديثة ومتطورة.</p>
        </div>
        <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-100 text-lg md:text-xl">
          <span className="text-red-600 dark:text-red-400 font-bold text-2xl">
            2.
          </span>
          <p>إنشاء حلول قابلة للتوسع تدفع نمو الأعمال.</p>
        </div>
      </div>

      {/* Image */}
      <div className="image-container mb-6 py-5">
        <Image
          src="/images/deliver-idea.jpg"
          alt="رسالة توضيحية"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain rounded-lg"
        />
      </div>

      {/* Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-100 text-lg md:text-xl">
          <span className="text-red-600 dark:text-red-400 font-bold text-2xl">
            3.
          </span>
          <p>الالتزام بتحقيق التحسين المستمر ورضا العملاء.</p>
        </div>
        <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-100 text-lg md:text-xl">
          <span className="text-red-600 dark:text-red-400 font-bold text-2xl">
            4.
          </span>
          <p>تسليم المشاريع في الوقت المحدد مع جودة استثنائية.</p>
        </div>
      </div>
    </div>
  );
};
export const OurProjectsEn = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 max-w-6xl mx-auto">
      {/* Project 1: Deraman */}
      <div className="project py-10">
        <div className="image-container mb-4">
          <Image
            src="/images/deraman.jpg"
            alt="Deraman Project"
            height="500"
            width="500"
            className="h-full w-full mx-auto object-contain rounded-md"
          />
        </div>
        <h4 className="text-sky-600 font-bold text-xl mb-2">Deraman</h4>
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed">
          Deraman is a platform designed for community connection, offering a
          curated selection of female beauticians in Hail city, specializing in
          makeup and hair styling services. The platform allows clients to book
          services based on their preferences for time and location, simplifying
          the process. It also offers specialized services for individuals with
          special needs.
        </p>
      </div>

      {/* Project 2: Gene Health */}
      <div className="project py-10">
        <div className="image-container mb-4">
          <Image
            src="/images/gene.jpg"
            alt="Gene Health Project"
            height="500"
            width="500"
            className="h-full w-full mx-auto object-contain rounded-md"
          />
        </div>
        <h4 className="text-sky-600 font-bold text-xl mb-2">Gene Health</h4>
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed">
          Gene Health offers genetic testing services, using samples and data to
          enhance healthcare quality. The platform supports
          scientifically-backed decisions based on genetic studies, allowing
          users to access their results via login and manage their information
          securely.
        </p>
      </div>

      {/* Project 3: DWash */}
      <div className="project py-10">
        <div className="image-container mb-4">
          <Image
            src="/images/dwash.jpg"
            alt="DWash Project"
            height="500"
            width="500"
            className="h-full w-full mx-auto object-contain rounded-md"
          />
        </div>
        <h4 className="text-sky-600 font-bold text-xl mb-2">DWash</h4>
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed">
          DWash is a mobile car washing system available on both iOS and
          Android. It provides a seamless experience for users who wish to wash
          their cars at their location, with features to select the location and
          manage bookings easily.
        </p>
      </div>

      {/* Project 4: Tawajad */}
      <div className="project py-10">
        <div className="image-container mb-4">
          <Image
            src="/images/tawajad.jpg"
            alt="Tawajad Project"
            height="500"
            width="500"
            className="h-full w-full mx-auto object-contain rounded-md"
          />
        </div>
        <h4 className="text-sky-600 font-bold text-xl mb-2">Tawajad</h4>
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed">
          Tawajad is a smart, secure, and efficient system for managing employee
          services. The platform streamlines processes such as leave requests,
          salary certificates, internal communication, and attendance tracking,
          improving employee experience and operational efficiency.
        </p>
      </div>

      {/* Project 5: Darebaty */}
      <div className="project py-10">
        <div className="image-container mb-4">
          <Image
            src="/images/darebty.jpg"
            alt="Darebaty Project"
            height="500"
            width="500"
            className="h-full w-full mx-auto object-contain rounded-md"
          />
        </div>
        <h4 className="text-sky-600 font-bold text-xl mb-2">Darebaty</h4>
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed">
          Darebaty is a system designed for managing VAT tax services, including
          registration, submitting tax returns, tax consultations, and invoice
          auditing. The system supports users by simplifying tax processes and
          assisting with tax-related inquiries.
        </p>
      </div>
    </div>
  );
};
export const OurProjectsAr = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 max-w-6xl mx-auto">
      {/* مشروع 1 */}
      <div className="project mb-8">
        <div className="image-container py-10">
          <Image
            src="/images/deraman.jpg"
            alt="ديرامان"
            height="500"
            width="500"
            className="h-full w-full mx-auto object-contain rounded-md"
          />
        </div>
        <h4 className="text-sky-600 font-bold text-xl mb-2">ديرمان</h4>
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed">
          ديرمان هو منصة بنية لترابط مجتمعي من نخبة سعودية فريدة، حيث تجمع
          مشاريع التزيين النسائي المختصة في مكياج الوجه وتصفيف الشعر في مدينة
          حائل. توفر المنصة نظامًا تقنيًا يساعد في حجز الخدمات وفقاً لاختيارات
          العميل في الزمان والمكان بكل سهولة وراحة، مع تقديم خدمات مخصصة لذوي
          الهمم.
        </p>
      </div>

      {/* مشروع 2 */}
      <div className="project mb-8">
        <div className="image-container py-10">
          <Image
            src="/images/gene.jpg"
            alt="جيني هيلث"
            height="500"
            width="500"
            className="h-full w-full mx-auto object-contain rounded-md"
          />
        </div>
        <h4 className="text-sky-600 font-bold text-xl mb-2">جين هيلث</h4>
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed">
          جين هيلث يقدم فحصًا وراثيًا مسبقًا للمساهمة في رفع جودة القطاع الصحي
          من خلال اتخاذ قرارات مبنية على دراسات علمية حول العينات المأخوذة. يتيح
          لك المنصة التفاعل من خلال تسجيل الدخول باستخدام الرقم الوطني أو البريد
          الإلكتروني، وتنزيل التطبيق من متجر جوجل بلاي أو آبل.
        </p>
      </div>

      {/* مشروع 3 */}
      <div className="project mb-8">
        <div className="image-container py-10">
          <Image
            src="/images/DWash.jpg"
            alt="غسيل سيارات"
            height="500"
            width="500"
            className="h-full w-full mx-auto object-contain rounded-md"
          />
        </div>
        <h4 className="text-sky-600 font-bold text-xl mb-2">نظام DWash</h4>
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed">
          DWash هو نظام غسيل السيارات المتنقل الذي يسهل عملية حجز غسيل السيارات
          عبر تطبيقات iOS و Android. يتيح للمستخدمين حجز خدمات مغاسل السيارات من
          مواقعهم بكل سهولة، بالإضافة إلى لوحة تحكم لإدارة المستخدمين وحجوزات
          العملاء.
        </p>
      </div>

      {/* مشروع 4 */}
      <div className="project mb-8">
        <div className="image-container py-10">
          <Image
            src="/images/tawajad.jpg"
            alt="تواجد"
            height="500"
            width="500"
            className="h-full w-full mx-auto object-contain rounded-md"
          />
        </div>
        <h4 className="text-sky-600 font-bold text-xl mb-2">تواجد</h4>
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed">
          تواجد هو نظام ذكي يساعد في إدارة الموظفين بكفاءة وسهولة، ويتيح خدمات
          متنوعة تشمل طلب الإجازات، خطابات التعريف بالراتب، بالإضافة إلى الخدمات
          الذاتية والتواصل الداخلي. يمكن للموظفين متابعة سجلات الحضور والمواقع
          المختلفة عبر النظام.
        </p>
      </div>

      {/* مشروع 5 */}
      <div className="project mb-8">
        <div className="image-container py-10">
          <Image
            src="/images/Darebty.jpg"
            alt="مشروع 5"
            height="500"
            width="500"
            className="h-full w-full mx-auto object-contain rounded-md"
          />
        </div>
        <h4 className="text-sky-600 font-bold text-xl mb-2">ضريبتي</h4>
        <p className="text-neutral-600 dark:text-neutral-100 text-base md:text-xl font-sans leading-relaxed">
          ضريبتي هو نظام يقدم جميع الخدمات الضريبية للمسجلين في ضريبة القيمة
          المضافة مثل التسجيل، رفع الإقرارات الضريبية، الاستشارات الضريبية وفحص
          الفواتير. يقدم النظام مساعدة للمكلفين في وقت الفحص لضمان الالتزام
          بالقوانين الضريبية.
        </p>
      </div>
    </div>
  );
};

const data = [
  {
    category: "Why choose us?",
    title: "Vision and Message.",
    src: "/images/why.jpg",
    content: <WhyDusser />,
  },
  {
    category: "Vision",
    title: "Our Vision.",
    src: "/images/our-vision.jpg",
    content: <OurVision />,
  },
  {
    category: "Message",
    title: "Our Message.",
    src: "/images/our-message.jpeg",
    content: <OurMessageEn />,
  },
  {
    category: "Projects",
    title: "Previous Projects.",
    src: "/images/our-projects.jpeg",
    content: <OurProjectsEn />,
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
    category: "الرؤية",
    title: "رؤيتنا للمشاريع",
    src: "/images/our-vision.jpg",
    content: <OurVisionAr />,
  },
  {
    category: "الرسالة",
    title: "رسالتنا",
    src: "/images/our-message.jpeg",
    content: <OurMessageAr />,
  },
  {
    category: "مشاريعنا",
    title: "جزء من مشاريعنا السابقة",
    src: "/images/our-projects.jpeg",
    content: <OurProjectsAr />,
  },
];
