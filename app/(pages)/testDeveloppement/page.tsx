'use client';

import Image from "next/image";
import { dataEquipe, View } from "@/app/_lib/equipeTns";

export default function ContactezNous() {
  const views: View[] = ['CEO', "Conducteur", "Coiffeur"];
  return (
    <section className="min-h-[80vh]">

      <div className="w-full grid grid-cols-3 border-1 border-red-500">
        {views.map(view => (
          dataEquipe[view].flatMap(person => (
            <div
  key={person.nom + person.prenom + person.photo}
  className="group relative border border-[#733E34] w-auto px-2 py-3 mt-3 rounded-lg mx-auto cursor-pointer text-sm transition duration-300 hover:scale-105"
>
  <Image
    alt=""
    src={`/assets/Personnel/${person.photo}`}
    width={150}
    height={150}
    quality={70}
    className="w-36 h-36 mb-3 object-cover rounded-lg lg:w-40 lg:h-40"
  />

  {/* Overlay visible au hover */}
  <div className="absolute inset-0 bg-black/60 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center text-center transition duration-300 rounded-lg px-2">
    {person.informations && (
      <p className="text-sm">{person.informations}</p>
    )}
  </div>

  <div className="text-center">{person.prenom} {person.nom}</div>
  <div className="text-center">{person.poste}</div>
</div>



          ))))}
      </div>

    </section>

  );
}
