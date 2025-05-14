import { Button } from "@mui/material";
import Image from "next/image";
// import { useRef } from "react";

export default function PsChoixCoupes() {
    return (
        <section className="border-1 border-blue-500 w-auto h-auto text-white">
            <div className="border flex flex-column">

                <div className="">
                    <h1 className="text-2xl text-center">Le choix <span className="color--form">de la coupes</span></h1>
                </div>

                <div className="w-full grid grid-cols-2 gap-4 px-4">
                    <div className="border-1 border-[#733E34] w-52 px-2 py-3 mt-3 rounded-lg">
                        <Image
                            alt="Image d'une coupe de cheveux"
                            src={"/assets/photoCadreResa.png"}
                            width={150}
                            height={150}
                            quality={70}
                            className="w-full mb-3"

                        />
                        <span className="ml-8">Coupes courtes</span>

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
                        <span className="ml-4">Coupes mi-longues</span>

                    </div>


                    <button className="border-1 border-[#733E34] w-52 px-2 py-3 mt-3 rounded-lg">
                        <Image
                            alt="Image d'une coupe de cheveux"
                            src={"/assets/photoCadreResa.png"}
                            width={150}
                            height={150}
                            quality={70}
                            className="w-full mb-3"
                        />
                        <span className="">Coupes dégardés</span>
                    </button>

                    <div className="border-1 border-[#733E34] w-52 px-2 py-3 mt-3 rounded-lg">
                        <Image
                            alt="Image d'une coupe de cheveux"
                            src={"/assets/photoCadreResa.png"}
                            width={150}
                            height={150}
                            quality={70}
                            className="w-full mb-3"
                            id=""
                        />
                        <span className="ml-5">Coupes tendances</span>
                    </div>

                </div>
            </div>
        </section>
    );
}