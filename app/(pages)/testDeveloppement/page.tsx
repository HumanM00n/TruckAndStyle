'use client'


import DateTimePicker from "@/app/_components/test"

export default function Reservation() {
  const handleDateTime = (datetime: string) => {
    console.log("Créneau choisi :", datetime)
    // Ex: "2025-05-22T09:30:00"
    // Tu peux setState ici pour l’envoyer à un backend ou affichage
  }

  return (
    <section className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl mb-4">Réserver un créneau</h2>
      <DateTimePicker onDateTimeChange={handleDateTime} />
    </section>
  )
}
