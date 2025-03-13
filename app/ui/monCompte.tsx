'use client';

import { useState, useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getPersonalInfo, updatPersonalInfo } from "../action/infosPersosAction";

export default function PersonalInfoForm() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [originalDataUtil, setOriginalDataUtil] = useState(null);
    const [formData, setFormData] = useState({ lastname: "", firstname: "", phone: "", email: "", passsword: "" });

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPersonalInfo();
            if (data) {
                setOriginalDataUtil(data);
                setFormData(data);
            }
        };
        fetchData();
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    

    return (
        <section className="w-full text-white">
            <h1 className="text-3xl text-center md:w-1/4 md:text-2xl md:text-center md:pl-8">Mon compte</h1>
            <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:justify-around md:items-start">
                <div className="rounded-md px-36 py-9 mt-3 bg--form">
                    <p className="mb-2">Mes Informations</p>
                    <p>Mes réservations</p>
                </div>

                <form action="" className="rounded-md bg--form grid grid-cols-2 gap-4 py-9 px-7 mb-16
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
                            name="viewName"
                            placeholder="nom"
                        />
                    </div>

                    {/* PRENOM */}
                    <div className="w-40 md:w-48">
                        <input className="
                        form-control 
                        border-none 
                        text-sm 
                        focus:ring-2 focus:ring-[#C29A7E]
                        md:text-sm md:h-10"
                            type="text"
                            name="viewFristName" placeholder="prenom" />
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
                            name="viewPhoneNumber" placeholder="num tel" />
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
                            type="email" name="viewEmail" placeholder="email" />
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
                            type="password" name="viewPassword" placeholder="password" />
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

                        <button type="submit" className="
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
            </div>

            <div className="
            absolute
            right-28
            bottom-[160px]
            md:absolute 
            md:right-44 
            md:top-2/4 
            md:mt-5 
                ">
                <button className="
                    bg-[#333140] 
                    border 
                    rounded-sm  
                    px-5 
                    py-2
                    static
                    transition
                    hover:bg-[#25232e]">Se déconnecter</button>
            </div>
        </section>

    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function async() {
    throw new Error("Function not implemented.");
}
