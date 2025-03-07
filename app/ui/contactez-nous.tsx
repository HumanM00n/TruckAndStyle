'use client';

import { useState } from "react";
import Toastify from "toastify-js";
import { sendPostContact } from "../action/contactAction";

export default function ContactezNous() {

    const [message] = useState("");

    async function handleSubmit(FormData: FormData) {
        const sendResult = await sendPostContact(FormData);

        if (sendResult.success) {
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

        <section className="h-auto text-white w-full flex-col md:flex-row">
            <h1 className="text-3xl text-center mb-2 md:mb-12">Contactez-Nous</h1>
            <form action={handleSubmit}>
                <div className="flex flex-col items-center justify-center gap-3 mt-4 
                            md:flex-row md:!gap-48 md:mt-0">

                    {/* EMAIL */}
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
                        placeholder="Votre Email" />

                    {/* N° TELEPHONE */}
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
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="Votre Téléphone" />
                </div>

                {/* TEXTAREA */}
                <div className="flex justify-center mt-3 md:mt-8">
                    <textarea className="
                    w-3/5 
                    h-72
                    pl-1
                    pt-1
                    bg--form 
                    text-md
                    rounded-md
                    outline-none
                    placeholder-[#8C5744] 
                    focus:border-[#c07a61]
                    focus:ring-2 focus:ring-[#C29A7E]
                    md:w-2/5"
                        name="contentTextarea"
                        maxLength={255}
                        placeholder="Votre message"></textarea>
                </div>

                <div className="w-full flex justify-center mt-6 md:mt-12">
                    <button className="
                    rounded-md
                    py-2.5 
                    px-4
                    mb-16
                    bg--form
                    hover:bg-[#63362d]
                    transition
                    md:mb-16"
                        type="submit" name="">Contactez-nous</button>
                </div>
            </form>
            {message && <p className="mt-4">{message}</p>}
        </section>
    )

}