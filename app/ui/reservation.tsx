'use client';
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import PsChoixCoupes from "../_components/reservation/ps-choixCoupes";
import DsHoraireAndTruckResa from "../_components/reservation/ds-horaireTruck";
import TsChoixHeureResa from "../_components/reservation/ts-choixHeure";
import SuccessBooking from "../_components/reservation/objectReservation/SuccessRedirect";
import { View } from "../_lib/choixCoupes.ps-resa";
import { format } from "date-fns";

export default function Reservation() {
  const { data: session, status } = useSession();
  const userId = session?.user.id;

  const [coupe, setCoupe] = useState<View | null>('courtes');
  const [coupeChoisie, setCoupeChoisie] = useState<string | null>(null);

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [heure, setHeure] = useState<string | null>(null);
  const [affichage, setAffichage] = useState<string>("Choisir une date");

  const [isLoading, setIsLoading] = useState(true)
  const [responseMessage, setResponseMessage] = useState("");
  const [isReservationValid, setIsReservationValid] = useState(false)

  const handleDateTimeChange = (datetime: string) => {
    const [dateStr, heureStr] = datetime.split(' ');
    setDate(new Date(dateStr));
    setHeure(heureStr.slice(0, 5));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !heure || !coupeChoisie || !userId) {
      alert("Informations manquantes !");
      return;
    }

    const datePart = format(date!, "yyyy-MM-dd");
    const timePart = heure;
    const datetime = `${datePart} ${timePart}`;

    console.log("datetime:", datetime);

    try {
      const res = await fetch("api/booking/", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ userId, coupeChoisie, datetime })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
      } else {
        setCoupeChoisie(null);
        setDate(undefined);
        setHeure(null);
        setAffichage("Choisir une date");
        setIsReservationValid(true);
      }
    } catch (error) {
      console.error('Erreur réseau ou serveur :', error);
      alert("Une erreur est survenue avec le serveur.");
    }
  };


  if (isReservationValid) {
    return (
      <SuccessBooking />
    );
  }

  if (status === "authenticated") {
    return (
      <form onSubmit={handleSubmit}>
        <PsChoixCoupes selected={coupe} onSelect={setCoupe} onChoixFinal={setCoupeChoisie} />
        <DsHoraireAndTruckResa />
        <TsChoixHeureResa
          coupeChoisie={coupeChoisie}
          setCoupeChoisie={setCoupeChoisie}
          date={date}
          setDate={setDate}
          heure={heure}
          setHeure={setHeure}
          affichage={affichage}
          setAffichage={setAffichage}
          onDateTimeChange={handleDateTimeChange}
        />
        <div className="w-full flex justify-center relative md:bottom-24">
          <button
            className="w-64 py-2.5 px-6 relative top-7 mb-16 rounded-md font-base bg--form transition hover:bg-[#63362d] md:mb-0 md:top-0 md:left-6 lg:left-9"
            type="submit"
          >
            Confirmer
          </button>
        </div>
      </form>
    );
  } else if (status === "unauthenticated")  {
      return (
    <form onSubmit={handleSubmit}>
      <PsChoixCoupes selected={coupe} onSelect={setCoupe} onChoixFinal={setCoupeChoisie} />
      <DsHoraireAndTruckResa />
      <TsChoixHeureResa
        coupeChoisie={coupeChoisie}
        setCoupeChoisie={setCoupeChoisie}
        date={date}
        setDate={setDate}
        heure={heure}
        setHeure={setHeure}
        affichage={affichage}
        setAffichage={setAffichage}
        onDateTimeChange={handleDateTimeChange}
      />
      <div className="w-full flex justify-center relative md:bottom-24">
        <Link href={"/connexion"} className="w-72 py-2.5 pl-3 relative top-7 mb-16 rounded-md text-sm bg--form transition hover:bg-[#63362d] md:ml-12 md:mb-0 md:top-0 md:left-6
                    lg:ml-0
                    lg:text-base
                    lg:pl-4
                    lg:w-[340px]
                    lg:left-9">
          Veuillez vous connecter pour réserver
        </Link> 
      </div>
    </form>
  );
  }


}
