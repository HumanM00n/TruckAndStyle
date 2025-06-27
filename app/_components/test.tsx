'use client'

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { SpinnerTns } from "./defaultComponents/spinner";

export default function MdpOublie() {
  const getTokenByUrl = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
  const token = getTokenByUrl.get('token');

  if (!token) {
    console.log("Aucun token trouvé dans l'url");
    setIsTokenValid(false);
    setIsLoading(false);
    return;
  }

  const checkToken = async () => {
    try {
      const res = await fetch(`/api/auth/reset-password?token=${token}`);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const data = await res.json();

      if (res.ok) {
        setIsTokenValid(true);
      } else {
        setIsTokenValid(false);
      }
    } catch (error) {
      console.error("Erreur serveur :", error);
      setIsTokenValid(false);
    } finally {
      setIsLoading(false);
    }
  };

  checkToken();
}, [getTokenByUrl]);



  if (isLoading) {
    return (
      <SpinnerTns />
    )
  }

  if (isTokenValid === false) {
    return (
      <>
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10"></div>
        <hr className="text-white border" />
        <div className="border-1 border-blue-500 w-full h-full flex justify-center items-center fixed inset-0 z-20" role="dialog"
          aria-modal="true">

          <div className="h-[110px] rounded-md bg--grisArdoise text-sm shadow-lg top-0 px-4 py-3">
            <p className="text-xl">Ce lien a expiré ou est invalide.</p>
            <a href="/connexion" className="underline underline-offset-1 relative top-2">Retour à la connexion</a>
          </div>
        </div></>
    );
  }

  return (
    <section className="h-full w-auto">
      <form className="flex flex-column justify-center gap-5 pl-5 md:items-center md:pl-0">
        <div className="mt-1">
          <h1 className="mt-1 text-xl">Réinitialisation de votre de mot de passe</h1>
          <hr className="text-gray-500 opacity-45 px-2" />
        </div>

        <div className="">
          <h2 className="text-lg">Définir un nouveau mot de passe</h2>
          <p className="italic text-xs opacity-45">Choisissez un mot de passe fort que vous n&apos;avez pas utiliser auparavant</p>
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
            onClick={() => setShowPassword(!showPassword)}
          />


          {/* CONFIRMATION DU PASSWORD */}
          <label htmlFor="inputConfirmNewPassword">Confirmation de mot passe</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-[425px] py-2.5 pl-4 bg--form rounded-md placeholder-[#8C5744] focus:border-[#c07a61] focus:ring-2 focus:ring-[#C29A7E] outline-none transition"
            id="inputConfirmNewPassword"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            value={confirmNewPassword}
            placeholder="Confirmer votre mot de passe"
            required
          />

          <FontAwesomeIcon
            icon={newPassword ? faEye : faEyeSlash}
            className="absolute right-10 top-36 cursor-pointer text-lg text-black"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <div className="flex justify-center">
          <button className="rounded-md font-base py-2.5 px-4 mb-16 bg--form hover:bg-[#63362d] transition">Enregistrer les modifications</button>
        </div>

      </form>
    </section>
  );

}