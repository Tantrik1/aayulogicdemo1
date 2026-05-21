'use client';

import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

interface Location {
  id: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  role: string;
}

interface GlobeComponentProps {
  locations: Location[];
  selectedLocation: string | null;
}

export default function GlobeComponent({ locations, selectedLocation }: GlobeComponentProps) {
  const globeEl = useRef<any>(null);

  useEffect(() => {
    if (!globeEl.current) return;

    const globe = globeEl.current;

    // Focus on selected location
    if (selectedLocation) {
      const location = locations.find((loc) => loc.id === selectedLocation);
      if (location) {
        try {
          globe.pointOfView(
            {
              lat: location.lat,
              lng: location.lng,
              altitude: 2.5,
            },
            1000
          );
        } catch (e) {
          // Silently fail if pointOfView is not available
        }
      }
    }
  }, [selectedLocation, locations]);

  // Prepare markers
  const markers = locations.map((location) => ({
    lat: location.lat,
    lng: location.lng,
    size: selectedLocation === location.id ? 1.2 : 0.8,
    color: selectedLocation === location.id ? '#045CB3' : '#2E9BFF',
    name: location.city,
  }));

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden border border-slate-200 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100">
      <Globe
        ref={globeEl}
        globeImageUrl="https://www.unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="https://www.unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(255, 255, 255, 0.01)"
        pointsData={markers}
        pointAltitude={0}
        pointRadius={(d: any) => d.size * 0.8}
        pointColor={(d: any) => d.color}
        pointLabel={(d: any) => d.name}
        onPointHover={() => {}}
        enablePointerInteraction={true}
        width={500}
        height={500}
      />

      {/* Overlay info */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Interactive 3D Globe
        </p>
        <p className="text-xs text-slate-600 mt-1">
          Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  );
}
