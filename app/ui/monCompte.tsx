'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import PersonalInfoForm from "@/app/ui/mesInfosPersonnelles";
import MyBookings from "@/app/ui/mesReservations";
import { playfair } from "@/app/styles/fonts";

export default function MonCompte() {
    const { data, status } = useSession();

    console.log(data)

    const [mesInfosPersos, setMesInfosPersos] = useState(true);

    if (status === "authenticated") {
        return (
            // min-h-[75vh]
            <section className="w-full text-white">
                <h1 className={`${playfair.className} text-3xl md:text-2xl text-center lg:w-1/4 lg:pl-8`}>Mon compte</h1>
                <div className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:justify-around lg:items-start">
                    <div className="flex flex-col rounded-md px-36 py-9 mt-3 bg--form">
                        <button className="mb-2 transition-transform duration-200 hover:scale-105 hover:shadow-xl" onClick={() => setMesInfosPersos(true)}>Mes Informations</button>
                        <button className="transition-transform duration-200 hover:scale-105 hover:shadow-xl" onClick={() => setMesInfosPersos(false)}>Mes réservations</button>
                    </div>
                    {mesInfosPersos ? <PersonalInfoForm /> : <MyBookings />}

                </div>
            </section>
        );
    } else {
        redirect('/') 
    }
}