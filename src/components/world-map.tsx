'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Location {
  id: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  role: string;
  description: string;
  team: string;
}

interface WorldMapProps {
  locations: Location[];
}

const createCustomIcon = () => {
  return L.divIcon({
    html: `
      <div style="
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #045CB3 0%, #2E9BFF 100%);
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 4px 12px rgba(4, 92, 179, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: white;
        font-size: 20px;
      ">●</div>
    `,
    className: 'custom-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

export function WorldMap({ locations }: WorldMapProps) {
  const center: LatLngExpression = [20, 0];

  return (
    <div className="w-full rounded-lg overflow-hidden border border-slate-200 shadow-lg">
      <MapContainer
        center={center}
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: '600px', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={createCustomIcon()}
          >
            <Popup>
              <div className="text-sm font-sans">
                <p className="font-bold text-brand-navy text-base mb-2">
                  {location.city}, {location.country}
                </p>
                <p className="text-xs text-brand-blue font-semibold mb-2">
                  {location.role}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-2">
                  {location.description}
                </p>
                <p className="text-xs text-brand-navy font-semibold">
                  {location.team}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
