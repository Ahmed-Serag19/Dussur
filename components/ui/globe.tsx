"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

// Enhanced coordinate validation function
const isValidCoordinate = (lat: number, lng: number): boolean => {
  const isValid =
    typeof lat === "number" &&
    typeof lng === "number" &&
    !isNaN(lat) &&
    !isNaN(lng) &&
    isFinite(lat) &&
    isFinite(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180;

  if (!isValid) {
    console.warn(`Invalid coordinate: lat=${lat}, lng=${lng}`);
  }

  return isValid;
};

// Validate arc data
const validateArc = (arc: Position, index: number): boolean => {
  const isValid = Boolean(
    isValidCoordinate(arc.startLat, arc.startLng) &&
      isValidCoordinate(arc.endLat, arc.endLng) &&
      arc.color &&
      typeof arc.color === "string" &&
      arc.color.startsWith("#") &&
      typeof arc.order === "number" &&
      !isNaN(arc.order) &&
      typeof arc.arcAlt === "number" &&
      !isNaN(arc.arcAlt) &&
      arc.arcAlt >= 0
  );

  if (!isValid) {
    console.warn(`Invalid arc at index ${index}:`, arc);
  }

  return isValid;
};

export function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<
    | {
        size: number;
        order: number;
        color: (t: number) => string;
        lat: number;
        lng: number;
      }[]
    | null
  >(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [hasError, setHasError] = useState(false);

  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  // Initialize globe with error handling
  useEffect(() => {
    try {
      if (!globeRef.current) {
        console.log("Initializing ThreeGlobe...");
        globeRef.current = new ThreeGlobe();
        setIsInitialized(true);
        console.log("ThreeGlobe initialized successfully");
      }
    } catch (error) {
      console.error("Error initializing ThreeGlobe:", error);
      setHasError(true);
    }
  }, []);

  // Build data and materials after initialization
  useEffect(() => {
    if (globeRef.current && isInitialized && !hasError) {
      try {
        console.log("Building globe data...");
        _buildData();
        _buildMaterial();
      } catch (error) {
        console.error("Error building globe data:", error);
        setHasError(true);
      }
    }
  }, [isInitialized, data, hasError]);

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    try {
      const globeMaterial = globeRef.current.globeMaterial() as unknown as {
        color: Color;
        emissive: Color;
        emissiveIntensity: number;
        shininess: number;
      };
      globeMaterial.color = new Color(globeConfig.globeColor);
      globeMaterial.emissive = new Color(globeConfig.emissive);
      globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
      globeMaterial.shininess = globeConfig.shininess || 0.9;
      console.log("Material built successfully");
    } catch (error) {
      console.error("Error building material:", error);
      setHasError(true);
    }
  };

  const _buildData = () => {
    try {
      console.log("Original data length:", data.length);

      // Enhanced data validation
      const validData = data.filter((arc, index) => validateArc(arc, index));

      console.log("Valid data length:", validData.length);

      if (validData.length === 0) {
        console.warn("No valid data points found");
        setHasError(true);
        return;
      }

      const arcs = validData;
      const points = [];

      for (let i = 0; i < arcs.length; i++) {
        const arc = arcs[i];
        const rgb = hexToRgb(arc.color);

        if (!rgb) {
          console.warn(`Invalid color for arc ${i}:`, arc.color);
          continue;
        }

        // Validate coordinates again before adding points
        if (
          !isValidCoordinate(arc.startLat, arc.startLng) ||
          !isValidCoordinate(arc.endLat, arc.endLng)
        ) {
          console.warn(`Invalid coordinates for arc ${i}:`, arc);
          continue;
        }

        points.push({
          size: defaultProps.pointSize,
          order: arc.order,
          color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
          lat: arc.startLat,
          lng: arc.startLng,
        });
        points.push({
          size: defaultProps.pointSize,
          order: arc.order,
          color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
          lat: arc.endLat,
          lng: arc.endLng,
        });
      }

      console.log("Total points created:", points.length);

      const filteredPoints = points.filter(
        (v, i, a) =>
          a.findIndex((v2) =>
            ["lat", "lng"].every(
              (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
            )
          ) === i
      );

      console.log("Filtered points length:", filteredPoints.length);
      setGlobeData(filteredPoints);
    } catch (error) {
      console.error("Error building data:", error);
      setHasError(true);
    }
  };

  useEffect(() => {
    if (globeRef.current && globeData && isInitialized && !hasError) {
      try {
        console.log("Setting up globe with countries data...");
        globeRef.current
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.7)
          .showAtmosphere(defaultProps.showAtmosphere)
          .atmosphereColor(defaultProps.atmosphereColor)
          .atmosphereAltitude(defaultProps.atmosphereAltitude)
          .hexPolygonColor(() => defaultProps.polygonColor);

        startAnimation();
      } catch (error) {
        console.error("Error setting up globe:", error);
        setHasError(true);
      }
    }
  }, [globeData, isInitialized, hasError]);

  const startAnimation = () => {
    if (!globeRef.current || !globeData || hasError) return;

    try {
      console.log("Starting animation...");

      // Filter data again for safety
      const validData = data.filter((arc, index) => validateArc(arc, index));

      if (validData.length === 0) {
        console.warn("No valid data for animation");
        return;
      }

      console.log("Setting up arcs with", validData.length, "valid arcs");

      globeRef.current
        .arcsData(validData)
        .arcStartLat((d) => (d as { startLat: number }).startLat)
        .arcStartLng((d) => (d as { startLng: number }).startLng)
        .arcEndLat((d) => (d as { endLat: number }).endLat)
        .arcEndLng((d) => (d as { endLng: number }).endLng)
        .arcColor((e: any) => (e as { color: string }).color)
        .arcAltitude((e) => (e as { arcAlt: number }).arcAlt)
        .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
        .arcDashLength(defaultProps.arcLength)
        .arcDashInitialGap((e) => (e as { order: number }).order)
        .arcDashGap(15)
        .arcDashAnimateTime(() => defaultProps.arcTime);

      console.log("Setting up points...");
      globeRef.current
        .pointsData(validData)
        .pointColor((e) => (e as { color: string }).color)
        .pointsMerge(true)
        .pointAltitude(0.0)
        .pointRadius(2);

      console.log("Setting up rings...");
      globeRef.current
        .ringsData([])
        .ringColor((e: any) => (t: any) => e.color(t))
        .ringMaxRadius(defaultProps.maxRings)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod(
          (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
        );

      console.log("Animation setup complete");
    } catch (error) {
      console.error("Error starting animation:", error);
      setHasError(true);
    }
  };

  if (hasError) {
    console.log("Globe component has error, rendering fallback");
    return (
      <div className="flex items-center justify-center h-full w-full">
        <div className="text-center text-gray-500">
          <p>Unable to load interactive globe</p>
          <p className="text-sm">Please refresh the page</p>
        </div>
      </div>
    );
  }

  if (!globeRef.current || !isInitialized) {
    console.log("Globe not ready, rendering null");
    return null;
  }

  console.log("Rendering globe primitive");
  return <primitive object={globeRef.current} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    try {
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      gl.setSize(size.width, size.height);
      gl.setClearColor(0x000000, 0);
      console.log("WebGL renderer configured successfully");
    } catch (error) {
      console.error("Error configuring WebGL renderer:", error);
    }
  }, []);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0x000000, 400, 2000);

  return (
    <Canvas
      className="py-5"
      scene={scene}
      camera={new PerspectiveCamera(50, aspect, 180, 1800)}
      gl={{ antialias: false, alpha: false }}
      dpr={[1, 2]}
    >
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  try {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  } catch (error) {
    console.error("Error converting hex to RGB:", error);
    return null;
  }
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}
