'use client';

import { useState } from "react";

export default function MonCompte() {
    return (
        <section className="w-full text-white">
            <h1 className="text-3xl text-center md:w-1/4 md:text-2xl md:text-center md:pl-8">Mon compte</h1>
            <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:justify-around md:items-start">
                <div className="rounded-md px-36 py-9 mt-3 bg--form">
                    <p className="mb-2">Mes Informations</p>
                    <p>Mes réservations</p>
                </div>

                <form className="rounded-md bg--form grid grid-cols-2 gap-4 py-9 px-7 mb-[305px] 
                md:2/4 md:grid md:grid-cols-3" action="">

                    {/* NOM */}
                    <div className="w-40 ml-7 md:w-48 md:ml-0">
                        <input type="text"
                            className="form-control border-none md:text-sm md:h-10"
                            name=""
                            id=""
                        />
                    </div>

                    {/* PRENOM */}
                    <div className="w-40 md:w-48">
                        <input className="form-control border-none text-sm md:text-sm md:h-10" type="text" name="" id=""/>
                    </div>


                    {/* N° Téléphone */}
                    <div className="w-40 ml-7 md:w-48 md:ml-0">
                        <input className="form-control border-none text-sm h-10" type="tel" name="" id="" />
                    </div>


                    {/* EMAIL */}
                    <div className="w-40 
                    md:ml-0 md:w-56">
                        <input className="form-control border-none text-sm h-10" type="email" name="" />
                    </div>


                    {/* MOT DE PASSE */}
                    <div className="w-full col-span-full px-7
                    md:ml-0 md:w-1/2 md:px-0 md:col-span-2">
                        <input className="form-control border-none text-sm h-10" type="password" name=""/>
                    </div>


                    <div className="col-span-full px-7 flex justify-end gap-2">
                        <button type="reset" className="
                        btn-submit
                        py-2 
                        px-3
                        text-sm
                        font-semibold
                        bg--grisArdoise
                        hover:bg-[#2a2835]">
                            Annuler
                        </button>

                        <button type="submit" className="
                        btn-submit 
                        py-2 
                        px-3 
                        text-sm
                        font-semibold
                        text-[#8C5744] 
                        bg-[#FBFBFB]                         
                        hover:bg-[#cecece]
                        hover:text-[#8C5744]">
                            Modifier
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-2/3 flex justify-end relative bottom-5
            md:w-full
            md:relative
            md:bottom-72
            md:right-40
            ">
                    <button className="
                    bg-[#333140] 
                    border 
                    rounded-sm  
                    px-5 
                    py-2
                    hover:bg-[#25232e]">Se déconnecter</button>
                </div>
        </section>

    )
}