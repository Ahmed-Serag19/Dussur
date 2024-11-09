"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useLocale, useTranslations } from "next-intl";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 3000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 5,
    initialPosition: { lat: 24.7136, lng: 46.6753 },
    autoRotate: true,
    autoRotateSpeed: 0.01,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const adjustedSampleArcs = [
    {
      order: 1,
      startLat: 24.7136,
      startLng: 46.6753,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 24.7137,
      startLng: 46.6755,
      endLat: 35.6895,
      endLng: 139.6917,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 24.7138,
      startLng: 46.6756,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 24.7135,
      startLng: 46.6754,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.15,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 24.7139,
      startLng: 46.6752,
      endLat: -23.5505,
      endLng: -46.6333,
      arcAlt: 0.25,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 24.7136,
      startLng: 46.6753,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.35,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 24.7134,
      startLng: 46.6751,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 24.7135,
      startLng: 46.6755,
      endLat: 22.5726,
      endLng: 88.3639,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 24.7136,
      startLng: 46.6753,
      endLat: -1.2921,
      endLng: 36.8219,
      arcAlt: 0.45,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 24.7137,
      startLng: 46.6756,
      endLat: 55.7558,
      endLng: 37.6173,
      arcAlt: 0.25,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 24.7136,
      startLng: 46.6753,
      endLat: 19.4326,
      endLng: -99.1332,
      arcAlt: 0.35,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 24.7135,
      startLng: 46.6752,
      endLat: 39.9042,
      endLng: 116.4074,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 24.7138,
      startLng: 46.6753,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 24.7136,
      startLng: 46.6754,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 24.7135,
      startLng: 46.6755,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 24.7137,
      startLng: 46.6756,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.35,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];
  const locale = useLocale();
  const t = useTranslations();
  return (
    <div className="flex flex-row items-center justify-center py-10 h-screen md:h-auto bg-[hsl(var(--background))] dark:bg-[#0a0a0a] relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-x-hidden overflow-y-hidden h-2/3 md:h-[40rem] sm:h-[20rem] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-xl md:text-4xl font-bold text-[hsl(var(--foreground))] dark:text-[hsl(var(--primary))]">
            {t("globeheadline")}
          </h2>
          <p className="text-base md:text-lg font-normal text-[hsl(var(--muted-foreground))] dark:text-[hsl(var(--primary)] max-w-md mt-2 mx-auto">
            {t("globesubheadline")}
          </p>
        </motion.div>
        {/* <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-[hsl(var(--background))] dark:to-[hsl(var(--foreground))] pointer-events-none select-none z-40" /> */}
        <div className="absolute w-full py-3 md:-bottom-20 sm:-bottom-0 h-80 md:h-[30rem] lg:h-full z-10">
          <World data={adjustedSampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
