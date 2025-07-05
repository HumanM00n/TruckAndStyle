'use client';
import Link from "next/link";

export default function ContactezNous() {

  return (
    <section>
      <div className="">
        <span></span>
        <p>Votre réservation a bien été pris en compte</p>
      </div>

      <div className="">
        <Link href={"/profil/"}>Accéder à votre réservation sur votre profil</Link>
      </div>
    </section>
)
}
