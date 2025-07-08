'use client';
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import PsChoixCoupes from "../_components/reservation/ps-choixCoupes";
import DsHoraireAndTruckResa from "../_components/reservation/ds-horaireTruck";
import TsChoixHeureResa from "../_components/reservation/ts-choixHeure";
import { View } from "../_lib/choixCoupes.ps-resa";

export default function Reservation() {
  const { status } = useSession();

  const [coupe, setCoupe] = useState<View | null>('courtes');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [coupeChoisie, setCoupeChoisie] = useState<string | null>(null);

  const [date, setDate] = useState<Date | undefined>()
  const [heure, setHeure] = useState<string | null>(null)
  const [affichage, setAffichage] = useState<string>("Choisir une date")

  if (status === "authenticated") {
    return (
      <form className="">
        <PsChoixCoupes selected={coupe} onSelect={setCoupe} onChoixFinal={setCoupeChoisie} />
        <DsHoraireAndTruckResa />
        <TsChoixHeureResa
          date={date}
          setDate={setDate}
          heure={heure}
          setHeure={setHeure}
          affichage={affichage}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          setAffichage={setAffichage} coupeChoisie={null} setCoupeChoisie={function (value: string | null): void {
            throw new Error("Function not implemented.");
          } } />

        <div className="w-full flex justify-center relative md:bottom-24">
          <button className="
		                w-64
                    py-2.5 
                    px-6
                    relative
                    top-7
                    mb-16
                    rounded-md
                    font-base
                    bg--form
                    transition
                    hover:bg-[#63362d]
                    md:mb-0
                    md:top-0
                    md:left-6
                    lg:left-9"
            type="submit" name="">Confirmer</button>
        </div>
      </form>

    );
  } else if (status === "unauthenticated") {
    return (
      <form className="">
        <PsChoixCoupes selected={coupe} onSelect={setCoupe} onChoixFinal={setCoupeChoisie} />
        <DsHoraireAndTruckResa />
        <TsChoixHeureResa
          date={date}
          setDate={setDate}
          heure={heure}
          setHeure={setHeure}
          affichage={affichage}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          setAffichage={setAffichage} coupeChoisie={null} setCoupeChoisie={function (value: string | null): void {
            throw new Error("Function not implemented.");
          } } />

        <div className="w-full flex justify-center relative md:bottom-24">
          <Link
            href="/connexion"
            className="
                    disabled
		                w-72
                    py-2.5 
                    pl-3
                    relative
                    top-7
                    mb-16
                    rounded-md
                    text-sm
                    bg--form
                    transition
                    hover:bg-[#63362d]
                    md:ml-12
                    md:mb-0
                    md:top-0
                    md:left-6
                    lg:ml-0
                    lg:text-base
                    lg:pl-4
                    lg:w-[340px]
                    lg:left-9">Veuillez vous connecter pour réserver</Link>
        </div>
      </form>
    )
  }
}
