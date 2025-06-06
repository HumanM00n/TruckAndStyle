import Providers from "../_components/providers";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { playfair, montserrat } from "../styles/fonts";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <main className={`${montserrat.variable} ${playfair.variable}`}>
        <Header />
        <section className="bg--noir">{children}</section>
        <Footer />
      </main>
    </Providers>
  );
}
