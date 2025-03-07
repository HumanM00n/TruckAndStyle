/* eslint-disable @next/next/no-img-element */
'use client';

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";


    

export default function InscriptionPage() {
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

      
    
    


    const [showPassword, setShowPassword] = useState(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/auth/register', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const text = await res.text(); // Récupère la réponse brute

        try {
            const data = JSON.parse(text);
            console.log("Données JSON reçues :", data);
            alert(data.message);
        } catch (error) {
            console.error("Erreur JSON :", error);
            alert("Le serveur a renvoyé une réponse non valide.");
        }
    };

    return (
        <div className="md:w-full h-[715px] flex items-center justify-center relative  --grisArdoise: #333140;">
            <Link className="hoverMarron" href="/inscription">inscription</Link>

            {/* IMAGE */}
            <div className="hidden lg:w-2/5 md:block h-full relative left-96">
                <img
                    src="/assets/photoTondeuse.jpg"
                    className="w-full h-full object-cover"
                    alt="Photo d'une tondeuse"
                />
            </div>

            {/* FORMULAIRE D'INSCRIPTION */}
            <div className="shrink-2 absolute left-2/4 transform -translate-x-3/4 bg-[#6b3b2d] p-10 px-10 rounded-md text-sm shadow-lg w-[px400]">
                <form onSubmit={handleRegister} className="font-montserrat z-10">
                    <h1 className="text-light text-3xl font-[500] font-playfair text-center">Inscription</h1>

                    <div className="grid grid-cols-1 gap-y-6 mt-10">
                        <div className="flex space-x-2">
                            <input className="form-control w-1/2 py-2.5 px-4"
                                name="nom" type="text" placeholder="Nom" value={formData.nom} onChange={handleChange} />
                            <input className="form-control w-1/2 py-2.5 px-4"
                                name="prenom" type="text" placeholder="Prénom" value={formData.prenom} onChange={handleChange} />
                        </div>

                        <input className="form-control w-full py-2.5 px-4"
                            name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />

                        <input className="form-control w-full py-2.5 px-4"
                            name="telephone" type="tel" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} />

                        <input className="form-control w-full py-2.5 px-4"
                            name="password" type={showPassword ? "text" : "password"} placeholder="Mot de passe" value={formData.password} onChange={handleChange} />
                        
                        <FontAwesomeIcon 
                            icon={showPassword ? faEye : faEyeSlash}
                            className="w-10 relative bottom-14 left-[15.5rem] m-0 p-0 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        />

                        
                        <div className="flex space-x-2">
                            <input className="form-control w-1/2 py-2.5 px-4"
                                name="departement" type="text" placeholder="Département" value={formData.departement} onChange={handleChange} />
                            <input className="form-control w-1/2 py-2.5 px-4"
                                name="codePostal" type="text" placeholder="Code postal" value={formData.codePostal} onChange={handleChange} />
                        </div>

                        <input className="form-control w-full py-2.5 px-4"
                            name="ville" type="text" placeholder="Ville" value={formData.ville} onChange={handleChange} />
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button type="submit" className="btn btn-outline-light rounded-xs hover:bg-white hover:text-[#733E34]">
                            S inscrire
                        </button>
                    </div>

                    <div className="flex items-center my-10">
                        <hr className="flex-grow border-white" />
                        <span className="mx-4 text-light">OU</span>
                        <hr className="flex-grow border-white" />
                    </div>

                    <div className="underline underline-offset-1 text-light text-center font-montserrat mt-6 text-xs">
                        <Link href="/login">Déjà un compte ? Connectez-vous !</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
