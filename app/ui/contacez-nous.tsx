'use client'

import { useState } from "react"


export default function ContactezNous() {

    return (

        <div className="border-2 w-full h-auto text-white">
            <h1 className="text-4xl text-center">Conctatez-Nous</h1>
            <form className="grid grid-cols-1 text-white">
                <div className="flex justify-center gap-48 mb-10">
                    <input className="w-72 py-2.5 px-4 bg--form rounded-md placeholder-[#8C5744] placeholder-opacity-75" type="email" name="" id="" placeholder="Votre Email" />
                    <input className="w-72 py-2.5 px-4 bg--form rounded-md 
                    placeholder-[#8C5744]
                    focus:border-[#8C5744]
                    focus:ring-2 focus:ring-[#c07a61]
                    outline-none
                    transition" 
                    
                    type="number" name="" id="" placeholder="Votre Téléphone" />
                </div>

                <div className="border-1 border-green-600 flex justify-center">
                    <textarea className="w-2/5 h-72 bg--form placeholder-[#8C5744] rounded-xs" name="" id="" placeholder="Votre message"></textarea>
                </div>

                <div className="">
                    <button className="" type="submit">Envoyer</button>

                    <button className="ml-64 bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
                        Save changes
                    </button>
                </div>

            </form>

        </div>
    )

}