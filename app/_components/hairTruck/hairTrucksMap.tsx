'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// ⬇️  On importe les images depuis le paquet Leaflet
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import icon from 'leaflet/dist/images/marker-icon.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

// ⬇️  On dit à Leaflet d’utiliser ces fichiers
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: shadow,
});

const HairTruckMap = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Détruire l’ancienne carte si besoin
    if (mapRef.current) mapRef.current.remove();

    const map = L.map('map').setView([latitude, longitude], 13);
    mapRef.current = map;

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(`Le 🚚 est ici `)
      .openPopup();
  }, [latitude, longitude]);

  return <div id="map" className="h-[500px] w-full rounded-xl shadow-lg" />;
};

export default HairTruckMap;
