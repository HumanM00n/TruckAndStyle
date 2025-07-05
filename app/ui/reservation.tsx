'use client';
import { useState } from "react";
import PsChoixCoupes from "../_components/reservation/ps-choixCoupes";
import DsHoraireAndTruckResa from "../_components/reservation/ds-horaireTruck";
import TsChoixHeureResa from "../_components/reservation/ts-choixHeure";
import { View } from "../_lib/choixCoupes.ps-resa";
import { useSession } from "next-auth/react";
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
  const [ isReservationValid, setIsReservationValid ] = useState(false)

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
        alert(data.message);
        setCoupeChoisie(null);
        setDate(undefined);
        setHeure(null);
        setAffichage("Choisir une date");
      }
    } catch (error) {
      console.error('Erreur réseau ou serveur :', error);
      alert("Une erreur est survenue avec le serveur.");
    }
  };

  if (isReservationValid) {
    return (

    );
  }

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
}
