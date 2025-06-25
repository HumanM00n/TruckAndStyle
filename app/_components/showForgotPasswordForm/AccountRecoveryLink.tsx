'use client';

import { useState } from "react";

export default function AccountRecoveryLink({ onClose, onSubmit, }: { onClose: () => void; onSubmit: (email: string) => void; }) {
  const [ email, setEmail ] = useState("");

  const handleSubmit = () => {
    if (!email.trim()) return;
    onSubmit(email.trim()); 
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center z-20" onClick={onClose}>
        <div className="h-[375px] w-96 bg--form rounded-md text-sm shadow-lg relative animate-appear" role="dialog" aria-modal="true"
          onClick={(e) => e.stopPropagation()}>

          <div className="flex flex-col gap-7 items-center p-4">
            <div className="relative w-full text-right">
              <button type="button" className="btn-close btn-close-white focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-2" 
              aria-label="Close" onClick={onClose}></button>
            </div>

            <h1 className="text-xl text-center">Retrouver votre compte Hair&apos;Truck</h1>
            <h2 className="text-base text-center">Dites-nous en plus sur votre compte.</h2>

            <div className="flex flex-col w-full px-6">
              <label htmlFor="inputForEmail">Saisissez votre adresse e-mail</label>
              <input
                type="email"
                id="inputForEmail"
                name="emailVerify"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ex : example@gmail.com"
                required
                className="form-control md:py-2.5 px-4 placeholder-[#8C5744] placeholder-opacity-70 focus:ring-[#8C5744] focus:border-[#8C5744] focus:ring-4 transition"
              />
            </div>

            <button 
            className="btn btn-outline-light w-[275px] rounded-xs hover:bg-white hover:text-[#733E34] transition" 
            onClick={handleSubmit}
            type="button">
              Continuer
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes appear {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-appear {
          animation: appear 1.5s ease forwards;
        }
      `}</style>
    </>
  );
}
