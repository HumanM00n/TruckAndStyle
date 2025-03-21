import { SessionProvider } from "next-auth/react";
import Header from "../_components/header";
import Footer from "../_components/footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {

  return (
    <SessionProvider >
      <main>
        <Header />
        <section className="bg--noir ">{children}</section>
        <Footer />
      </main>
    </SessionProvider>
  );
}