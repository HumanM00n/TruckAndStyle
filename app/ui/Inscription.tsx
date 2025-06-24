'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; 
import Image from "next/image";
import { registerUser } from "@/app/_action/inscriptionAction";

import Toastify from "toastify-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import flatpickr from "flatpickr";
import { French } from "flatpickr/dist/l10n/fr.js";
import "flatpickr/dist/flatpickr.min.css";

export default function Inscription() {
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [villes, setVilles] = useState<string[]>([]);

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

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        // Validation de base
        if (!formData.nom || !formData.prenom || !formData.email || !formData.motDePasse) {
            Toastify({
                text: "Merci de remplir tous les champs obligatoires.",
                duration: 5000,
                backgroundColor: "#810a0a",
                gravity: "top",
                position: "right",
                style: { color: "white" }
            }).showToast();
            return;
        }

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => formDataToSend.append(key, value));

        const response = await registerUser(formDataToSend);
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
            Toastify({
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
        if (success) {
            setTimeout(() => {
                router.push('/connexion');
            }, 2500);
        }
    }, [success, router]);

    useEffect(() => {
        if (inputRef.current) {
            flatpickr(inputRef.current, {
                dateFormat: "d-m-Y",
                locale: French,
                allowInput: true,
                onChange: (_, dateStr) => {
                    setFormData(prev => ({ ...prev, dateNaissance: dateStr }));
                }
            });
        }
    }, []);

    useEffect(() => {
        const fetchVilleEtDepartement = async () => {
            if (formData.codePostal.length === 5) {
                try {
                    const res = await fetch(`https://geo.api.gouv.fr/communes?codePostal=${formData.codePostal}&fields=nom,codeDepartement&format=json`);
                    const data = await res.json();

                    if (data.length > 0) {
                        const codeDepartement = data[0].codeDepartement;
                        const depRes = await fetch(`https://geo.api.gouv.fr/departements/${codeDepartement}`);
                        const depData = await depRes.json();

                        setFormData(prev => ({
                            ...prev,
                            departement: depData.nom,
                            ville: data.length === 1 ? data[0].nom : ""
                        }));
                        
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        setVilles(data.map((ville: any) => ville.nom));
                    } else {
                        setVilles([]);
                        setFormData(prev => ({
                            ...prev,
                            departement: "",
                            ville: ""
                        }));
                    }
                } catch (error) {
                    console.error("Erreur récupération commune/département :", error);
                }
            } else {
                setVilles([]);
                setFormData(prev => ({
                    ...prev,
                    departement: "",
                    ville: ""
                }));
            }
        };

        fetchVilleEtDepartement();
    }, [formData.codePostal]);

    return (
        <div className="w-full h-auto flex justify-center pb-32 md:min-h-auto md:pb-0">
            <form
                onSubmit={handleSubmit}
                className="w-[600px] grid-cols-1 bg--form px-14 py-9 rounded-md lg:mt-10 md:translate-x-1/2 md:z-50 md:max-h-[650px]"
            >
                <h1 className="text-white text-center mb-4 text-2xl">Inscription</h1>

                {/* NOM & PRENOM */}
                <div className="flex justify-center gap-4 mb-4">
                    <input className="form-control text-[15px] focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4" type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" />
                    <input className="form-control text-[15px] focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4" type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" />
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
                            type="text"
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
                <div className="flex justify-center gap-4 mb-4">
                    <input className="form-control text-[15px] focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                </div>

                {/* MOT DE PASSE */}
                <div className="relative w-full mb-4">
                    <input type={showPassword ? "text" : "password"} className="form-control text-[15px] w-full focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4" name="motDePasse" value={formData.motDePasse} onChange={handleChange} placeholder="Mot de passe" />
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                </div>

                {/* DEPARTEMENT & CODE POSTAL */}
                <div className="flex justify-center gap-4 mb-4">

                    <input className="form-control text-[15px] focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4" type="number" name="codePostal" value={formData.codePostal} onChange={handleChange} placeholder="Code Postal" />    
                    <input className="form-control text-[15px]" type="text" name="departement" value={formData.departement} placeholder="Département" readOnly disabled/>
                </div>

                {/* VILLE */}
                <div className="flex justify-center gap-4 mb-4">
                    {villes.length > 1 ? (
                        <select className="form-control text-[15px]" name="ville" value={formData.ville} onChange={handleChange}>
                            <option value="">-- Choisissez votre ville --</option>
                            {villes.map((ville) => (
                                <option key={ville} value={ville}>{ville}</option>
                            ))}
                        </select>
                    ) : (
                        <input className="form-control text-[15px] focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4" type="text" name="ville" value={formData.ville} onChange={handleChange} placeholder="Ville" />
                    )}
                </div>

                {/* BOUTON */}
                <div className="flex justify-center gap-4 mb-4 text-white">
                    <button className="btn btn-outline-light text-[15px] rounded-xs hover:bg-white hover:text-[#733E34]" type="submit">
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

            <div className="hidden md:rounded-md md:relative md:left-40 md:w-2/5 md:block">
                {/* <img src="" className="" alt=""/> */}

                <Image
                src={"/assets/photoTondeuse.jpg"}
                width={150}
                height={150}
                quality={80}
                alt="Photo d'une tondeuse"
                className="w-full h-[718px] object-cover"
                />
            </div>
        </div>
    );
}
