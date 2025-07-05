'use client';

import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar } from "../../componentsShadcn/calendar";
import { Button } from "../../componentsShadcn/button";
import { Popover, PopoverTrigger, PopoverContent } from '@/app/_components/componentsShadcn/popover';
import { cn } from "@/app/_lib/utils";

const horairesWeek = [
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
  "18:00",
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const horairesWeekEnd = [
  "10:00", "10:30","11:00","11:30",
  "12:00","12:30","13:00","13:30",
  "14:00","14:30","15:00","15:30", 
  "16:00", "16:30", "17:00", "17:30",
  "18:00","18:30", "19:00", "19:30", "20:00"
];

export default function DateTimePicker({
  onDateTimeChange,
}: {
  onDateTimeChange: (datetime: string) => void;
}) {
  const [date, setDate] = useState<Date | undefined>();
  const [heure, setHeure] = useState<string | null>(null);
  const [affichage, setAffichage] = useState<string>("Choisir une date");

  const handleSelect = (d: Date | undefined, h: string | null) => {
    if (d) {
      const label = format(d, "EEEE d MMMM, yyyy", { locale: fr });
      setAffichage(label);
    }

    if (d && h) {
      const datetime = `${format(d, "yyyy-MM-dd")} ${h}:00`;
      onDateTimeChange(datetime);
      console.log(datetime);
    }
  };

  return (
    <div className="space-y-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left bg--form border-1 border-none text-white hover:bg-[#733e3471]",
              !date && "text-gray-500 text-opacity-95",
              date &&
              "focus:border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-[#ffffff]"
            )}
          >
            {affichage}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              handleSelect(d, heure);
            }}
            initialFocus
            locale={fr}
            disabled={{ before: new Date(2025, 6, 12), after: new Date(2025, 6, 26) }}
          />
        </PopoverContent>
      </Popover>

      <div className="grid grid-cols-3 gap-2 text-white md:!gap-3">
        {horairesWeek.map((h) => (
          <button
            key={h}
            type="button"
            onClick={() => {
              setHeure(h);
              handleSelect(date, h);
            }}
            className={cn(
              "border-1 rounded-md border-white p-2 text-center text-sm text-white transition",
              h === heure ? "bg-[#ad6648]" : "bg-[#733e34]"
            )}
          >
            {h}
          </button>
        ))}
      </div>
    </div>
  );
}
