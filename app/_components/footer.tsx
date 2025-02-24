'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"; 
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons"; 

export default function Footer() {

    return (
        <footer className="w-full font-montserrat flex justify-center">
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

                <div className="text-sm text-white flex items-center">
                    Copyright©Trucknstyle
                </div>

                <div className="flex flex-row w-56 justify-between mt-3">
                    <div className="text-white flex flex-col gap-1 items-left">
                        <p className="text-lg font-semibold">Menu</p>
                        <Link href={"#"} className="text-xs text-left">Réservation</Link>
                        <Link href={"#"} className="text-xs text-left">À propos</Link>
                        <Link href={"#"} className="text-xs text-left">Contactez-nous</Link>
                    </div>

                    <div className="flex w-28 items-center justify-center gap-2.5">
                        <FontAwesomeIcon icon={faSquareInstagram} className="color--form size-9 border-none"/>

                        <FontAwesomeIcon icon={faSquareFacebook} className="size-9 color--form"/>
                   </div>
                </div>

            </div>

        </footer>
    );
}