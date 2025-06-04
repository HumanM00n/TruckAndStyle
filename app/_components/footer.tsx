'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"; 
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons"; 

export default function Footer() {

    const profilInstagram = "https://www.instagram.com/truck.nstyle/";
    const profilFacebook = "https://www.facebook.com/profile.php?id=61573511614832";

    return (
        <footer className="w-full font-montserrat flex justify-center bg-black">
            <div className="w-full flex justify-around">

                {/* Logo */}
                <div className="w-36">
                    <Image
                        src={"/logo/logoTNS-white.png"}
                        width={500}
                        height={300}
                        quality={90}
                        alt="Logo de l'application en blanc"
                    />
                </div>

                <div className="text-xs mx-3 md:text-sm md:m-0 text-white flex items-center">
                    Copyright©Trucknstyle
                </div>

                <div className="flex flex-row w-56 justify-between mt-3 md:w-72">
                    <div className="text-white flex flex-col gap-1 items-left">
                        <p className="text-lg font-semibold">Menu</p>
                        <Link href={"/"} className="text-xs md:text-sm text-left">Réservation</Link>
                        <Link href={"/a-propos"} className="text-xs md:text-sm text-left">À propos</Link>
                        <Link href={"/contactez-nous"} className="text-xs md:text-sm text-left">Contactez-nous</Link>
                    </div>

                    <div className="flex w-28 items-center justify-center gap-3 ">
                       <Link href={profilInstagram} target="_blank" className="transition-transform duration-300 hover:scale-125 hover:shadow-xl">
                            <FontAwesomeIcon icon={faSquareInstagram} className="color--form text-3xl border-none"/>
                        </Link> 

                       <Link href={profilFacebook} target="_blank" className="transition-transform duration-200 hover:scale-125 hover:shadow-xl">
                            <FontAwesomeIcon icon={faSquareFacebook} className="text-3xl color--form"/>
                        </Link>
                   </div>
                </div>

            </div>

        </footer>
    );
}