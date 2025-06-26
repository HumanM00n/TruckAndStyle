'use client'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function MdpOublie() {
  const [ showPassword, setShowPassword ] = useState(false);
  const [ newPassword, setNewPassword ] = useState("");
  const [ confirmNewPassword, setConfirmNewPassword ] = useState("");

  return (
    <section className="border-1 border-blue-500 h-full w-auto">
      <form className="border flex flex-column items-center gap-5">
        <div className="w-full border">
          <h1>Réinitialisation de votre de mot de passe</h1>
          <hr className="text-purple-500 opacity-80" />
        </div>

        <div className="">
          <h2>Définir un nouveau mot de passse</h2>
          <p>Choisissez un mot de passe fort que vous n'avez pas utiliser auparavant</p>
        </div>


        <div className="flex flex-column gap-2 relative">
          <label htmlFor="inputNewPassword">Mot de passe</label>
          <input 
            type={showPassword ? "text" : "password"} 
            className="w-72 py-2.5 pl-4 bg--form rounded-md placeholder-[#8C5744] focus:border-[#c07a61] focus:ring-2 focus:ring-[#C29A7E] outline-none transition" 
            id="inputNewPassword" 
            // onChange={}
            // value={newPassword} 
            placeholder="Mot de passe"
            required/>
          
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            className="absolute right-2 bottom-6 cursor-pointer text-lg text-black" 
            // onClick={}
            />

          <label htmlFor="inputConfirmNewPassword">Confirmation de mot passe</label>
          <input 
            type={showPassword ? "text" : "password"} 
            className="w-72 py-2.5 pl-4 bg--form rounded-md placeholder-[#8C5744] md:w-72 focus:border-[#c07a61] focus:ring-2 focus:ring-[#C29A7E] outline-none transition" 
            id="inputConfirmNewPassword" 
            // onChange={}
            // value={confirmNewPassword}
            placeholder="Confirmer votre mot de passe"
          />
        </div>

        <div className="">
          <button className="rounded-md font-base py-2.5 px-4 mb-16 bg--form hover:bg-[#63362d] transition">Enregistrer les modifications</button>
        </div>

      </form>
    </section>
  );
}