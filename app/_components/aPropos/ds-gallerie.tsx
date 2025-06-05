'use client';
import Image from "next/image";

export default function DsGallerie() {
    return (
        <section className="w-auto min-h-[80vh] bg--grisArdoise text-white px-2 py-4">
            <div className="flex justify-center md:justify-start">
                <h2 className="text-3xl font-semibold mt-3 mb-4 pl-5 lg:pl-10">La <span className="color--form">Gallerie</span></h2>
            </div>
            <div className="flex justify-center flex-row">

                <div className="">
                    <Image src="/assets/photoCadreResa.png" alt="Photo 1" width={300} height={200} className="object-cover px-1 w-72 h-40" />
                    <Image src="/assets/photoCadreResa.png" alt="Photo 2" width={300} height={200} className="object-cover px-1 w-72 h-[325px] mt-2" />
                </div>


                <div className="">
                    <Image src="/assets/photoCadreResa.png" alt="Photo centrale plus grande" width={300} height={300} className="object-cover px-1 w-72 h-80" />
                    <Image src="/assets/photoCadreResa.png" alt="Photo en dessous" width={300} height={200} className="object-cover px-1 w-72 h-[164px]"/>
                </div>


                <div className="">
                    <Image src="/assets/photoCadreResa.png" alt="Photo 5" width={300} height={200} className="object-cover px-1 w-72 h-40" />
                    <Image src="/assets/photoCadreResa.png" alt="Photo 6" width={300} height={200} className="object-cover px-1 w-72 h-[325px] mt-2" />
                </div>
            </div>
        </section>
    );
}