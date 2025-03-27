"use client";

import Image from "next/image";

export default function Apropos() {
  return (
    <section className="border-1 border-blue-500 min-h-screen text-white">
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
      <div className="flex flex-row justify-center gap-6">

        <div className="card w-1/3 border-1 border-purple-500 bg--form px-2 pt-2 cursor-pointer">
          <Image src={"/assets/buzz-cut.jpg"} 
          alt="Coupe courte buzz cut" 
          width={200} 
          height={50} 
          quality={90}
          className="rounded-lg"
          />

          <div className="card-body">
               <p className="text-sm text-white">Coupes courtes</p>
          </div>
        </div>

        <div className="card w-1/3 bg--form cursor-pointer px-2 pt-2">
        <Image src={"/assets/buzz-cut.jpg"} 
          alt="Coupe courte buzz cut" 
          width={200} 
          height={50} 
          quality={90}
          className="rounded-lg"
          />
          <div className="card-body">
                <p className="text-sm text-white">Coupes mi-longues</p>
          </div>
        </div>

      </div>
    </section>
  );
}
