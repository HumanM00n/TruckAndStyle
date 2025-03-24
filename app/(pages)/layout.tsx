import Providers from "../_components/providers";
import Header from "../_components/header";
import Footer from "../_components/footer";

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
