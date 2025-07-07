'use client';
import Link from "next/link";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function SuccessBooking() {

  return (
    <section className="min-h-[80vh] px-2 relative">
      <div className="animate-fade-in-up-zoom bg--form h-64 w-[600px] absolute left-5 top-5 flex flex-col items-center justify-center rounded-md
      md:left-24
      lg:w-[650px]
      lg:left-52
      lg:top-14
      xl:left-80
      2xl:left-[600px]">
        <div className="flex">
          <CheckCircleOutlineIcon className="text-green-500 relative bottom-2 right-2" sx={{ fontSize: 40 }}/>
          <h1 className="text-[22px]">Votre réservation a bien été prise en compte !</h1>
        </div>
        <Link href={"/profil"} className="underline underline-offset-2 relative top-20 text-sm">Accéder à votre réservation sur votre profil</Link>
      </div>
    </section>
  )
}
