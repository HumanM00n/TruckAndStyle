"use client";

import { signOut } from "next-auth/react";

export default function MyBookings() {

  return (
    <>
      <div className="border flex flex-col justify-center items-center gap-8 md:flex-row md:justify-around md:items-start">
        <div className="w-[420px] mb-14">
          <h2 className="pb-3 card-title font-bold">Mes rendez-vous</h2>
          <form className="card w-full rounded-md mb-3 py-3 bg--form flex flex-row text-white">
            <div className="card-body">
              <h4 className="card-title font-semibold pb-2">
                30 janvier 2025 à 16h30{" "}
              </h4>{" "}
              {/* Faire ajouter le résultat de la requête */}
              <p className="card-text text-sm underline pb-3">
                Adresse du Hair&rsquo;truck
              </p>
              {/* Paiement attendu */}
              <p className="text-sm font-semibold pb-3">
                Paiement attendu : 10,00€
              </p>
              {/* CONDITION : */}
              {/* If date_resa < date.now  */}
              {/* return */}
              {/* Noter */}
              {/* ELSE */}
              {/* Annuler la réservation */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="
                        btn-submit
                        py-2 
                        px-3 
                        text-sm
                        font-semibold
                        text-[#8C5744] 
                        bg-[#FBFBFB]                         
                        hover:bg-[#cecece]
                        hover:text-[#8C5744]
                        hover:brightness-110"
                >
                  Annuler la réservation
                </button>
              </div>
            </div>
          </form>

          {/* RENDEZ-VOUS PASSE AVEC PAIEMENT EFFECTUE */}

          <form className="card w-full rounded-md py-3 bg-form50 flex flex-row text-white">
            <div className="card-body">
              <h4 className="card-title font-semibold pb-2">
                10 janvier 2025 à 14h{" "}
              </h4>{" "}
              {/* Faire ajouter le résultat de la requête */}
              <p className="card-text text-sm underline pb-3">
                Adresse du Hair&rsquo;truck
              </p>
              {/* Paiement attendu */}
              <p className="text-sm font-semibold pb-3">
                Paiement effectué : 10,00€
              </p>
              {/* CONDITION : */}
              {/* If date_resa < date.now  */}
              {/* return */}
              {/* Noter */}
              {/* ELSE */}
              {/* Annuler la réservation */}
              {/* <div className="flex justify-end">
                <button
                  type="submit"
                  className="
                        btn-submit
                        py-2 
                        px-3 
                        text-sm
                        font-semibold
                        text-[#8C5744] 
                        bg-[#FBFBFB]                         
                        hover:bg-[#cecece]
                        hover:text-[#8C5744]
                        hover:brightness-110"
                >
                  Noter
                </button>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
