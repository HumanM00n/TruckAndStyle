'use client';

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PsChoixCoupes() {

    const [viewShortCuts, setViewShortCuts] = useState(true);
    const [viewMidLenghtCuts, setViewMidLenghtCuts] = useState(false);
    const [viewDegradedCuts, setDegradedCuts] = useState(false);
    const [viewTrendCuts, setTrendCuts] = useState(false);

    return (
        <section className="border-1 border-blue-500 w-auto h-auto text-white">
            <div className="flex flex-column">

                <div className="">
                    <h1 className="text-3xl text-center">Le choix <span className="color--form">de la coupes</span></h1>
                </div>

                <div className="w-full grid grid-cols-2 gap-4 px-4 mb-3
                md:flex
                md:text-sm
                lg:text-base
                lg:px-0
                lg:justify-center
                ">

                    <div className="border-1 border-[#733E34] w-52 px-2 py-3 mt-3 rounded-lg transition duration-300 hover:scale-105">
                        <Image
                            alt="Image d'une coupe de cheveux"
                            src={"/assets/photoCadreResa.png"}
                            width={150}
                            height={150}
                            quality={70}
                            className="w-full mb-3"
                        />
                        <span className="relative left-7 md:left-4">Coupes courtes</span>
                    </div>

                    <div className="border-1 border-[#733E34] w-52 px-2 py-3 mt-3 rounded-lg transition duration-300 hover:scale-105">
                        <button onClick={() => setViewMidLenghtCuts(false)}>
                            <Image
                            alt="Image d'une coupe de cheveux"
                            src={"/assets/photoCadreResa.png"}
                            width={150}
                            height={150}
                            quality={70}
                            className="w-full mb-3"
                        />
                        <span className="relative">Coupes mi-longues</span>
                        </button>

                    </div>

                    <div className="border-1 border-[#733E34] w-52 px-2 py-3 mt-3 rounded-lg transition duration-300 hover:scale-105">
                        <button onClick={() => setDegradedCuts(false)}>
                            <Image
                                alt="Image d'une coupe de cheveux"
                                src={"/assets/photoCadreResa.png"}
                                width={150}
                                height={150}
                                quality={70}
                                className="w-full mb-3"
                            />
                            <span className="relative">Coupes dégardés</span>
                        </button>
                    </div>

                    <div className="border-1 border-[#733E34] w-52 px-2 py-3 mt-3 rounded-lg transition duration-300 hover:scale-105">
                        <Image
                            alt="Image d'une coupe de cheveux"
                            src={"/assets/photoCadreResa.png"}
                            width={150}
                            height={150}
                            quality={70}
                            className="w-full mb-3"
                        />
                        <span className="relative left-5 md:left-2">Coupes tendances</span>
                    </div>
                </div>

                {/* <div className=""></div> */}
            </div>
        </section>
    );
}