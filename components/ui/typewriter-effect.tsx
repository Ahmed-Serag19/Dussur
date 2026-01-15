"use client";

import { cn } from "@/lib/utils";
import { m, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

// Helper function to detect Arabic text
const isArabic = (text: string): boolean => {
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text);
};

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Check if any word contains Arabic text
  const hasArabic = words.some((word) => isArabic(word.text));
  
  // For Arabic text, keep words intact; for non-Arabic, split into characters
  const wordsArray = words.map((word) => {
    const isWordArabic = isArabic(word.text);
    return {
      ...word,
      text: isWordArabic ? [word.text] : word.text.split(""),
      isArabic: isWordArabic,
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.5,
          delay: stagger(0.3),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <m.div
        ref={scope}
        className="inline"
        style={{
          fontVariantLigatures: hasArabic ? "normal" : "none",
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontFeatureSettings: hasArabic ? '"liga" 1, "calt" 1' : "normal",
          fontFeatureSettings: hasArabic ? '"liga" 1, "calt" 1' : "normal",
        }}
      >
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.isArabic ? (
                // For Arabic, render the whole word to preserve connections
                <m.span
                  initial={{}}
                  key={`word-${idx}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden font-sans`,
                    word.className
                  )}
                  style={{
                    display: "inline",
                    unicodeBidi: "bidi-override",
                    direction: "rtl",
                    fontFamily: "var(--font-ibm-plex-arabic), 'IBM Plex Sans Arabic', sans-serif",
                    fontVariantLigatures: "normal",
                    textRendering: "optimizeLegibility",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                  }}
                >
                  {word.text[0]}
                </m.span>
              ) : (
                // For non-Arabic, split into characters
                word.text.map((char, index) => (
                  <m.span
                    initial={{}}
                    key={`char-${index}`}
                    className={cn(
                      `dark:text-white text-black opacity-0 hidden`,
                      word.className
                    )}
                  >
                    {char}
                  </m.span>
                ))
              )}
              &nbsp;
            </div>
          );
        })}
      </m.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center font-sans",
        className
      )}
      style={{
        fontFamily: hasArabic ? "var(--font-ibm-plex-arabic), 'IBM Plex Sans Arabic', sans-serif" : undefined,
        fontVariantLigatures: hasArabic ? "normal" : "none",
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {renderWords()}
      <m.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></m.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Check if any word contains Arabic text
  const hasArabic = words.some((word) => isArabic(word.text));
  
  // For Arabic text, keep words intact; for non-Arabic, split into characters
  const wordsArray = words.map((word) => {
    const isWordArabic = isArabic(word.text);
    return {
      ...word,
      text: isWordArabic ? [word.text] : word.text.split(""),
      isArabic: isWordArabic,
    };
  });
  
  const renderWords = () => {
    return (
      <div
        style={{
          fontFamily: hasArabic ? "var(--font-ibm-plex-arabic), 'IBM Plex Sans Arabic', sans-serif" : undefined,
          fontVariantLigatures: "normal",
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontFeatureSettings: '"liga" 1, "calt" 1',
          fontFeatureSettings: '"liga" 1, "calt" 1',
        }}
      >
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.isArabic ? (
                // For Arabic, render the whole word to preserve connections
                <span
                  className={cn(
                    `dark:text-white text-black font-sans`,
                    word.className
                  )}
                  style={{
                    display: "inline",
                    unicodeBidi: "bidi-override",
                    direction: "rtl",
                    fontFamily: "var(--font-ibm-plex-arabic), 'IBM Plex Sans Arabic', sans-serif",
                    fontVariantLigatures: "normal",
                    textRendering: "optimizeLegibility",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                  }}
                >
                  {word.text[0]}
                </span>
              ) : (
                // For non-Arabic, split into characters
                word.text.map((char, index) => (
                  <span
                    key={`char-${index}`}
                    className={cn(
                      `dark:text-white text-black`,
                      word.className
                    )}
                  >
                    {char}
                  </span>
                ))
              )}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <m.div
        className="overflow-hidden py-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-md sm:text-lg md:text-xl lg:text:3xl xl:text-5xl font-bold font-sans"
          style={{
            whiteSpace: "nowrap",
            fontFamily: hasArabic ? "var(--font-ibm-plex-arabic), 'IBM Plex Sans Arabic', sans-serif" : undefined,
            fontVariantLigatures: hasArabic ? "normal" : "none",
            textRendering: "optimizeLegibility",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            WebkitFontFeatureSettings: hasArabic ? '"liga" 1, "calt" 1' : "normal",
            fontFeatureSettings: hasArabic ? '"liga" 1, "calt" 1' : "normal",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </m.div>
      <m.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></m.span>
    </div>
  );
};
