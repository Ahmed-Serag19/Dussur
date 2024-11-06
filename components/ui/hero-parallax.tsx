"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: StaticImageData;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.link}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.link}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.link}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const words = [
    {
      text: "Get",
    },
    {
      text: "Started",
    },
    {
      text: "With",
    },

    {
      text: "Dussur.",
      className: "text-blue-600 dark:text-blue-600",
    },
  ];
  return (
    <div className="max-w-7xl relative mx-auto py-16 md:py-32 px-6 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-[var(--text-primary)] leading-tight">
        Welcome to Dussur
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[var(--text-secondary)] mt-4">
        Your Partner in Innovation and Technological Excellence
      </h2>
      <p className="max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl mt-4 md:mt-6 text-[var(--text-primary)]">
        Empowering your business with customized, forward-thinking technology
        solutions. We specialize in developing scalable, secure, and efficient
        products to meet the unique needs of our clients in both government and
        enterprise sectors.
      </p>
      <div className="mt-6 sm:mt-8 py-2 sm:py-3 text-[var(--text-primary)] text-md sm:text-md md:text-lg font-medium rounded-lg ease-in-out">
        <TypewriterEffectSmooth words={words} />
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: StaticImageData; // Update to StaticImageData
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-80 w-[30rem] relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-lg">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full  object-right object-cover"
          alt={product.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-60 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
