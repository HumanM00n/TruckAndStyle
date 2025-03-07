'use client';

import { useState } from "react";

export default function MonCompte() {
    return (
        <section className="border-2 border-red-500 h-auto w-full text-white">
            <h1 className="text-3xl text-center md:w-1/4 md:text-2xl md:text-center md:pl-8">Mon compte</h1>
            <div className="border flex flex-col justify-center items-center gap-8 md:flex-row md:justify-around md:items-start">
                <div className="border-1 border-purple-500 rounded-md px-36 py-9 mt-3 bg--form">
                    <p className="mb-2">Mes Informations</p>
                    <p>Mes réservations</p>
                </div>

                <form className="border-1 border-blue-500 rounded-md bg--form grid grid-cols-2 gap-4 py-9 px-2 
                md:2/4 md:grid md:grid-cols-3 " action="">

                    {/* NOM */}
                    <div className="w-40 ml-7 md:w-48 md:ml-0">
                        <input type="text"
                            className="form-control border-none md:text-sm md:h-9"
                            name=""
                            id=""
                            value={"Rouy"}
                        />
                    </div>

                    {/* PRENOM */}
                    <div className="w-40 md:w-48">
                        <input className="form-control border-none md:text-sm md:h-9" type="text" name="" id="" value={"Mathis"}/>
                    </div>


                    {/* N° Téléphone */}
                    <div className="w-40 ml-7 md:w-48 md:ml-0">
                        <input className="form-control border-none" type="number" name="" id="" value={"0616250830"} />
                    </div>

                    {/* EMAIL */}
                    <div className="w-40 md:ml-0 md:pr-20 md:pl-20 ">
                        <input className="form-control" type="email" name="" value={"mrouy"} />
                    </div>

                    {/* MOT DE PASSE */}
                    <div className="w-full col-span-full px-7 md:ml-0 md:pr-20 md:pl-20 ">
                        <input className="form-control " type="text" name="" value={"caefdzefzefzefzef"}/>
                    </div>


                    <div className="col-span-full px-7 flex justify-end gap-2">
                        <button type="reset" className="
                        btn-submit
                        py-2.5 
                        px-4
                        font-semibold
                        bg--grisArdoise
                        hover:bg-[#2a2835]">
                            Annuler
                        </button>

                        <button type="submit" className="
                        btn-submit 
                        py-2.5 
                        px-4 
                        text-base
                        font-semibold
                        text-[#8C5744] 
                        bg-[#FBFBFB]                         
                        hover:bg-[#cecece]
                        hover:text-[#8C5744]">
                            Modifier
                        </button>
                    </div>
                </form>

                {/* <div className="w-2/3 flex justify-end relative bottom-5">
                    <button className="
                    bg-[#333140] 
                    border 
                    rounded-sm  
                    px-5 
                    py-2
                    hover:bg-[#25232e]">Se déconnecter</button>
                </div> */}

            </div>
        </section>

    )
}