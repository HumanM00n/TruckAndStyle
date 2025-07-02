"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRef } from "react";
import { playfair } from "@/app/styles/fonts";

export default function DsInfosCoupes() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollImages = (direction: number) => {
        if (scrollRef.current) {
            const scrollAmount = 220 * direction;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="bg--grisArdoiseMid w-full min-h-auto py-3 md:min-h-[700px]">
            <div className="flex flex-col justify-center text-white mt-14 
            md:flex-row 
            md:justify-between
            md:mt-28">

                {/* BLOC 1 => TITRE & TEXT */}
                <div className="px-4 md:w-1/2">
                    <h2 className={` ${playfair.className} text-3xl text-center mb-2`}>
                        Découvre <span className="color--form">nos coupes</span>
                    </h2>
                    <p className="text-base text-left sm:px-16 md:px-6 lg:px-10">
                        Lors de la réservation, nous vous proposons un large choix de coiffures : coupes courtes, mi-longues, dégradées ou encore les dernières tendances du moment.
                        Chaque catégorie regroupe plusieurs styles afin de répondre à toutes vos envies et à chaque type de cheveux.
                        Notre objectif est de vous offrir une expérience personnalisée, adaptée à votre look et à votre personnalité.
                    </p>
                </div>

                {/* BLOC 2 => PHOTOS */}
                <div className="relative w-full mt-8 px-4 md:w-1/2 md:px-0">

                    <button
                        onClick={() => scrollImages(-1)}
                        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="text-white text-xl" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="
                            grid grid-cols-2 gap-4 
                            md:flex md:overflow-x-auto md:scroll-smooth md:gap-5 md:pr-12 md:no-scrollbar"
                    >
                        {[...Array(6)].map((_, i) => (
                            <Image
                                key={i}
                                src={"/assets/cadreHome.png"}
                                alt={`Image ${i}`}
                                width={200}
                                height={150}
                                quality={90}
                                className="min-w-[160px] md:min-w-[160px] md:flex-shrink-0 rounded-lg transition duration-300 hover:scale-110"
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => scrollImages(1)}
                        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full"
                    >
                        <FontAwesomeIcon icon={faArrowRight} className="text-white text-xl" />
                    </button>
                </div>

            </div>
        </section>
    );
}
