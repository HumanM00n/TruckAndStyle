'use client';

import Link from "next/link";
import { useState, useEffect, } from "react";
import { registerUser } from "@/app/_action/inscriptionAction";
import { useRouter } from "next/navigation"; 


import Toastify from "toastify-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";


export default function Inscription() {

    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const inputRef = useRef<HTMLInputElement | null>(null);

    // Affichage du mot de passe
    const [showPassword, setshowPassword] = useState(false);

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        motDePasse: "",
        dateNaissance: "",
        departement: "",
        codePostal: "",
        ville: ""
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }


    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => formDataToSend.append(key, value));

        const response = await registerUser(formDataToSend); // Appel de la function du fichier Server Action
        console.log("Reponse du serveur :", response);

        if (response.success) {
            Toastify({
                text: response.message,
                duration: 5000,
                style: {
                    width: "275px",
                    display: "flex",
                    background: "#4F5372",
                    color: "white",
                    padding: "10px 10px 10px 20px",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    borderRadius: "8px",
                    zIndex: "9999",
                    fontSize: "14px",
                }
            }).showToast();

            setSuccess(true);            

        } else {

            const toast = Toastify({
                text: response.message,
                duration: 5000,
                gravity: "top",
                position: "right",
                style: {
                    width: "300px",
                    display: "flex",
                    background: "#810a0a",
                    color: "white",
                    padding: "10px 10px 10px 17px",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    borderRadius: "8px",
                    zIndex: "9999",
                    fontSize: "14px",
                }
            }).showToast();
        }
    }

    useEffect(() => {
        if(success) {
            setTimeout(() => {
                router.push('/connexion');
            }, 2500);
        }
    }, [success, router]);


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
                lg:mt-10
                md:translate-x-1/2
                md:z-50
                md:max-h-[650px]">
                    <h1 className="text-white text-center mb-4 text-2xl">Inscription</h1>

                    {/* NOM & PRENOM */}
                    <div className=" flex justify-center gap-4 mb-4">
                        <input className="
                        form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            placeholder="Nom" />

                        <input className="
                        form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            placeholder="Prénom" />
                    </div>

                    {/* N° TEL & DDN */}
                    <div className=" flex justify-center relative gap-4 mb-4">
                        <input className="
                        form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            type="tel"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            placeholder="N° Tel" />

                        <input className="
                        form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition appearance-none cursor-pointer"
                            type="date"
                            data-placeholder="Date de naissance"
                            id="dateNaissance"
                            name="dateNaissance"
                            value={formData.dateNaissance}
                            onChange={handleChange}
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email" />
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
                            name="motDePasse"
                            value={formData.motDePasse}
                            onChange={handleChange}
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
                            name="departement"
                            value={formData.departement}
                            onChange={handleChange}
                            placeholder="Département" />

                        <input className="
                        form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            type="number"
                            name="codePostal"
                            value={formData.codePostal}
                            onChange={handleChange}
                            placeholder="Code Postal" />
                    </div>

                    {/* VILLE */}
                    <div className="flex justify-center gap-4 mb-4">
                        <input className="form-control 
                        text-[15px]
                        placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
                            type="text"
                            name="ville"
                            value={formData.ville}
                            onChange={handleChange}
                            placeholder="Ville" />
                    </div>

                    {/* BTN */}
                    <div className="flex justify-center gap-4 mb-4 text-white">
                        <button className="btn btn-outline-light text-[15px] rounded-xs hover:bg-white hover:text-[#733E34]"
                            type="submit"
                            onClick={handleSubmit}>
                            Créer mon compte
                        </button>
                    </div>

                    <div className="flex items-center my-10">
                        <hr className="flex-grow border-white" />
                        <span className="mx-4 text-light">OU</span>
                        <hr className="flex-grow border-white" />
                    </div>

                    <div className="underline underline-offset-1 text-light font-montserrat mt-6 text-xs text-center">
                        <Link href={"connexion"}>Vous avez déjà un compte ? Connectez-vous !</Link>
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
                        className="w-full h-[718px] object-cover"
                    />

                </div>
            </div>
        </>

    )
}