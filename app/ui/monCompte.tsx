'use client';

import { useState } from "react";
import PersonalInfoForm from "@/app/ui/mesInfosPersonnelles";
import MyBookings from "@/app/ui/mesRervations";

export default function MonCompte() {

    const [mesInfosPersos, setMesInfosPersos] = useState(true);

    return (
        <section className="border w-full text-white md:min-h-[390px]">
            <h1 className="text-3xl text-center md:w-1/4 md:text-2xl md:text-center md:pl-8">Mon compte</h1>
            <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:justify-around md:items-start">
                <div className="flex flex-col rounded-md px-36 py-9 mt-3 bg--form">
                    <button className="mb-2 transition-transform duration-200 hover:scale-105 hover:shadow-xl" onClick={() =>setMesInfosPersos(true)}>Mes Informations</button>
                    <button className="transition-transform duration-200 hover:scale-105 hover:shadow-xl" onClick={() => setMesInfosPersos(false)}>Mes réservations</button>
                </div>
                {mesInfosPersos ? <PersonalInfoForm /> : <MyBookings />}

            </div>

        </section>

    );
}