'use client';
import { useState } from "react";
import PsChoixCoupes from "../_components/reservation/ps-choixCoupes";
import DsHoraireAndTruckResa from "../_components/reservation/ds-horaireTruck";
import TsChoixHeureResa from "../_components/reservation/ts-choixHeure";
import { View } from "../_lib/choixCoupes.ps-resa";

export default function Reservation() {
  // const [coupe, setCoupe] = useState<string | null>('Courtes');
  const [horaire, setHoraire] = useState<string | null>(null);
  const [coupe, setCoupe] = useState<View | null>('courtes');
  

  return (
    <>
      {/* <PsChoixCoupes selected={coupe} onSelect={setCoupe} /> */}
      {/* <DsHoraireAndTruckResa /> */}
      <TsChoixHeureResa />
    </>
  );
}