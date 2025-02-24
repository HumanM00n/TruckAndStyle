'use client'

import { useState } from "react"


export default function ContactezNous() {

    return (

        <div className="w-full h-auto text-white">
            <h1 className="text-3xl text-center">Contactez-Nous</h1>
            <form className="grid grid-cols-1 text-white mt-8">
                <div className="flex justify-center gap-48 mb-10">
                    <input className="
                        w-72 
                        py-2.5 
                        px-4
                        bg--form 
                        rounded-md 
                        outline-none
                      placeholder-[#8C5744] placeholder-opacity-75
                        focus:ring-2 focus:ring-[#C29A7E]
                        transition"
                        type="email"
                        placeholder="Votre Email"
                    />


                    <input className="
                    w-72 
                    py-2.5 
                    px-4 
                    bg--form 
                    rounded-md 
                    placeholder-[#8C5744]
                    focus:border-[#c07a61]
                    focus:ring-2 focus:ring-[#C29A7E]
                    outline-none
                    transition"
                        type="number" name="" id="" placeholder="Votre Téléphone" />
                </div>

                {/* TEXTAREA */}
                <div className="flex justify-center">
                    <textarea className="
                    w-2/5 
                    h-72
                    pl-1
                    pt-1
                    bg--form 
                    placeholder-[#8C5744] 
                    rounded-md
                    outline-none
                    focus:border-[#c07a61]
                    focus:ring-2 focus:ring-[#C29A7E]"
                        name="" id="" placeholder="Votre message"></textarea>
                </div>

                <div className="w-full flex justify-center mt-6">
                    <button className="
                    rounded-md
                    py-2.5 
                    px-4
                    mb-16
                    bg--form
                    hover"
                        type="submit" id="">Contactez-nous</button>
                </div>

            </form>

        </div>
    )

}