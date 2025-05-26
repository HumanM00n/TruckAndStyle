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
    <form>
      <PsChoixCoupes selected={coupe} onSelect={setCoupe} onChoixFinal={setCoupeChoisie}/>
      {/* <DsHoraireAndTruckResa /> */}
      <TsChoixHeureResa 
        date={date}
        setDate={setDate}
        heure={heure}
        setHeure={setHeure}
        affichage={affichage}
        setAffichage={setAffichage}/>
    </form>
  );
}