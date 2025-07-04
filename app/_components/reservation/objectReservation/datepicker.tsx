'use client'

import { useState, useRef, useEffect } from "react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Calendar } from "../../componentsShadcn/calendar"
import { Button } from "../../componentsShadcn/button"
import { Popover, PopoverTrigger, PopoverContent } from '@/app/_components/componentsShadcn/popover'
import { cn } from "@/app/_lib/utils"

const horairesWeek = [
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
  "18:00",
]

const horairesWeekEnd = [
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00"
]

export default function DateTimePicker({ onDateTimeChange, }: { onDateTimeChange: (datetime: string) => void }) {
  const [date, setDate] = useState<Date | undefined>()
  const [heure, setHeure] = useState<string | null>(null)
  const [heureActive, setHeureActive] = useState<string | null>(null)
  const [affichage, setAffichage] = useState<string>("Choisir une date")
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSelect = (d: Date | undefined, h: string | null) => {
    if (d) {
      const label = format(d, "EEEE d MMMM, yyyy", { locale: fr })
      setAffichage(label)
    }

    if (d && h) {
      const iso = `${format(d, "yyyy-MM-dd")}${h}:00`
      onDateTimeChange(iso)
      console.log(iso)
    }
  }

  return (
    <div className="space-y-4 text-white">
      {/* Sélecteur de date */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn("w-full justify-start text-left bg--form border-1 border-none text-white hover:bg-[#733e3471] hover:text-white", !date && "text-gray-500 text-opacity-95")}>
            {affichage}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d: any) => {
              setDate(d)
              handleSelect(d, heure)
            }}
            initialFocus
            locale={fr}
            disabled={{ before: new Date(2025, 5, 9), after: new Date(2025, 5, 22) }}
          />
        </PopoverContent>
      </Popover>

      {/* Choix de l'heure */}
      <div className="grid grid-cols-3 gap-2 text-white md:!gap-3">
        {horairesWeek.map((h, i) => (
          <Button
            type="button"
            key={h}
            ref={(el) => {
              buttonRefs.current[i] = el;
            }}
            variant={heure === h ? "default" : "outline"}
            onClick={() => {
              console.log(date, h)
              setHeure(h);
              setHeureActive(h);
              handleSelect(date, h);
              setTimeout(() => {
                buttonRefs.current[i]?.focus();
              }, 0);
            }}
            className={`bg--form border !border-none hover:bg-[#733e3471] hover:text-white focus:bg-[#8C5744] ${heureActive === h ? ' outline outline-white outline-offset-1 bg-[#733e3471]': 'outline-none' }`}
          >
            {h}
          </Button>
        ))}
      </div>
    </div>

  )
}
