'use client'

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function MdpOublie() {
  const getTokenByUrl = useSearchParams();
  const token = getTokenByUrl.get("token");

  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [status, setStatus] = useState();  // if ( status === "tokenValid" ) // if ( status === "tokenInvalid" // if ( status === "loading" 

  useEffect(() => {
    fetch("api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword })
    })
  })

  return (
    <section className="h-full w-auto">
      <form className="flex flex-column justify-center gap-5 pl-5 md:items-center md:pl-0">
        <div className="mt-1">
          <h1 className="mt-1 text-xl">Réinitialisation de votre de mot de passe</h1>
          <hr className="text-gray-500 opacity-45 px-2" />
        </div>

        <div className="">
          <h2 className="text-lg">Définir un nouveau mot de passe</h2>
          <p className="italic text-xs opacity-45">Choisissez un mot de passe fort que vous n'avez pas utiliser auparavant</p>
        </div>


        <div className="flex flex-column gap-2 relative">
          <label htmlFor="inputNewPassword">Mot de passe</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-[425px] py-2.5 pl-4 mb-3 bg--form rounded-md placeholder-[#8C5744] focus:border-[#c07a61] focus:ring-2 focus:ring-[#C29A7E] outline-none transition"
            id="inputNewPassword"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            placeholder="Mot de passe"
            required />

          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            className="absolute right-10 top-[44px] cursor-pointer text-lg text-black"
          // onClick={}
          />


          {/* CONFIRMATION DU PASSWORD */}
          <label htmlFor="inputConfirmNewPassword">Confirmation de mot passe</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-[425px] py-2.5 pl-4 bg--form rounded-md placeholder-[#8C5744] focus:border-[#c07a61] focus:ring-2 focus:ring-[#C29A7E] outline-none transition"
            id="inputConfirmNewPassword"
            // onChange={}
            // value={confirmNewPassword}
            placeholder="Confirmer votre mot de passe"
          />

          <FontAwesomeIcon
            icon={newPassword ? faEye : faEyeSlash}
            className="absolute right-10 top-36 cursor-pointer text-lg text-black"
          // onClick={}
          />
        </div>

        <div className="flex justify-center">
          <button className="rounded-md font-base py-2.5 px-4 mb-16 bg--form hover:bg-[#63362d] transition">Enregistrer les modifications</button>
        </div>

      </form>
    </section>
  );
}