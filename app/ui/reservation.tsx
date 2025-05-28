'use client';
import { useState } from "react";
import PsChoixCoupes from "../_components/reservation/ps-choixCoupes";
import DsHoraireAndTruckResa from "../_components/reservation/ds-horaireTruck";
import TsChoixHeureResa from "../_components/reservation/ts-choixHeure";
import { View } from "../_lib/choixCoupes.ps-resa";

export default function Reservation() {
  const [coupe, setCoupe] = useState<View | null>('courtes');
  const [coupeChoisie, setCoupeChoisie] = useState<string | null>(null);

  const [date, setDate] = useState<Date | undefined>()
  const [heure, setHeure] = useState<string | null>(null)
  const [affichage, setAffichage] = useState<string>("Choisir une date")


  return (
    <form className="">
      {/* <PsChoixCoupes selected={coupe} onSelect={setCoupe} onChoixFinal={setCoupeChoisie} /> */}
      {/* <DsHoraireAndTruckResa /> */}
      <TsChoixHeureResa
        date={date}
        setDate={setDate}
        heure={heure}
        setHeure={setHeure}
        affichage={affichage}
        setAffichage={setAffichage} />

      <div className="border-1 border-blue-500 w-full flex justify-center static">
        <button className="
		                w-64
                    relative
                    py-2.5 
                    px-6
                    top-7
                    mb-16
                    rounded-md
                    font-base
                    bg--form
                    transition
                    hover:bg-[#63362d]
                    md:mb-0"
          type="submit" name="">Confirmer</button>
      </div>
    </form>

  );
}