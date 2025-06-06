"use client";

import Image from "next/image";
import { View } from "@/app/_lib/choixCoupes.ps-resa";
import { playfair } from "@/app/styles/fonts";

export default function PsTruckAndPicture() {
    return (

        /* SECTION NOTRE TRUCK + COUPES PROPOSEES  */
        <section className="min-h-[80vh]">
            <div className="w-full">
                <div className="flex justify-center md:w-1/2 md:justify-start md:pl-9 lg:pl-10 xl:pl-11">
                    <h1 className={`${playfair.className} text-2xl md:text-3xl font-semibold`}>Notre <span className="color--form">Truck</span></h1>
                </div>

                {/* IMAGE DU CAMION + LIBELLE */}
                <div className="w-full flex flex-col items-center justify-center px-3 py-2 relative">

                    {/* A FAIRE PLUS TARD */}

                    {/* <div className="w-auto absolute origin-center rotate-[45deg]  -top-[3.8rem]"> */}
                    {/* <FontAwesomeIcon icon={faPlay} /> */}
                    {/* border-1 border-pink-500  */}
                    {/* <FontAwesomeIcon icon={faCaretLeft} size="10x" className="border-1 border-pink-500 absolute right-[402px] bottom-[133px] text-[20rem] rotate-[45deg] z-10 color--form" /> */}
                    {/* </div> */}

                    {/* border-1 border-purple-500 */}
                    <div className="border-2 border-[#733E34] w-auto px-3 py-2 rounded-md z-50">
                        <div className="">
                            <Image
                                src={"/assets/truck.png"}
                                alt="Photo de notre Truck"
                                height={150}
                                width={150}
                                quality={90}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="text-center mt-3">

                            <h2 className={`${playfair.className} text-xl font-[550] mb-2`}>Le hair&apos;truck</h2>
                            <p className="text-left text-sm"> Le hair’truck, c’est un salon de coiffure mobile pensé pour celles et ceux qui veulent un service professionnel sans avoir 
                                à se déplacer. Que ce soit à domicile, sur le lieu de travail ou lors d’un événement, Truck’n Style propose des prestations rapides, soignées et adaptées à
                                ton emploi du temps. Une solution pratique et flexible pour rester bien coiffé, même avec un planning chargé.</p>
                        </div>
                    </div>
                </div>

                {/* IMAGES DES COUPES */}
                <div className="w-full grid grid-cols-2 gap-x-3 gap-y-0 px-4 pb-5
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

                        <div key={key} className="w-52 px-2 py-3 mt-3 rounded-lg cursor-pointer transition duration-300 hover:scale-105 bg--form">
                            <Image
                                alt={`Image de ${label}`}
                                src={"/assets/photoCadreResa.png"}
                                width={150}
                                height={150}
                                quality={70}
                                className="w-full mb-3"
                            />
                            <div className="text-center text-sm">{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}