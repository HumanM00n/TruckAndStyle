"use client";
import { Session } from "inspector/promises";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function PsInformations() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data: session, status } = useSession();

    return (
        <section className="max-h-[700px] w-auto md:min-h-dvh">

            {/* PREMIRE SECTION */}
            <div className="text-white flex flex-col mb-3
            md:flex
            md:w-full
            md:flex-row
            md:justify-around
            md:min-h-dvh">
                <div className="w-full px-3
                md:w-1/2">
                    <h1 className="text-3xl mb-3
                    md:text-4xl"> Bienvenue sur le site <br /> <span className="color--form">Truck&apos;n Style</span></h1>

                    <p className="text-md lg:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl
                        ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper
                        ante. Integer dapibus ligula mi, sed mattis nisi rutrum vitae. Nam
                        in leo non nunc commodo convallis in non enim. Pellentesque interdum
                        vehicula dolor, eget auctor nulla efficitur sit amet. Aenean egestas
                        tempor lacus, at egestas justo eleifend in. Praesent at massa eu
                        ante hendrerit pellentesque. Praesent sit amet laoreet felis. Sed in
                        dolor et tortor consectetur tempor. Phasellus ultrices metus eu elit
                        eleifend pulvinar. Sed sodales quis mauris ut dapibus. Nulla eget
                        nisl id ante viverra feugiat sit amet vel mauris. Ut dolor augue,
                        aliquet nec lorem quis, accumsan ullamcorper quam.
                    </p>

                    <div className="flex mt-3 gap-3">
                        <Link href={"/a-propos"}>
                            <button className="btn text-[15px] text-white rounded-xs bg--form
                            hover:bg-[#733e3471] hover:text-red-500 hover:font-bold">
                                En savoir plus
                            </button>
                        </Link>

                        {session ? (
                            <Link href={"/reservation"}>
                                <button className="btn btn-outline-light text-[15px] rounded-xs text-[#733E34] border-1 border-[#733E34]
                                                    hover:bg-white hover:text-[#733E34] hover:font-bold">
                                    Réserver votre coupe
                                </button>
                            </Link>

                        ) : (
                            <Link href={"/connexion"}>
                                <button className="btn btn-outline-light text-[15px] rounded-xs text-[#733E34] border-1 border-[#733E34]
                            hover:bg-white hover:text-[#733E34] hover:font-bold">
                                    Réserver votre coupe
                                </button>
                            </Link>

                        )}

                    </div>
                </div>

                {/* PARTIE DROITE */}
                <div className="hidden 
                [@media(max-width:1607px)]:hidden
                md:flex
                md:flex-row-reverse
                md:w-1/2
                md:h-full
                md:static">

                    <div className="w-[450px] absolute top-56 right-1/4 p-10 translate-x-8 z-10 bg--form rounded-md
                    ">
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante.
                            Integer dapibus ligula mi, sed mattis nisi rutrum vitae. Nam in leo non nunc commodo convallis in non enim.
                        </p>
                    </div>

                    {/* TONDEUSE */}
                    <div className="mr-16 z-0">
                        <Image
                            src={"/assets/objets_coiffure/tondeuse2.png"}
                            alt="Photo d'une personne qui se fait coiffer la barbe"
                            height={450}
                            width={550}
                            quality={75}
                            className=""
                        />
                    </div>

                    <div className="z-10 absolute right-1/4 -bottom-8 translate-x-8">
                        <Image
                            src={"/assets/Coiffures/photo-coiff-accueil.jpg"}
                            alt="Photo d'une personne qui se fait coiffer la barbe"
                            height={200}
                            width={350}
                            quality={75}
                            className="rounded-md"
                            style={{

                                boxShadow: '-60px -20px 20px 10px #733E34',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}