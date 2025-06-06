import Providers from "../_components/providers";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"], // ou ["latin-ext"] si besoin
  weight: ["400", "500", "600", "700"], // les graisses que tu veux utiliser
  variable: "--font-playfair", // optionnel, si tu veux utiliser en CSS
})

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <main>
        <Header />
        <section className="bg--noir">{children}</section>
        <Footer />
      </main>
    </Providers>
  );
}
