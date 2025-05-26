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

      <div className=" border-1 border-blue-500 static flex justify-center">
        <button className="
                    border
                    absolute
                    bottom-0
                    rounded-md
                    font-base
                    w-64
                    py-2.5 
                    px-6
                    mb-16
                    bg--form
                    hover:bg-[#63362d]
                    transition"
          type="submit" name="">Confirmer</button>
      </div>
    </form>

  );
}