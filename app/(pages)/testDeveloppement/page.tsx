'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Toastify from 'toastify-js';

export default function ContactezNous({ csrfToken }: { csrfToken: string }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const success = searchParams.get("success");
    const error = searchParams.get("error");

    if (success === "true") {
      Toastify({ text: "Votre message a bien été envoyé !", duration: 5000 }).showToast();
    } else if (success === "false") {
      let errorMessage = "Une erreur est survenue";
      switch (error) {
        case "incomplete": errorMessage = "Veuillez remplir tous les champs !"; break;
        case "incorrectPhoneNumber": errorMessage = "Le numéro de téléphone est incorrect."; break;
        case "incorrectMessageContent": errorMessage = "Le message doit contenir au moins 20 caractères."; break;
        case "requireMoreInformations": errorMessage = "Erreur CSRF."; break;
        case "notAuthorize": errorMessage = "Non autorisé."; break;
      }

      Toastify({ text: errorMessage, duration: 5000 }).showToast();
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    // Redirection manuelle
    if (res.redirected) {
      window.location.href = res.url;
    }
  }

  return (
    <form onSubmit={handleSubmit} className='text-black'>
      <input type="hidden" name="csrfToken" value={csrfToken} />
      <input name="inputEmail" type="email" placeholder="Email" />
      <input name="phoneNumber" type="text" placeholder="Téléphone" />
      <textarea name="contentTextarea" placeholder="Message"></textarea>
      <button type="submit" className='text-white bg-blue-400'>Envoyer</button>
    </form>
  );
}
