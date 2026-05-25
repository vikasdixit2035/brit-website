"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AdditiveBlending,
  CanvasTexture,
  LinearFilter,
  Texture,
} from "three";
import type { Group } from "three";

type GeoJsonFeature = {
  properties?: {
    name?: string;
  };
  geometry?: {
    type?: "Polygon" | "MultiPolygon";
    coordinates?: number[][][] | number[][][][];
  };
};

type GeoJsonData = {
  features?: GeoJsonFeature[];
};

const GEOJSON_URL = "/data/world.geojson";
const DEFAULT_HIGHLIGHTED_COUNTRIES = ["USA", "England"];
const MIRROR_HORIZONTAL = true;

function createTexture(canvas: HTMLCanvasElement) {
  const texture = new CanvasTexture(canvas);
  texture.needsUpdate = true;
  texture.generateMipmaps = false;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  return texture;
}

function getProjectedPoint(lon: number, lat: number, width: number, height: number) {
  const u = (((MIRROR_HORIZONTAL ? lon + 180 : 180 - lon)) / 360) * width;
  const v = ((90 - lat) / 180) * height;

  return [u, v] as const;
}

function forEachRing(
  features: GeoJsonFeature[],
  callback: (ring: number[][]) => void
) {
  for (const feature of features) {
    const geometry = feature.geometry;

    if (!geometry?.coordinates) continue;

    if (geometry.type === "Polygon") {
      for (const ring of geometry.coordinates as number[][][]) {
        callback(ring);
      }
    }

    if (geometry.type === "MultiPolygon") {
      for (const polygon of geometry.coordinates as number[][][][]) {
        for (const ring of polygon) {
          callback(ring);
        }
      }
    }
  }
}

function buildMaskTexture(features: GeoJsonFeature[], width = 2048, height = 1024) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.globalAlpha = 1;

  forEachRing(features, (ring) => {
    if (!Array.isArray(ring) || ring.length === 0) return;

    ctx.beginPath();
    ring.forEach(([lon, lat], index) => {
      const [u, v] = getProjectedPoint(lon, lat, width, height);

      if (index === 0) ctx.moveTo(u, v);
      else ctx.lineTo(u, v);
    });
    ctx.closePath();
    ctx.fill();
  });

  return createTexture(canvas);
}

function buildStrokeTexture(
  features: GeoJsonFeature[],
  width = 2048,
  height = 1024,
  lineWidth = 1.5
) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = lineWidth;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  forEachRing(features, (ring) => {
    if (!Array.isArray(ring) || ring.length === 0) return;

    ctx.beginPath();
    ring.forEach(([lon, lat], index) => {
      const [u, v] = getProjectedPoint(lon, lat, width, height);

      if (index === 0) ctx.moveTo(u, v);
      else ctx.lineTo(u, v);
    });
    ctx.stroke();
  });

  return createTexture(canvas);
}

function Globe() {
  const globeRef = useRef<Group>(null);
  const [geoData, setGeoData] = useState<GeoJsonData | null>(null);
  const [highlightedCountries, setHighlightedCountries] = useState(
    DEFAULT_HIGHLIGHTED_COUNTRIES
  );

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const response = await fetch(GEOJSON_URL);
        const data = (await response.json()) as GeoJsonData;

        if (!isMounted) return;

        setGeoData(data);
        setHighlightedCountries(DEFAULT_HIGHLIGHTED_COUNTRIES);
      } catch (error) {
        console.error("Error loading globe data:", error);

        if (isMounted) {
          setGeoData(null);
        }
      }
    };

    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(() => loadData(), { timeout: 2000 });
    } else {
      globalThis.setTimeout(loadData, 100);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.005;
    }
  });

  const { landAlphaTexture, highlightedTexture, bordersTexture } = useMemo(() => {
    if (!geoData?.features?.length) {
      return {
        landAlphaTexture: null as Texture | null,
        highlightedTexture: null as Texture | null,
        bordersTexture: null as Texture | null,
      };
    }

    const highlightedFeatures = geoData.features.filter((feature) =>
      highlightedCountries.includes(feature.properties?.name ?? "")
    );

    return {
      landAlphaTexture: buildMaskTexture(geoData.features),
      highlightedTexture: buildMaskTexture(highlightedFeatures),
      bordersTexture: buildStrokeTexture(geoData.features, 2048, 1024, 0.2),
    };
  }, [geoData, highlightedCountries]);

  useEffect(() => {
    return () => {
      landAlphaTexture?.dispose();
      highlightedTexture?.dispose();
      bordersTexture?.dispose();
    };
  }, [landAlphaTexture, highlightedTexture, bordersTexture]);

  return (
    <group ref={globeRef} position={[0.08, 0.08, 0]} rotation={[0.4, 0, 0]}>
      <mesh>
        <sphereGeometry args={[1, 128, 128]} />
        <meshStandardMaterial color="#20286B" flatShading />
      </mesh>

      {landAlphaTexture && (
        <mesh>
          <sphereGeometry args={[1.002, 128, 128]} />
          <meshStandardMaterial
            alphaMap={landAlphaTexture}
            alphaTest={0.01}
            color="#394a85"
            depthWrite
            metalness={0}
            opacity={0.15}
            roughness={1}
            transparent
          />
        </mesh>
      )}

      {bordersTexture && (
        <>
          <mesh renderOrder={999}>
            <sphereGeometry args={[1.002, 128, 128]} />
            <meshBasicMaterial
              alphaMap={bordersTexture}
              color="#0B0B0B"
              depthTest={false}
              depthWrite={false}
              opacity={1}
              transparent
            />
          </mesh>
          <mesh renderOrder={1000}>
            <sphereGeometry args={[1.003, 128, 128]} />
            <meshBasicMaterial
              alphaMap={bordersTexture}
              blending={AdditiveBlending}
              color="#FFFFFF"
              depthTest={false}
              depthWrite={false}
              opacity={1}
              toneMapped={false}
              transparent
            />
          </mesh>
        </>
      )}

      {highlightedTexture && (
        <mesh>
          <sphereGeometry args={[1.004, 128, 128]} />
          <meshStandardMaterial
            alphaMap={highlightedTexture}
            color="#000000"
            depthWrite={false}
            emissive="#D5DE24"
            emissiveIntensity={2.2}
            emissiveMap={highlightedTexture}
            opacity={1}
            toneMapped={false}
            transparent
          />
        </mesh>
      )}
    </group>
  );
}

export default function HeroGlobe() {
  return (
    <div aria-hidden="true" className="pointer-events-none h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Globe />
      </Canvas>
    </div>
  );
}
