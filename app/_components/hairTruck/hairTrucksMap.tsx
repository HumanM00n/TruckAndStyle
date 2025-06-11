'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import icon from 'leaflet/dist/images/marker-icon.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

// Précise à Leaflet d’utiliser ces fichiers
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
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(`Le💈🚚 se situe ici !`)
      .openPopup();
  }, [latitude, longitude]);

  return <div id="map" className="h-[375px] w-[375px] rounded-xl shadow-lg 
  lg:w-[500px] lg:h-[425px] xl:w-[650px] 2xl:w-[875px] 2xl:h-[500px]"/>;
};

export default HairTruckMap;
