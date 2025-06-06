'use client';
import { playfair } from "@/app/styles/fonts";
import clsx from "clsx";
import Image from "next/image";

export default function DsGallerie() {
    return (
        <section className="w-auto min-h-[80vh] bg--grisArdoise text-white px-2 py-4">
            <div className="flex justify-center md:justify-start lg:justify-center">
                <h2 className={clsx(playfair.className, "text-3xl mt-3 mb-4 font-semibold pl-5 lg:pl-0")}>Gallerie</h2>
            </div>
            <div className="flex justify-center flex-row">

                <div className="">
                    <Image src="/assets/photoCadreResa.png" alt="Photo 1" width={300} height={200} className="object-cover px-1 w-72 h-40 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" />
                    <Image src="/assets/photoCadreResa.png" alt="Photo 2" width={300} height={200} className="object-cover px-1 w-72 h-[325px] mt-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" />
                </div>

                <div className="">
                    <Image src="/assets/photoCadreResa.png" alt="Photo centrale plus grande" width={300} height={300} className="object-cover px-1 w-72 h-80 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" />
                    <Image src="/assets/photoCadreResa.png" alt="Photo en dessous" width={300} height={200} className="object-cover px-1 w-72 h-[164px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"/>
                </div>

                <div className="">
                    <Image src="/assets/photoCadreResa.png" alt="Photo 5" width={300} height={200} className="object-cover px-1 w-72 h-40 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" />
                    <Image src="/assets/photoCadreResa.png" alt="Photo 6" width={300} height={200} className="object-cover px-1 w-72 h-[325px] mt-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" />
                </div>
            </div>
        </section>
    );
}