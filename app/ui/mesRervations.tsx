"use client";

// Import des fonction 'Actions';

export default function MyBookings() {
  return (
    <section className="border-2 border-blue-700 w-full text-white md:min-h-auto">
      <div className="border flex flex-col justify-center items-center gap-8 md:flex-row md:justify-around md:items-start">
        <div className="rounded-md px-36 py-9 mt-3 bg--form">
          <p className="mb-2">Mes Informations</p>
          <p>Mes réservations</p>
        </div>

        <div className="border-1 border-red-500 w-[420px]">
          <h2 className="py-3 card-title font-bold">Mes rendez-vous</h2>
          <form className="card w-full border-2 border-purple-500 rounded-md py-3 bg--form flex flex-row text-white">
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
        </div>
      </div>
    </section>
  );
}
