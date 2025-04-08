"use client";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  return (
    <section className="border-1 border-blue-600 ">
      <div className="border text-white flex flex-col">
        <div className="w-full border-1 border-red-500 px-3">
          <h1 className="text-3xl mb-3"> Bienvenue sur <span className="color--form">Truck&apos;n Style</span></h1>

          <p className="text-sm">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl
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
            <button className="btn text-[15px] rounded-xs bg--form text-white
            hover:bg-[#733e3471]">
                En savoir plus
            </button>

            <button className="btn btn-outline-light text-[15px] rounded-xs text-[#733E34] border-1 border-[#733E34]
            hover:bg-white hover:text-[#733E34]">
                Réserver votre coupe
            </button>
          </div>

        </div>

        <div className="hidden"></div>
      </div>

      {/* DEUXIEME SECTION */}
      <div className="border-1 border-green-600 bg--grisArdoiseMid w-full mt-3">
        <div className="border text-white flex flex-col px-3">
          <div className="mb-3">
            <h2 className="text-3xl mb-3">Découvre <span className="color--form">nos coupes</span></h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante. </p>
            
            <div className="hidden">
              <FontAwesomeIcon icon={faArrowLeft} className="text-7xl"/>
              <FontAwesomeIcon icon={faArrowRight} className="text-7xl"/>
            </div>
           
          </div>

          <div className="grid grid-cols-2">
            <Image 
            src={"/assets/cadreHome.png"}
            alt="Image de coupe de cheveux"
            width={200}
            height={150}
            quality={90}
            className="mb-3"
            />
                        
            <Image 
            src={"/assets/cadreHome.png"}
            alt="Image de coupe de cheveux"
            width={200}
            height={150}
            quality={90}
            className="mb-3"
            />            
            
            <Image 
            src={"/assets/cadreHome.png"}
            alt="Image de coupe de cheveux"
            width={200}
            height={150}
            quality={90}
            />            
            
            <Image 
            src={"/assets/cadreHome.png"}
            alt="Image de coupe de cheveux"
            width={200}
            height={150}
            quality={90}
            />
            
          </div>
          
        </div>
      </div>

      {/* TROISIEME SECTION */}
        <div className="">
          <div className=""></div>
        </div>

    </section>

    
  );
}
