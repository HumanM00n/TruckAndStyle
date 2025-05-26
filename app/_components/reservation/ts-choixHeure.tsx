'use client';

import Image from "next/image";
import DateTimePicker from "@/app/_components/test"

type Props= {
    date: Date | undefined;
    setDate: (value: Date | undefined) => void;

    heure: string | null;
    setHeure: (value: string | null) => void;

    affichage: string;
    setAffichage: (value: string) => void;
}

export default function TsChoixHeureResa({date, setDate, heure, setHeure, affichage, setAffichage}: Props) {

    const handleDateTime = (datetime: string) => {
        console.log("Créneau choisi :", datetime)
    }

    const resetReservation = () => {
        setDate(undefined);
        setHeure(null);
        setAffichage("Choisir une date")
    }
    

    return (
        <section className="border-1 border-blue-500 w-auto min-h-[80vh] text-white">
            <div className="border flex flex-col">
                <div className=" font-bold">
                    <h2 className="!font-playfair text-2xl">Choix de votre <span className="color--form">Horaire</span></h2>
                </div>

                <div className="border-1 border-[#733E34] w-52 px-2 py-3 mt-3 rounded-lg text-sm mx-auto">
                    <Image
                        alt="Photo de la coiffure selectionnée"
                        src={"/assets/photoCadreResa.png"}
                        width={150}
                        height={150}
                        quality={70}
                        className="w-52"
                    />

                    <div className="grid grid-cols-2 gap-1">
                        <div className="">
                            <span>Buzz cut</span>
                        </div>

                        <div className="relative">
                            <span className="absolute right-0">10€</span>
                        </div>

                        <div className="">
                            <span>30 min</span>
                        </div>

                    </div>

                    <div className="text-center">
                        <button className="cursor-pointer underline" onClick={resetReservation}>Supprimer</button>
                    </div>

                </div>

                <div className="border-1 border-red-500">
                    <div className="">
                        <p className="text-lg">Nom du Hair'Truck</p>
                        <p className="italic text-sm">*HairOnWhells*</p>
                    </div>

                    <div className="">
                        <p>Adresse du Hair'Truck</p>
                        <p className="italic text-sm">*adresse du hair'Truck*</p>
                    </div>

                    <div className="p-6 max-w-xl mx-auto">
                        <DateTimePicker onDateTimeChange={handleDateTime} />
                    </div>


                </div>
            </div>
        </section>
    )
}