'use client';

import { useState } from "react";
import Image from "next/image";

export default function page() {


    return (
        <>
            <h1 className="text-center text-2xl">
                Notre <span className="color--form ">Truck&apos;s</span>
            </h1>
            <div className="border flex flex-col">
                {/* IMAGE DU TRUCK */}
                <div className=""></div>

                <div className="">
                    <h2>Le hair&apos;truck</h2>
                </div>

                <div className="">
                    <p>
                        {" "}
                        Praesent ante libero, congue eu ante a, faucibus euismod lorem. In
                        sit amet mauris non tellus laoreet porttitor. Aenean congue
                        tincidunt rutrum. Etiam bibendum pharetra egestas. Sed sagittis
                        rutrum tortor, sollicitudin vulputate ex finibus a. Aenean mauris
                        magna, imperdiet quis ornare vel, finibus a erat. Vestibulum sem
                        odio, placerat eu nunc ut, dictum malesuada nisl. Sed eget libero
                        sed enim maximus porttitor.
                    </p>
                </div>
            </div>

            {/* Liste des coiffures */}
            <div className="border-1 border-green-500 flex justify-center">
                <div className="border grid grid-cols-2 gap-6">

                    {/* CARD 1 */}
                    <div className="border card flex justify-center min-w-48 max-w-52 max-h-52 bg--form pt-3 cursor-pointer">
                        <Image src={"/assets/buzz-cut.jpg"}
                            alt="Coupe courte buzz cut"
                            width={150}
                            height={50}
                            quality={90}
                            className="rounded-lg h-36 ml-5"
                        />

                        <div className="card-body">
                            <p className="text-sm text-white text-center">Coupes courtes</p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="card min-w-48 max-w-52 max-h-52 bg--form pl-3 pt-2 cursor-pointer">
                        <Image src={"/assets/mi-long.jpg"}
                            alt="Coupe courte buzz cut"
                            width={140}
                            height={50}
                            quality={90}
                            className="rounded-lg max-h-[150px] ml-3"

                        />
                        <div className="card-body">
                            <p className="text-sm text-white px-0 ">Coupes mi-longues</p>
                        </div>
                    </div>


                    {/* CARD 3 */}
                    <div className="card min-w-48 max-w-52 max-h-52 bg--form pl-3 pt-2 cursor-pointer">
                        <Image src={"/assets/degrade.jpg"}
                            alt="Coupe courte buzz cut"
                            width={150}
                            height={50}
                            quality={90}
                            className="rounded-lg h-36 ml-2"

                        />
                        <div className="card-body">
                            <p className="text-sm text-white px-0 ">Coupes dégradé</p>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="card min-w-48 max-w-52 max-h-52 bg--form pl-3 pt-2 cursor-pointer">
                        <Image src={"/assets/drop-fade.jpg"}
                            alt="Coupe courte buzz cut"
                            width={150}
                            height={50}
                            quality={90}
                            className="rounded-lg h-36 ml-2"

                        />
                        <div className="card-body">
                            <p className="text-sm text-white px-0 ">Coupes tendances</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-red-500 bg-[#1F1F1F] w-full">
                <div className="">

                </div>
            </div>

        </>

    )
}