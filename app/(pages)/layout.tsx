"use client";

import Header from "../_components/header";
import Footer from "../_components/footer";
import { usePathname } from "next/navigation";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {

  const router = usePathname();

  // Récupération de l'URL && On split l'url en 2 && On récupère le deuxième élément de la chaine de caractère 
  const myUrl = router;
  const pathnameUrl = myUrl.split("/");
  const titlePage = pathnameUrl[1] || "Accueil";

  console.log(titlePage);

  return (
    <main>
      <Header />
      <section className="bg--noir ">{children}</section>
      <Footer />
    </main>
  );
}