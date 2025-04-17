"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function DsInfosCoupes() {
    return (
        <section className="bg--grisArdoiseMid w-full min-h-auto py-3">
            <div className="flex justify-center flex-col text-white">

                {/* BLOC 1 => TITRE & TEXT */}
                <div className="px-2">
                    <h2 className="text-3xl text-center mb-2">Découvre <span className="color--form">nos coupes</span></h2>
                    <p className="text-base text-left pl-16 sm:text-blue-500 md:text-red-500">Lors de la réservation, nous vous proposons un large choix de coiffures : coupes courtes, mi-longues, dégradées ou encore les dernières tendances du moment.
                        Chaque catégorie regroupe plusieurs styles afin de répondre à toutes vos envies et à chaque type de cheveux.
                        Notre objectif est de vous offrir une expérience personnalisée, adaptée à votre look et à votre personnalité.</p>
                </div>

                {/* BLOC 2 => PHOTOS */}
                <div className="flex justify-center mt-6 mb-9">
                    <div className="grid grid-cols-2 gap-x-5 gap-y-2">

                        <div className="">
                            <Image
                                src={"/assets/cadreHome.png"}
                                alt="Image de coupe de cheveux"
                                width={200}
                                height={150}
                                quality={90}
                                className="w-40 transition delay-75 duration-300 
                                hover:-translate-y-1 hover:scale-110"
                            />
                        </div>

                        <div className="">
                            <Image
                                src={"/assets/cadreHome.png"}
                                alt="Image de coupe de cheveux"
                                width={200}
                                height={150}
                                quality={90}
                                className="w-40 transition delay-75 duration-300 
                                hover:-translate-y-1 hover:scale-110"
                            />
                        </div>

                        <div className="">
                            <Image
                                src={"/assets/cadreHome.png"}
                                alt="Image de coupe de cheveux"
                                width={200}
                                height={150}
                                quality={90}
                                className="w-40 transition delay-75 duration-300 
                                hover:-translate-y-1 hover:scale-110"
                            />
                        </div>

                        <div className="">
                            <Image
                                src={"/assets/cadreHome.png"}
                                alt="Image de coupe de cheveux"
                                width={200}
                                height={150}
                                quality={90}
                                className="w-40 transition delay-75 duration-300 
                                hover:-translate-y-1 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}