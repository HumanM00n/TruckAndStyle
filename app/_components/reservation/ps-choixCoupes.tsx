'use client';

import Image from "next/image";
import { useState } from "react";
import { dataMap, Coupe, View } from "@/app/_lib/choixCoupes.ps-resa";

export default function PsChoixCoupes() {
    const [selected, setSelected] = useState<View | null>('courtes');

    return (
        <section className="border-1 border-blue-500 w-auto h-auto text-white">
            <div className="flex flex-column">

                <div className="">
                    <h1 className="text-3xl text-center">Le choix <span className="color--form">de la coupes</span></h1>
                </div>

                <div className="w-full grid grid-cols-2 gap-4 px-4 mb-3
                md:flex
                md:text-sm
                lg:text-base
                lg:px-0
                lg:justify-center
                ">
                    {([
                        { key: 'courtes', label: 'Coupes courtes' },
                        { key: 'mi-longues', label: 'Coupes mi-longues' },
                        { key: 'degrades', label: 'Coupes dégradés' },
                        { key: 'tendances', label: 'Coupes tendances' },
                    ] as { key: View; label: string }[]).map(({ key, label }) => (

                        <div key={key} onClick={() => setSelected(key)} className="border-1 border-[#733E34] w-52 px-2 py-3 mt-3 rounded-lg transition duration-300 hover:scale-105">
                            <Image
                                alt={`Image de ${label}`}
                                src={"/assets/photoCadreResa.png"}
                                width={150}
                                height={150}
                                quality={70}
                                className="w-full mb-3"
                            />
                            <span className="relative left-7 md:left-4">Coupes courtes</span>
                        </div>
                    ))}
                </div>

                {selected && (
                    <div className="border w-full max-w-lg p-4">
                        {dataMap[selected].map((item, index) => (
                            <div key={index} className="mb-4 p-4 border rounded-md">
                                <div className="flex justify-between mb-2">
                                    <span className="font-bold">{item.coupes}</span>
                                    <span>{item.cout}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>{item.temps}</span>
                                    <button className="btn text-sm text-white rounded bg-[#733E34] px-3 py-1 hover:bg-[#733e3471]">
                                        Réserver cette coupe
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}