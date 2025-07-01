import { playfair, montserrat } from "@/app/styles/fonts"
export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) {
  return (
      <main className={`${montserrat.variable} ${playfair.variable} bg--noir min-h-[100vh]`}>
        {children}
      </main>
  );
}
