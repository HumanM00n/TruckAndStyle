"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function DsInfosCoupes() {
    return (
        <section className="bg--grisArdoiseMid w-full min-h-screen">
            <div className="text-white flex flex-col px-3">
                <div className="mb-3">
                    <h2 className="text-3xl mb-3">Découvre <span className="color--form">nos coupes</span></h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante. </p>

                    <div className="hidden">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-7xl" />
                        <FontAwesomeIcon icon={faArrowRight} className="text-7xl" />
                    </div>

                </div>

                <div className="grid grid-cols-2">
                    <div className="">
                        <Image
                            src={"/assets/cadreHome.png"}
                            alt="Image de coupe de cheveux"
                            width={200}
                            height={150}
                            quality={90}
                            className="mb-3 transition delay-75 duration-300 
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
                            className="mb-3 transition delay-75 duration-300 
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
                            className="transition delay-75 duration-300
                          hover:-translate-y-1 hover:scale-110"/>
                    </div>

                    <div className="">
                        <Image
                            src={"/assets/cadreHome.png"}
                            alt="Image de coupe de cheveux"
                            width={200}
                            height={150}
                            quality={90}
                            className="transition delay-75 duration-300
                          hover:-translate-y-1 hover:scale-110"/>
                    </div>

                </div>
            </div>
        </section>
    );
}