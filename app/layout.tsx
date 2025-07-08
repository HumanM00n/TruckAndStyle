/* eslint-disable @next/next/no-sync-scripts */
'use client';

import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const router = usePathname();

  // Récupération de l'URL && On split l'url en 2 && On récupère le deuxième élément de la chaine de caractère 
  const myUrl = router;
  const pathnameUrl = myUrl.split("/");
  const titlePage = pathnameUrl[1] || "Accueil";

  return (

    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.min.js" integrity="sha384-VQqxDN0EQCkWoxt/0vsQvZswzTHUVOImccYmSyhJTp7kGtPed0Qcx8rK9h9YEgx+" crossOrigin="anonymous"></script>
        <title>{titlePage}</title>
      </head>
      <body className="text-white">
        {children}
      </body>
    </html>
  );
}