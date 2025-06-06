'use client';

import Image from "next/image";
import { playfair } from "@/app/styles/fonts";
import { dataEquipe, View } from "@/app/_lib/equipeTns";

export default function TsQuiSommeNous() {
    const views: View[] = ['CEO', "Coiffeur", "Conducteur"];
    return (
        <section className="border-1 border-blue-500 w-auto min-h-[80vh] px-4 py-2">
            <div className="border flex justify-center">
                <h2 className={`${playfair.className} text-3xl`}>Qui sommes nous ?</h2>
            </div>
            <div className="flex flex-row ">
                {views.map(view => (
                    dataEquipe[view].flatMap(person => (
                        <div key={person.nom + person.prenom} className={`border-1 w-52 px-2 py-3 mt-3 rounded-lg cursor-pointer transition duration-300 hover:scale-105`}>
                            <Image
                                alt={`Image de `}
                                src={"/assets/photoCadreResa.png"}
                                width={150}
                                height={150}
                                quality={70}
                                className="w-full mb-3"
                            />
                            <div className="text-center">{person.prenom} {person.nom}</div>
                            <div className="text-center">{person.poste}</div>
                        </div>
                    ))))}
            </div>
        </section>
    )
} 