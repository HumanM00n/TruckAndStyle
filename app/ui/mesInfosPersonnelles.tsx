'use client';

import { useState, useEffect } from "react";
import { getPersonalInfo, updatPersonalInfo } from "../_action/infosPersosAction";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function PersonalInfoForm() {

    const { data: session, status } = useSession();
    const [formData, setFormData] = useState({ lastname: "", firstname: "", phone: "", email: "", password: "" });


    if (!session || !session.user?.id) return null;

    useEffect(() => {

        if (session?.user?.id) {
            const fetchData = async () => {
                const resultData = await getPersonalInfo(session.user.id);
                if (resultData) {
                    setFormData({
                        lastname: resultData.user_lastname || "",
                        firstname: resultData.user_firstname || "",
                        phone: resultData.user_phone_number || "",
                        email: resultData.user_email || "",
                        password: "",
                    });
                }
            };

            fetchData();
        }
    }, [session]);

    const handleUpdateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const userId = session.user?.id; 
            const updatedInfo = await updatPersonalInfo(formData, userId);
   
            if (updatedInfo) {
                alert("Informations mises à jour avec succès !");
            } else {
                alert("Erreur lors de la mise à jour des informations.");
            }
        } catch (error) {
            console.error("⚠️ Erreur dans handleSubmit :", error);
        }
    };
    


    if (status === "authenticated") {
        return (
            <>
                <form onSubmit={handleSubmit} className="rounded-md bg--form grid grid-cols-2 gap-4 py-9 px-7 mb-16
                md:mb-[305px] 
                md:grid 
                md:grid-cols-3">

                    {/* NOM */}
                    <div className="w-40 ml-7 md:w-48 md:ml-0">
                        <input type="text"
                            className="
                            form-control 
                            border-none 
                            focus:ring-2 focus:ring-[#C29A7E]
                            md:text-sm md:h-10"
                            name="lastname"
                            defaultValue={formData.lastname}
                            onChange={handleUpdateUser}
                            placeholder="Nom"
                        />
                    </div>

                    {/* PRENOM */}
                    <div className="w-40 md:w-48">
                        <input className="
                        form-control 
                        border-none                        
                        focus:ring-2 focus:ring-[#C29A7E]
                        md:h-10
                        md:text-sm"
                            type="text"
                            name="firstname"
                            defaultValue={formData.firstname}
                            onChange={handleUpdateUser}
                            placeholder="Prénom" />
                    </div>


                    {/* N° Téléphone */}
                    <div className="w-40 ml-7 md:w-48 md:ml-0">
                        <input className="
                        form-control 
                        border-none 
                        text-sm 
                        h-10
                        focus:ring-2 focus:ring-[#C29A7E]"
                            type="tel"
                            name="phone"
                            defaultValue={formData.phone}
                            onChange={handleUpdateUser}
                            placeholder="N° Tel" />
                    </div>


                    {/* EMAIL */}
                    <div className="w-40 
                    md:ml-0 md:w-56">
                        <input className="
                        form-control 
                        border-none 
                        text-sm 
                        h-10
                        focus:ring-2 focus:ring-[#C29A7E]"
                            type="email"
                            name="email"
                            defaultValue={formData.email}
                            onChange={handleUpdateUser}
                            placeholder="email" />
                    </div>


                    {/* MOT DE PASSE */}
                    <div className="w-full col-span-full px-7
                    md:ml-0 md:w-1/2 md:px-0 md:col-span-2">
                        <input className="
                        form-control 
                        border-none 
                        text-sm 
                        h-10
                        focus:ring-2 focus:ring-[#C29A7E]"
                            type="password"
                            name="password"
                            defaultValue={formData.password}
                            onChange={handleUpdateUser}
                            placeholder="Mot de passe" />
                    </div>


                    <div className="col-span-full px-7 flex justify-end gap-2">
                        <button type="reset" className="
                        btn-submit
                        py-2 
                        px-3
                        text-sm
                        font-semibold
                        bg--grisArdoise
                        hover:bg-[#2a2835]">
                            Annuler
                        </button>

                        <button type="submit" onSubmit={handleSubmit} className="
                        btn-submit 
                        py-2 
                        px-3 
                        text-sm
                        font-semibold
                        text-[#8C5744] 
                        bg-[#FBFBFB]                         
                        hover:bg-[#cecece]
                        hover:text-[#8C5744]">
                            Modifier
                        </button>
                    </div>
                </form>


                <div
                    className="
    absolute right-28 bottom-[160px] 
    md:absolute md:right-44 md:top-2/4 md:mt-5"
                >

                    <button 
                    onClick={() => signOut()}
                    className="
                    bg-transparent 
                    border 
                    rounded-sm  
                    px-5 
                    py-2
                    static
                    transition
                    hover:bg-[#918cb8]">Se déconnecter</button>
                </div>
            </>
        )
    }

}