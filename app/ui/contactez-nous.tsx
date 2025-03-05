'use client';

import { useState } from "react";
import Toastify from "toastify-js";
import { sendPostContact } from "../action/contactAction";

export default function ContactezNous() {

    // const [content, setContent] = useState("");
    const [message] = useState("");

    async function handleSubmit(FormData: FormData) {
        const sendResult = await sendPostContact(FormData);

        if (sendResult.succes) {
            Toastify({
                text: sendResult.message,
                duration: 5000,
                style: {
                    width: "275px",
                    //
                    display: "flex",
                    //
                    background: "#4F5372",
                    color: "white",
                    //
                    padding: "10px 10px 10px 46px",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    //
                    borderRadius: "8px",
                    zIndex: "9999",
                    fontSize: "14px",
                }
            }).showToast();

        } else {

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const toast = Toastify({
                text: sendResult.message,
                duration: 5000,
                gravity: "top",
                position: "right",
                style: {
                    width: "300px",
                    //
                    display: "flex",
                    //
                    background: "#810a0a",
                    color: "white",
                    //
                    padding: "10px 10px 10px 17px",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    //
                    borderRadius: "8px",
                    zIndex: "9999",
                    fontSize: "14px",
                }
            }).showToast()
        }
    }

    return (

        <div className="w-full h-auto text-white">
            <h1 className="text-3xl text-center">Contactez-Nous</h1>
            <form className="grid grid-cols-1 text-white mt-8" action={handleSubmit}>


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
                        name="inputEmail"
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
                        type="number"
                        name="phoneNumber"
                        inputMode="numeric"  // Affiche le clavier numérique sur mobile
                        maxLength={10}
                        placeholder="Votre Téléphone"
                    />

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
                    focus:ring-2 focus:ring-[#C29A7E]
                    "
                        name="contentTextarea"
                        maxLength={255}
                        placeholder="Votre message"></textarea>
                </div>

                <div className="w-full flex justify-center mt-6">
                    <button className="
                    rounded-md
                    py-2.5 
                    px-4
                    mb-16
                    bg--form
                    hover:bg-[#63362d]
                    transition"
                        type="submit" name="">Contactez-nous</button>
                </div>
            </form>
            {message && <p className="mt-4">{message}</p>}
        </div>

    )

}