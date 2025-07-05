'use client';

import Image from "next/image";
import { dataMap, View } from "@/app/_lib/choixCoupes.ps-resa";
import { playfair } from "@/app/styles/fonts";

type Props = {
  selected: View | null;
  onSelect: (value: View) => void;
  onChoixFinal: (coupe: string) => void; 
};

export default function PsChoixCoupes({ selected, onSelect, onChoixFinal  }: Props) {

    return (
        <section className="min-h-[80vh] text-white
        md:min-h-auto">
            <div className="flex flex-column justify-center min-h-[720px] mb-3">

                <div className="">
                    <h1 className={`${playfair.className} text-2xl lg:text-3xl text-center md:relative md:bottom-8`}>Le choix <span className="color--form">de la coupes</span></h1>
                </div>

                <div className="w-full grid grid-cols-2 gap-4 px-4 
                md:flex
                md:justify-center
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

                        <div key={key} onClick={() => onSelect(key)} className={`border-1 w-52 px-2 py-3 mt-3 text-sm rounded-lg cursor-pointer transition duration-300 hover:scale-105 md:text-base
                            ${selected === key ? 'border-white bg-[#733E34]' : 'border-[#733E34]'}`}>
                            <Image
                                alt={`Image de ${label}`}
                                src={"/assets/photoCadreResa.png"}
                                width={150}
                                height={150}
                                quality={70}
                                className="w-full mb-3"
                            />
                            <div className="text-center">{label}</div>
                        </div>
                    ))}
                </div>

                
                {selected && (
                    <div className="w-full p-4
                    relative
                    top-10
                    transition-opacity duration-500 ease-in-out opacity-100
                    md:grid grid-cols-2 gap-12
                    lg:w-[950px]
                    lg:mx-auto
                    ">
                        {dataMap[selected].map((item, index) => (
                            <div key={index} className="mb-4 border-none border-bottom text-sm md:text-base">
                                <div className="flex justify-between mb-4">
                                    <span className="font-bold">{item.coupes}</span>
                                    <span>{item.cout}</span>
                                </div>
                                <div className="flex justify-between items-center pb-2">
                                    <time>{item.temps}</time>
                                    <button type="button" className="btn text-sm text-white rounded bg-[#733E34] px-3 py-1 hover:bg-[#733e3471] 
                                    focus:border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-[#ffffff]"
                                     onClick={() => {
                                        onChoixFinal(item.coupes)
                                     }}
                                    >
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