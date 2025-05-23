'use client'

import { useState } from "react"
import { format, getWeek, startOfWeek, endOfWeek } from "date-fns"
import { fr } from "date-fns/locale"
import { Calendar } from "./componentsShadcn/calendar"
import {  Popover, PopoverTrigger, PopoverContent } from '@/app/_components/componentsShadcn/popover'
import { Button } from "./componentsShadcn/button"
import { cn } from "../_lib/utils"

const startWeekActive = new Date(2025, 5, 2);
const endWeekActive = new Date(2025, 5, 7);

const startSemaine = startOfWeek(startWeekActive, { weekStartsOn: 1, locale: fr });
const endSemaine = endOfWeek(endWeekActive, { weekStartsOn: 1, locale: fr });

console.log("Début de la semaine :", format(startSemaine, "eeee dd MMMM yyyy", { locale: fr }))
console.log("Fin de la semaine :", format(endSemaine, "eeee dd MMMM yyyy", { locale: fr }))



const horairesWeek = [
  "10:00", "10:30", "11:00",
  "11:30","12:00","12:00","12:30","13:30",
  "14:30", "15:30", "14:00", "14:30", "15:00",
  "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00",
]

const horairesWeekEnd = [
  "10:00", "10:30", "11:00",
  "11:30","12:00","12:00","12:30","13:30",
  "14:30", "15:30", "14:00", "14:30", "15:00",
  "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "19:00", "19:30", "20:00"
]

export default function DateTimePicker({ onDateTimeChange,}: { onDateTimeChange: (datetime: string) => void}) {
  const [date, setDate] = useState<Date | undefined>()
  const [heure, setHeure] = useState<string | null>(null)
  const [affichage, setAffichage] = useState<string>("Choisir une date")

const handleSelect = (d: Date | undefined, h: string | null) => {
  if (d) {
    const label = format(d, "EEEE d MMMM, yyyy", { locale: fr })
    setAffichage(label)  // ✅ Affiche la date dès qu'elle est sélectionnée
  }

  if (d && h) {
    const iso = `${format(d, "yyyy-MM-dd")}T${h}:00`
    onDateTimeChange(iso)
  }
}

  return (
    <div className="space-y-4">
      {/* Sélecteur de date */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn("w-full justify-start text-left", !date && "text-muted-foreground")}>
            {affichage}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d)
              handleSelect(d, heure)
            }}
            initialFocus
            locale={fr}
          />
        </PopoverContent>
      </Popover>

      {/* Choix de l'heure */}
      <div className="grid grid-cols-3 gap-2">
        {horairesWeek.map((h) => (
          <Button
            key={h}
            variant={heure === h ? "default" : "outline"}
            onClick={() => {
              setHeure(h)
              handleSelect(date, h)
            }}
          >
            {h}
          </Button>
        ))}
      </div>
    </div>
  )
}
