'use client';
import { usePathname } from "next/navigation"; 

import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/styles/globals.css";

// FontAwesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
        <title>{titlePage}</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}