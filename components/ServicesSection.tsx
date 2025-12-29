"use client";

import {
  IconCode,
  IconDeviceMobileMessage,
  IconLayout,
  IconBug,
  IconClipboard,
  IconUsers,
} from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { m } from "framer-motion";

export function ServicesSection() {
  const locale = useLocale();

  // English services data
  const servicesEn = [
    {
      title: "Web Development",
      description:
        "Building responsive, fast, and scalable websites using the latest technologies.",
      icon: <IconCode className="w-8 h-8" />,
    },
    {
      title: "Mobile Development",
      description:
        "Creating intuitive and high-performance mobile applications for both iOS and Android.",
      icon: <IconDeviceMobileMessage className="w-8 h-8" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-centric interfaces that offer seamless user experiences.",
      icon: <IconLayout className="w-8 h-8" />,
    },
    {
      title: "QA & Testing",
      description:
        "Ensuring your product works flawlessly with thorough quality assurance and testing.",
      icon: <IconBug className="w-8 h-8" />,
    },
    {
      title: "IT Consultancy",
      description:
        "Providing expert guidance and strategic solutions to optimize your IT infrastructure.",
      icon: <IconClipboard className="w-8 h-8" />,
    },
    {
      title: "Dedicated Team",
      description:
        "Providing dedicated teams that integrate seamlessly with your project to deliver exceptional results.",
      icon: <IconUsers className="w-8 h-8" />,
    },
  ];

  // Arabic services data
  const servicesAr = [
    {
      title: "تطوير المواقع",
      description:
        "بناء مواقع إلكترونية سريعة وقابلة للتوسع باستخدام أحدث التقنيات.",
      icon: <IconCode className="w-8 h-8" />,
    },
    {
      title: "تطوير التطبيقات المحمولة",
      description: "إنشاء تطبيقات محمولة عالية الأداء لكل من iOS و Android.",
      icon: <IconDeviceMobileMessage className="w-8 h-8" />,
    },
    {
      title: "تصميم واجهة المستخدم ",
      description: "تصميم مواقع  موجهة للمستخدم تقدم تجارب سلسة.",
      icon: <IconLayout className="w-8 h-8" />,
    },
    {
      title: "الجودة والاختبار",
      description:
        "ضمان عمل منتجك بشكل مثالي من خلال فحص الجودة واختبار المنتج.",
      icon: <IconBug className="w-8 h-8" />,
    },
    {
      title: "استشارات تكنولوجيا المعلومات",
      description:
        "تقديم استشارات استراتيجية وحلول لتحسين بنية تكنولوجيا المعلومات.",
      icon: <IconClipboard className="w-8 h-8" />,
    },
    {
      title: "فريق مخصص",
      description:
        "توفير فرق مخصصة تعمل بشكل متكامل مع مشروعك لتحقيق نتائج استثنائية.",
      icon: <IconUsers className="w-8 h-8" />,
    },
  ];

  const services = locale === "en" ? servicesEn : servicesAr;

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-black px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <m.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 mb-6">
            {locale === "en"
              ? "Offering a Wide Variety of IT Services"
              : "تقديم مجموعة واسعة من الخدمات التقنية"}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
             {locale === "en" 
               ? "We deliver cutting-edge solutions tailored to elevate your business performance and user experience."
               : "نقدم حلولاً متطورة مصممة خصيصاً لرفع مستوى أداء عملك وتحسين تجربة المستخدم."}
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="h-full relative overflow-hidden bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-2xl hover:border-primary/50 dark:hover:border-primary/50">
        
        {/* Hover Highlight Gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col h-full items-start text-start">
           <div className="mb-6 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800 text-primary dark:text-white group-hover:scale-110 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-neutral-700 dark:group-hover:text-white transition-all duration-300 shadow-sm">
             {icon}
           </div>
           
           <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-primary transition-colors duration-300">
             {title}
           </h3>
           
           <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
             {description}
           </p>
        </div>
      </div>
    </m.div>
  );
};
