'use client';

import { useState, useEffect, use } from "react";
import { getPersonalInfo, updatPersonalInfo } from "../_action/infosPersosAction";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Toastify from "toastify-js";

export default function PersonalInfoForm() {

    const { data: session, status } = useSession();
    const [showPassword, setshowPassword] = useState(false);
    const [success, setSuccess] = useState(false);
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
            };fetchData();
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
   
            if (updatedInfo?.success === true) {
                Toastify({
                    text: updatedInfo?.message,
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
                    text: updatedInfo?.message,
                    duration: 5000,
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

                setSuccess(false);
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
                            h-full
                            text-[13px]
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
                        text-[13px]
                        h-9                      
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
                        text-[13px]
                        h-9 
                        md:text-sm 
                        md:h-10
                        focus:ring-2 focus:ring-[#C29A7E]"
                            type="text"
                            name="phone"
                            pattern="^0[1-9][0-9]{8}$"
                            inputMode="numeric"
                            placeholder="N° Tel"
                            minLength={10}
                            maxLength={10}
                            onInvalid={(e) => {
                                e.preventDefault();
                            }}
                            value={formData.phone}
                            onChange={handleUpdateUser}/>
                    </div>

                    {/* EMAIL */}
                    <div className="w-40 
                    md:ml-0 md:w-56">
                        <input className="
                        form-control
                        border-none 
                        text-[13px]
                        h-9
                        md:text-sm 
                        md:h-10
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
                        text-[13px] 
                        h-10
                        md:text-sm
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
                    static 
                    right-28 
                    bottom-[160px] 
                    md:absolute md:right-44 md:top-2/4 md:mt-5"
                >

                    <button 
                    onClick={() => signOut()}
                    className="
                    border 
                    rounded-sm  
                    px-5 
                    py-2
                    absolute
                    bottom-16
                    transition
                    hover:bg-[#323041]">Se déconnecter</button>
                </div>
            </>
        )
    }

}