/* eslint-disable @next/next/no-img-element */
'use client';


import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";


export default function loginPage() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const text = await res.text();  // Récupère la réponse brute (pas en JSON)
        console.log("Réponse brute du serveur :", text);

        try {
            const data = JSON.parse(text); // Essaie de parser en JSON
            console.log("Données JSON parsées :", data);
        } catch (error) {
            console.error("Erreur de parsing JSON :", error);
            return alert("Le serveur a renvoyé une réponse non valide.");
        }
    };


    return (

        <div className="md:w-full h-[715px] flex items-center justify-center relative bg--noir">
            {/* CONTAINER IMAGE */}
            <div className="hidden lg:w-2/5 md:block h-full relative left-96">
                <img
                    src="/assets/photoTondeuse.jpg"
                    className="w-full h-full object-cover"
                    alt="Photo d'une tondeuse"
                />
            </div>

            {/* FORMULAIRE DE CONNEXION */}
            <div className="shrink-0 md:absolute md:left-2/4 md:transform md:-translate-x-3/4 bg--form p-12 px-40 rounded-md text-sm shadow-lg w-[600px]">
                <form onSubmit={handleLogin} className="font-montserrat z-10">
                    <h1 className="text-light text-3xl font-[500] font-playfair text-center">Connexion</h1>

                    <div className="grid grid-cols-1 gap-y-6 mt-10">
                        {/* ADRESSE EMAIL */}
                        <input
                            type="email"
                            className="form-control w-72 py-2.5 px-4 placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            id="inputForEmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />

                        {/* MOT DE PASSE */}
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control w-72 py-2.5 px-4 placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            id="inputForPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            className="w-10 relative bottom-14 left-[15.5rem] m-0 p-0"
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>


                    <div className="underline underline-offset-2 text-light font-montserrat mt-6">
                        <p className="">J&apos;ai oublié mon mot de passe</p>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <button type="submit" className="btn btn-outline-light rounded-xs hover:bg-white hover:text-[#733E34]">
                            Se connecter
                        </button>
                    </div>

                    <div className="flex items-center my-10">
                        <hr className="flex-grow border-white" />
                        <span className="mx-4 text-light">OU</span>
                        <hr className="flex-grow border-white" />
                    </div>

                    <div className="underline underline-offset-1 text-light font-montserrat mt-6 text-xs">
                        <Link href={"inscrption"}>Vous n&apos;avez pas de compte ? Créez-en un !</Link>
                    </div>

                    <div className="mt-3">
                        <button type="button" className="btn btn-light w-full text-[#8C5744] hover:text-[#8C5744]">
                            Créer un compte
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

