import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: '404',
  description: "Cette page est introuvable"
};

export default function NotFound() {
  return (

    <React.Fragment>
      <div className='flex flex-col justify-center items-center text-white gap-3'>
        <Image
          src="/logo/logoTNS-white.png"
          width={250}
          height={100}
          alt="Logo blanc de l'application"
        />
        <h2>Erreur 404: Cette page est sortie de la route !</h2>
        <p>Nos développeurs essayent de la retrouver... ou peut-être pas. <FontAwesomeIcon icon={faTruck} /></p>
        <Link href="/" className="underline underline-offset-2 hover:text-[#8C5744] transition duration-300">
          Page d&apos;accueil
        </Link>
      </div>
    </React.Fragment>

  )
}
