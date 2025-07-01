'use client';

import Image from "next/image";
import DateTimePicker from "./objectReservation/datepicker";
import { playfair } from "@/app/styles/fonts";

type Props = {
    date: Date | undefined;
    setDate: (value: Date | undefined) => void;
    heure: string | null;
    setHeure: (value: string | null) => void;
    affichage: string;
    setAffichage: (value: string) => void;
    coupeChoisie: string | null;
    setCoupeChoisie: (value: string | null) => void;
};

export default function TsChoixHeureResa({ date, setDate, heure, setHeure, affichage, setAffichage, coupeChoisie, setCoupeChoisie }: Props) {

    const handleDateTime = (datetime: string) => {
        console.log("Créneau choisi :", datetime)
    }

    const resetReservation = () => {
        setDate(undefined);
        setHeure(null);
        setAffichage("Choisir une date");
        setCoupeChoisie(null);
    };

    return (
        <section className="w-auto min-h-[80vh] text-white">
            <div className="w-full flex flex-col md:flex-row md:justify-between">
                <div className="mt-3 font-bold md:hidden">
                    <h2 className={`${playfair.className} text-xl pl-2 md:text-2xl `}>Choix de votre <span className="color--form">Horaire</span></h2>
                </div>

                {coupeChoisie && (
                    <div className="md:w-1/3">
                        <div className="border-1 border-[#733E34] w-52 px-2 py-3 mt-3 rounded-lg text-sm mx-auto 
                    xl:w-60
                    xl:text-[15px]
                    2xl:h-96
                    2xl:w-[300px]">
                            <Image
                                alt="Photo de la coiffure selectionnée"
                                src={"/assets/photoCadreResa.png"}
                                width={150}
                                height={150}
                                quality={70}
                                className="w-52 mx-auto md:w-40 2xl:w-[400px] 2xl:mb-3"
                            />

                            <div className="grid grid-cols-2 gap-2">
                                <div className="">
                                    <span>{coupeChoisie}</span>
                                </div>

                                <div className="relative">
                                    <span className="absolute right-0">10€</span>
                                </div>

                                <div className="">
                                    <time>30 min</time>
                                </div>
                            </div>

                            <div className="text-center pt-4">
                                <button type="button" className="cursor-pointer underline" onClick={resetReservation}>Supprimer</button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-2 pl-2 md:w-2/3 md:h-[600px] xl:static">
                    <div className="xl:static">
                        <p className={`${playfair.className} text-xl md:text-xl 2xl:text-3xl`}>Nom du Hair'Truck</p>
                        <p className="italic text-sm md:text-lg">HairOnWhells</p>
                    </div>

                    <div className="mt-4 xl:static">
                        <p className={`${playfair.className} text-xl md:text-xl 2xl:text-3xl`}>Adresse du Hair'Truck</p>
                        <p className="italic text-sm underline">*adresse du hair'Truck*</p>
                    </div>

                    <div className="p-6 max-w-xl mx-auto">
                        <DateTimePicker onDateTimeChange={handleDateTime} />
                    </div>
                </div>
            </div>
        </section>
    )
}