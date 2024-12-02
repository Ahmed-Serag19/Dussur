import { cn } from "@/lib/utils";
import {
  IconCode,
  IconDeviceMobileMessage,
  IconLayout,
  IconBug,
  IconClipboard,
  IconUsers,
} from "@tabler/icons-react";
import { useLocale } from "next-intl";

export function ServicesSection() {
  const locale = useLocale();

  // English services data
  const servicesEn = [
    {
      title: "Web Development",
      description:
        "Building responsive, fast, and scalable websites using the latest technologies.",
      icon: <IconCode />,
    },
    {
      title: "Mobile Development",
      description:
        "Creating intuitive and high-performance mobile applications for both iOS and Android.",
      icon: <IconDeviceMobileMessage />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-centric interfaces that offer seamless user experiences.",
      icon: <IconLayout />,
    },
    {
      title: "QA & Testing",
      description:
        "Ensuring your product works flawlessly with thorough quality assurance and testing.",
      icon: <IconBug />,
    },
    {
      title: "IT Consultancy",
      description:
        "Providing expert guidance and strategic solutions to optimize your IT infrastructure.",
      icon: <IconClipboard />,
    },
    {
      title: "Dedicated Team",
      description:
        "Providing dedicated teams that integrate seamlessly with your project to deliver exceptional results.",
      icon: <IconUsers />,
    },
  ];

  // Arabic services data
  const servicesAr = [
    {
      title: "تطوير المواقع",
      description:
        "بناء مواقع إلكترونية سريعة وقابلة للتوسع باستخدام أحدث التقنيات.",
      icon: <IconCode />,
    },
    {
      title: "تطوير التطبيقات المحمولة",
      description: "إنشاء تطبيقات محمولة عالية الأداء لكل من iOS و Android.",
      icon: <IconDeviceMobileMessage />,
    },
    {
      title: "تصميم واجهة المستخدم ",
      description: "تصميم مواقع  موجهة للمستخدم تقدم تجارب سلسة.",
      icon: <IconLayout />,
    },
    {
      title: "الجودة والاختبار",
      description:
        "ضمان عمل منتجك بشكل مثالي من خلال فحص الجودة واختبار المنتج.",
      icon: <IconBug />,
    },
    {
      title: "استشارات تكنولوجيا المعلومات",
      description:
        "تقديم استشارات استراتيجية وحلول لتحسين بنية تكنولوجيا المعلومات.",
      icon: <IconClipboard />,
    },
    {
      title: "فريق مخصص",
      description:
        "توفير فرق مخصصة تعمل بشكل متكامل مع مشروعك لتحقيق نتائج استثنائية.",
      icon: <IconUsers />,
    },
  ];

  const services = locale === "en" ? servicesEn : servicesAr;

  return (
    <section id="services" className="py-16 bg-[#F5F5F7] dark:bg-black px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 py-8 mb-5">
          {locale === "en"
            ? "Offering a Wide Variety of IT Services"
            : "تقديم مجموعة واسعة من خدمات تكنولوجيا المعلومات"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
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
    <div
      className={cn(
        "flex flex-col items-center text-center p-8 rounded-lg shadow-lg bg-white dark:bg-neutral-700 relative group",
        index % 2 === 0
          ? "bg-neutral-50 dark:bg-neutral-800 hover:bg-white hover:dark:bg-neutral-700 transition duration-150"
          : "bg-white dark:bg-neutral-700 hover:bg-neutral-50 hover:dark:bg-neutral-800 transition duration-150"
      )}
    >
      {/* Hover effect */}
      <div className="opacity-0 group-hover:opacity-50 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-6 text-7xl text-neutral-700 dark:text-neutral-200">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
        <span className="group-hover:translate-x-1 transition duration-100 inline-block">
          {title}
        </span>
      </h3>
      <p className="text-neutral-600 dark:text-neutral-100">{description}</p>
    </div>
  );
};
