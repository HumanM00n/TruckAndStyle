'use client';

import { useState } from "react";
export default function SendLinkAtEmail() {

  const [showContainerLink, setShowContainerLink] = useState(false);
  const openContainer = () => {
    setShowContainerLink(true);
  }

  return (
    <section className="min-h-[80vh]">
      <button type="button" className="btn w-48 border rounded-xs text-white bg--form hover:text-[#733E34] transition"
        onClick={openContainer}>
        Afficher le conteneur
      </button>

      {showContainerLink && (
        <>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10" ></div>
          <div className="border fixed inset-0 flex items-center z-20 transition-opacity duration-300 opacity-100" onClick={() => setShowContainerLink(false)} >
            <div className={`border-1 border-purple-500  h-[375px] w-96 bg--form rounded-md text-sm shadow-lg relative left-12`} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
              <form className="flex flex-column gap-10 items-center">

                <div className="relative" data-bs-theme="light">
                  <button type="button" className="btn-close btn-close-white absolute top-3  left-40 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-2"
                    aria-label="Close" onClick={() => setShowContainerLink(false)}></button>
                </div>

                <div className="text-xl">
                  <h1 className="">Retrouver votre compte Hair&apos;Truck</h1>
                </div>

                <div className="text-base">
                  <h2 className="">Dites-nous en plus sur votre compte.</h2>
                </div>

                <div className="flex flex-column">
                  <label htmlFor="inputForEmail">Saisissez votre adresse e-mail</label>
                  <input type="email" id="inputForEmail" placeholder="ex : example@gmail.com" required
                    className="form-control md:py-2.5 px-4 placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition" />
                </div>

                <div className="">
                  <button className="btn btn-outline-light w-[275px] rounded-xs hover:bg-white hover:text-[#733E34] transition" type="submit">
                    Continuer
                  </button>
                </div>

              </form>
            </div>
          </div>
        </>
      )}

    </section>
  )
}
