'use client';

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faCalendar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";


export default function page() {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [showPassword, setshowPassword] = useState(false);

    return (
        <>
            <div className="
            w-full 
            h-auto 
            flex 
            justify-center
            pb-32
            md:min-h-auto
            md:pb-0
            ">
                <form className="
                w-[600px]
                grid-cols-1 
                bg--form 
                px-14
                py-9
                rounded-md 
                md:mt-10
                md:translate-x-1/2
                md:z-50
                md:max-h-[550px]">
                    <h1 className="text-white text-center mb-4 text-2xl">Inscription</h1>

                    {/* NOM & PRENOM */}
                    <div className=" flex justify-center gap-4 mb-4">
                        <input className="
                        form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            type="text"
                            placeholder="Nom" />

                        <input className="
                        form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            type="text"
                            placeholder="Prénom" />
                    </div>

                    {/* N° TEL & DDN */}
                    <div className=" flex justify-center relative gap-4 mb-4">
                        <input className="
                        form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            type="tel"
                            id=""
                            placeholder="N° Tel" />

                        <input className="
                        form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition appearance-none cursor-pointer"
                            type="date"
                            data-placeholder="Date de naissance"
                            id="dateNaissance"
                            ref={inputRef} />

                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="w-5 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 color--marronNoisetteMid"
                            onClick={() => inputRef.current?.showPicker()}
                        />

                        <span className="absolute 
                        text-xs 
                        top-10
                        right-[115px]
                        italic
                        text-black
                        font-[530]
                        ">*Date de naissance*</span>

                    </div>

                    {/* EMAIL */}
                    <div className=" flex justify-center gap-4 mb-4">
                        <input className="
                        form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            type="email"
                            placeholder="Email"
                            id="" />
                    </div>

                    <div className="relative w-full mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control 
                            text-[15px] 
                            w-full  
                            rounded-md 
                            border border-gray-300 
                            placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            placeholder="Mot de passe"
                        />

                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            className="
                            w-5 
                            h-5 
                            absolute 
                            right-3 
                            top-1/2 transform -translate-y-1/2 
                            cursor-pointer
                            transition
                            color--marronNoisetteMid
                            "
                            onClick={() => setshowPassword(!showPassword)}
                        />
                    </div>


                    {/* DEPARTEMENT & CP */}
                    <div className=" flex justify-center gap-4 mb-4">
                        <input className="
                        form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            type="text"
                            // value={}
                            id=""
                            placeholder="Département" />

                        <input className="
                        form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            type="number"
                            placeholder="Code Postal" />
                    </div>

                    {/* VILLE */}
                    <div className="flex justify-center gap-4 mb-4">
                        <input className="form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            type="text"
                            placeholder="Ville" />
                    </div>

                    {/* BTN */}
                    <div className="flex justify-center gap-4 mb-4 text-white">
                        <button className="btn btn-outline-light text-[15px] rounded-xs hover:bg-white hover:text-[#733E34]" type="submit">Créer mon compte</button>
                    </div>
                </form>

                <div className="
                hidden 
                md:rounded-md
                md:relative
                md:left-40
                md:w-2/5
                md:block">
                    <img
                        src="/assets/photoTondeuse.jpg"
                        className="w-full h-[650px] object-cover"
                    />

                </div>
            </div>
        </>

    )
}