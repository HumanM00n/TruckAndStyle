'use client';

import ContactezNous from "@/app/ui/contactez-nous";
import { useEffect, useState } from "react";

export default function Page() {
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const res = await fetch("/api/csrf", {
        // Permet de récupérer le cookie 
        credentials: "include", 
      });
      const data = await res.json();
      setCsrfToken(data.csrfToken);
    };
    getToken();
  }, []);

  if (!csrfToken) return <p>Chargement du formulaire...</p>;

  return <ContactezNous csrfToken={csrfToken} />;
}
