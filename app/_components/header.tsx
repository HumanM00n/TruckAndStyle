'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { useSession, signIn } from "next-auth/react"; 

export default function Header() {
    // MENU BURGER
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };

    return (
        <header className="w-full h-auto flex justify-center font-montserrat bg--noir text-base text-white z-50">
            <div className="containerNav max-w-screen-2xl flex flex-grow items-center justify-between p-4">

                {/* Logo */}
                <div className="containerLogo w-36">
                    <Link href="/">
                        <Image
                            src="/logo/logoTNS-brown.png"
                            width={200}
                            height={150}
                            quality={90}
                            alt="Logo du site"
                        />
                    </Link>
                </div>


                {/* Barre de navigation */}
                <nav className="hidden lg:flex h-20 border border-gray-300 rounded-md items-center py-6 px-6 gap-16">
                    <Link className="hoverMarron" href="/">Réservations</Link>
                    <Link className="hoverMarron" href="/">À propos</Link>
                    <Link className="hoverMarron" href="/contactez-nous">Contactez-nous</Link>
                </nav>

                {/* Connexion et Inscription */}
                <div className="hidden lg:flex h-20 w-60 justify-center gap-6 items-center">
                    <Link className="hoverMarron" href="/connexion">Connexion</Link> {/* Lien ajouté pour faire des tests */}
                    <Link className="hoverMarron" href="/">Inscription</Link>
                </div>


                {/*---------------------------------------------
                 |               MENU BUGER                     |
                -----------------------------------------------*/}

                {/* Menu Burger (Visible uniquement sur mobile) */}
                <button className="lg:hidden text-white text-2xl" onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            {/* Menu Mobile (Affiché si menuOpen est vrai) */}
            {menuOpen && (
                <div className="lg:hidden absolute bg-black top-20 left-0 w-full flex flex-col items-center gap-4 py-4 mt-14 z-10">
                    <Link className="hoverMarron" href="/pages">Réservations</Link>
                    <Link className="hoverMarron" href="/">À propos</Link>
                    <Link className="hoverMarron" href="/">Contactez-nous</Link>
                    <Link className="hoverMarron" href="/connexion">Connexion</Link>
                    <Link className="hoverMarron" href="/">Inscription</Link>
                </div>
            )}
        </header>
    );
}
