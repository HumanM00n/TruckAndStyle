'use client';

import { useEffect, useState } from 'react';
import HairTruckMap from '../hairTruck/hairTrucksMap';

export default function DsHoraireAndTruckResa() {

    const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);

    useEffect(() => {
        fetch('/api/truck')
            .then((res) => res.json())
            .then((data) => setCoords({ latitude: data.latitude, longitude: data.longitude }))
            .catch((err) => console.error('Erreur API:', err));
    }, []);

    return (
        <section className="bg--grisArdoiseMid border-1 border-blue-500 min-h-[80vh] w-auto text-white ">
            <div className="static ml-3">
                <div className="bg--form w-[450px] h-[250px] flex flex-col items-center px-4 absolute pt-2 rounded-md">
                    <div className="mb-4">
                        <h2 className="text-2xl">Nos horaires</h2>
                    </div>

                    <div className="mb-3">
                        <p className="font-bold mb-2">Lundi - Mardi - Mercredi - Jeudi - Vendredi</p>
                        <span className="pl-36">10h-18h</span>
                    </div>

                    <div className="">
                        <p className="font-bold">Samedi</p>
                        <span>10h-20h</span>
                    </div>
                </div>

                <div className="border-1 border-red-500 w-auto absolute bottom-64 right-32">
                    <div className="w-full">
                        <h2 className="text-2xl"> Où se trouve le Hair'Truck ?</h2>
                    </div>

                    {/* MAPS */}
                    {/* <div className="">
                        {coords ? (
                            <HairTruckMap latitude={coords.latitude} longitude={coords.longitude} />
                        ) : (
                            <p className='text-center'>Chargement de la carte</p>
                        )}
                    </div> */}
                </div>
            </div>
        </section>
    )
}