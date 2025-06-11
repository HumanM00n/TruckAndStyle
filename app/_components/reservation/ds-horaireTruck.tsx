'use client';

import { useEffect, useState } from 'react';
import HairTruckMap from '../hairTruck/hairTrucksMap';
import { playfair } from '@/app/styles/fonts';

export default function DsHoraireAndTruckResa() {

    const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);

    useEffect(() => {
        fetch('/api/truck')
            .then((res) => res.json())
            .then((data) => setCoords({ latitude: data.latitude, longitude: data.longitude }))
            .catch((err) => console.error('Erreur API:', err));
    }, []);

    return (
        <section className="bg--grisArdoiseMid min-h-[80vh] w-auto text-white">
            <div className="relative flex flex-col mb-3 lg:relative">
                <div className="bg--form w-[375px] h-[200px] flex flex-col items-center px-4 pt-2 mt-4 ml-1 rounded-md 
                md:w-[450px] 
                md:h-[300px] 
                lg:relative
                lg:left-12
                lg:bottom-10
                lg:!pt-7
                ">
                    <div className="mb-4">
                        <h2 className={`${playfair.className} text-xl md:text-2xl`}>Nos horaires</h2>
                    </div>

                    <div className="mb-3">
                        <p className="text-sm font-bold mb-2 md:text-base">Lundi - Mardi - Mercredi - Jeudi - Vendredi</p>
                        <span className="flex justify-center">10h-18h</span>
                    </div>

                    <div>
                        <p className="text-sm font-bold md:text-base">Samedi</p>
                        <span>10h-20h</span>
                    </div>
                </div>

                <div className="w-auto absolute top-60 right-4 lg:right-16 lg:top-48">
                    <div className="w-full md:relative md:bottom-5">
                        <h2 className={`${playfair.className} text-xl md:text-2xl md:text-end`}>Où se trouve le Hair'Truck ?</h2>
                    </div>

                    {/* MAPS */}
                    <div>
                        {coords ? (
                            <HairTruckMap latitude={coords.latitude} longitude={coords.longitude}/>
                        ) : (
                            <p className='text-center'>Chargement de la carte</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}