'use client';

import Image from "next/image";
import { playfair } from "@/app/styles/fonts";
import { dataEquipe, View } from "@/app/_lib/equipeTns";

export default function TsQuiSommeNous() {
    const views: View[] = ['CEO', "Conducteur", "Coiffeur"];
    return (
        <section className="border-1 border-blue-500 w-auto min-h-[80vh] px-4 py-2">
            <div className="flex justify-center">
                <h2 className={`${playfair.className} text-3xl`}>Qui sommes nous ?</h2>
            </div>
            <div className="w-full grid grid-cols-3 border-1 border-red-500">
                {views.map(view => (
                    dataEquipe[view].flatMap(person => (
                        <div key={person.nom + person.prenom + person.photo}
                            className={`border-1 border-[#733E34] w-auto px-2 py-3 mt-3 relative rounded-lg mx-auto cursor-pointer text-sm transition duration-300 hover:scale-105`}>
                            <Image
                                alt=""
                                src={`/assets/Personnel${person.photo}`}
                                width={150}
                                height={150}
                                quality={70}
                                className="w-36 h-36 mb-3 object-cover rounded-lg lg:w-40 lg:h-40"
                            />
                            <div className="absolute inset-0  text-white opacity-0 hover:opacity-100 hover:bg-black/60 flex items-center justify-center hover:transition hover:duration-300 rounded-lg">
                                <p className="text-sm px-2 text-center">{person.informations}</p>
                            </div>
                            <div className="text-center">{person.prenom} {person.nom}</div>
                            <div className="text-center">{person.poste}</div>
                        </div>
                    ))))}
            </div>
        </section>
    )
}   