'use client';

import Image from "next/image";

export default function TsChoixHeureResa() {
    return (
        <section className="border-1 border-blue-500 w-auto min-h-[80vh] text-white">
            <div className="border flex flex-col">
                <h2 className=" font-montserrat text-2xl">Choix de votre <span className="color--form">Horaire</span></h2>

                <div className=" font-bold">
                <h2 className="!font-playfair text-2xl">Choix de votre <span className="color--form">Horaire</span></h2>

                </div>

                <div className="flex gap-4 p-8 bg-gray-900 text-white">
  <p className="font-montserrat text-2xl">Montserrat par défaut</p>
  <p className="font-playfair text-2xl">Playfair appliqué ici</p>
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
                        <button className="cursor-pointer underline">Supprimer</button>
                    </div>

                </div>

                <div className="">

                </div>
            </div>
        </section>
    )
}