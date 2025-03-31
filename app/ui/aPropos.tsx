"use client";

import Image from "next/image";
import { faCaretLeft, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Apropos() {
  return (
    <>

      {/* SECTION NOTRE TRUCK + COUPES PROPOSEES  */}
      <section className="border-1 border-blue-500 min-h-screen text-white">
        <div className="border w-full">
          <div className="flex justify-center md:w-1/2 md:justify-center">
            <h1 className="text-3xl font-semibold">Notre <span className="color--form">Truck&apos;s</span></h1>
          </div>

          {/* IMAGE DU CAMION + LIBELLE */}
          <div className="border w-full flex flex-col items-center justify-center px-3 py-2">
            <div className="absolute origin-center rotate-[45deg] right-[30rem] top-[11.5rem] ">
              {/* <FontAwesomeIcon icon={faPlay} /> */}
              <FontAwesomeIcon icon={faCaretLeft} className="border-1 border-pink-500 z-50 w-56 h-48 color--form"/>
            </div>

            <div className="border-1 border-purple-500 w-auto px-3 py-2 rounded-md">
              <div className="z-10">
                <Image
                  src={"/assets/truck.png"}
                  alt="Photo de notre Truck"
                  height={150}
                  width={150}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>

              <div className="text-center mt-3">

                <h2 className="font-playfair text-xl font-[550] mb-2">Le hair'truck</h2>
                <p className="capitalize text-left text-sm">Praesent ante libero, congue eu ante a, faucibus euismod lorem. In sit amet mauris non tellus laoreet porttitor. Aenean congue tincidunt rutrum. 
                  Etiam bibendum pharetra egestas. Sed sagittis rutrum tortor, sollicitudin vulputate ex finibus a. Aenean mauris magna, imperdiet quis ornare vel, finibus a erat. 
                  Vestibulum sem odio, placerat eu nunc ut, dictum malesuada nisl. Sed eget libero sed enim maximus porttitor.</p>
              </div>
            </div>
          </div>

          {/* IMAGES DES COUPES */}
          <div className=""></div>
        </div>
      </section>

      {/* SECTION GALERY */}
      <section className="border-1 border-red-500">
        <h1></h1>
      </section>
    </>

  );
}
