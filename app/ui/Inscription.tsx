"use client";

import { useState } from "react";

import Toastify from "toastify-js";
import { registerUser } from "../action/inscriptionAction";

export default function Inscription() {
    
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        departement: "",
        codePostal: "",
        ville: "",
        password: ""
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const sendResult = await registerUser(new FormData(event.target as HTMLFormElement));

        Toastify({
            text: sendResult.message,
            duration: 5000,
            style: {
                width: "200px",
                display: "flex",
                background: sendResult.success ? "#4F5372" : "#810a0a",
                color: "white",
                padding: "15px 10px 10px 46px",
                position: "absolute",
                right: "20px",
                top: "10px",
                borderRadius: "10px",
                zIndex: "9999",
                fontSize: "14px",
            }
        }).showToast();
    }

    return (
        <section className="flex justify-center items-center min-h-screen bg-black">
            <div className="bg-[#6b3b2d] text-white p-8 rounded-lg w-96 md:w-[500px]">
                <h1 className="text-center text-2xl font-bold mb-6">Inscription</h1>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-2">
                        <input className="w-1/2 p-2 rounded bg-white text-black placeholder-gray-500"
                            name="nom" type="text" placeholder="Nom" value={formData.nom} onChange={handleChange} />
                        <input className="w-1/2 p-2 rounded bg-white text-black placeholder-gray-500"
                            name="prenom" type="text" placeholder="Prénom" value={formData.prenom} onChange={handleChange} />
                    </div>

                    <input className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
                        name="telephone" type="tel" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />

                    <input className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
                        name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />

                    <input className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
                        name="password" type="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} />

                    <div className="flex space-x-2">
                        <input className="w-1/2 p-2 rounded bg-white text-black placeholder-gray-500"
                            name="departement" type="text" placeholder="Département" value={formData.departement} onChange={handleChange} />
                        <input className="w-1/2 p-2 rounded bg-white text-black placeholder-gray-500"
                            name="codePostal" type="text" placeholder="Code postal" value={formData.codePostal} onChange={handleChange} />
                    </div>

                    <input className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
                        name="ville" type="text" placeholder="Ville" value={formData.ville} onChange={handleChange} />

                    <button className="w-full mt-4 bg-[#2e1e1a] hover:bg-[#4a322d] text-white py-2 rounded transition">
                        Créer mon compte
                    </button>
                </form>
            </div>
        </section>
    );
}
