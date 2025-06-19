/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect, useActionState } from "react";
import Toastify from "toastify-js";

// { csrfToken }: { csrfToken: string }
export default function ContactezNous() {
    const [formData, setFormData] = useState({ inputEmail: '', phoneNumber: '', contentTextarea: '' });
    const [status, setStatus] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Envoi en cours...');

        const form = new FormData();
        form.append('inputEmail', formData.inputEmail)
        form.append('phoneNumber', formData.phoneNumber)
        form.append('contentTextarea', formData.contentTextarea)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: form,
            });

            const dataResponse = await res.json();

            if (dataResponse.success) {
                Toastify({
                    text: dataResponse.message || "Message envoyé avec succès !",
                    duration: 4000,
                    style: {
                        width: "350px",
                        display: "flex",
                        justifyContent: "center",
                        background: "#4F5372",
                        color: "white",
                        padding: "10px 0px 10px 0px",
                        position: "absolute",
                        right: "20px",
                        top: "20px",
                        borderRadius: "8px",
                        zIndex: "9999",
                        fontSize: "14px",
                    }
                }).showToast();

                setFormData({ inputEmail: '', phoneNumber: '', contentTextarea: '' });
            } else {
                Toastify({
                    text: dataResponse.message || "Erreur lors de l’envoi.",
                    duration: 4000,
                    gravity: "top",
                    position: "right",
                    style: {
                        width: "350px",
                        display: "flex",
                        justifyContent: "center",
                        background: "#810a0a",
                        color: "white",
                        padding: "10px 0px 10px 0px",
                        position: "absolute",
                        right: "20px",
                        top: "20px",
                        borderRadius: "8px",
                        zIndex: "9999",
                        fontSize: "14px",
                    }
                }).showToast();
            }

            // setStatus('');
        } catch (error) {
            console.error('Erreur de requête', error);
            Toastify({
                text: "Erreur serveur. Veuillez réessayer plus tard.",
                duration: 4000,
                gravity: "top",
                position: "center",
                backgroundColor: "#D9534F",
            }).showToast();
        }
    }

    return (
        <section className="h-screen md:h-dvh lg:h-auto text-white w-full flex-col">
            <h1 className="text-3xl text-center mb-2 md:mb-12">Contactez-Nous</h1>
            <form onSubmit={handleSubmit} className="text-sm md:text-base">
                {/* <input type="hidden" name="csrfToken" value={csrfToken ?? ""} /> */}

                <div className="flex flex-col items-center justify-center gap-3 mt-4 md:flex-row lg:!gap-44">
                    {/* EMAIL */}
                    <input
                        className="w-72 py-2.5 pl-4 bg--form rounded-md outline-none placeholder-[#8C5744] placeholder-opacity-75 focus:ring-2 focus:ring-[#C29A7E] transition"
                        name="inputEmail"
                        type="email"
                        placeholder="Votre Email"
                        maxLength={50}
                        value={formData.inputEmail}
                        onChange={handleChange}
                    />

                    {/* N° TELEPHONE */}
                    <input
                        className="w-72 py-2.5 pl-4 bg--form rounded-md placeholder-[#8C5744] focus:border-[#c07a61] focus:ring-2 focus:ring-[#C29A7E] outline-none transition"
                        type="number"
                        name="phoneNumber"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="Votre Téléphone"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>

                {/* TEXTAREA */}
                <div className="flex justify-center mt-3 md:mt-8">
                    <textarea
                        className="w-3/5 h-72 pl-2 pt-1 bg--form rounded-md outline-none placeholder-[#8C5744] focus:border-[#c07a61] focus:ring-2 focus:ring-[#C29A7E] md:w-[600px] lg:w-[750px]"
                        name="contentTextarea"
                        maxLength={255}
                        placeholder="Votre message"
                        value={formData.contentTextarea}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="w-full flex justify-center mt-6 md:mt-12">
                    <button
                        className="rounded-md font-base py-2.5 px-4 mb-16 bg--form hover:bg-[#63362d] transition"
                        type="submit"
                    >
                        Contactez-nous
                    </button>
                </div>
            </form>
            {/* {message && <p className="mt-4">{message}</p>} */}
        </section>
    );
}
