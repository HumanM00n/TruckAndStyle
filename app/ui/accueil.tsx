"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Home() {
  return (
    <section className="border-1 border-blue-600 h-auto w-auto">

      {/* PREMIRE SECTION */}
      <div className="text-white flex flex-col mb-3 min-h-dvh">
        <div className="w-full px-3">
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
            <button className="btn text-[15px] text-white rounded-xs bg--form
            hover:bg-[#733e3471] hover:text-red-500">
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
      <div className="bg--grisArdoiseMid w-full min-h-screen">
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
      </div>

      {/* TROISIEME SECTION */}
      <div className="border-1 border-blue-500 min-h-auto bg--grisArdoiseMid">
        <h2 className="text-3xl text-white pl-5">Avis & Tarifs</h2>
        <div className="flex flex-col">

          <div id="carouselExampleDark" className="carousel carousel-light slide min-h-[400px] px-9" data-bs-ride="carousel">

            {/* Indicateurs */}
            <div className="carousel-indicators mb-28">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className=""
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className=""
              />
            </div>

            {/* Slides */}
            <div className="carousel-inner h-[340px] w-full mt-2 px-6 pt-2 pb-4">

              <div className="carousel-item active h-[300px] bg--form rounded-lg" data-bs-interval="10000">
                <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-white pl-4 pt-3" />
                <div className="carousel-caption rounded-lg h-1/2 d-md-block pb-0 position-absolute bottom-16 text-white text-left px-3  object-fill">
                  <p className="">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante.”</p>
                  <div className="max-w-[500px] flex justify-end">
                    <span className="font-bold">Alex.D</span>
                  </div>
                </div>

              </div>

              <div className="carousel-item h-[300px] bg--form rounded-lg" data-bs-interval="2000">
                <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-white pl-4 pt-3" />
                <div className="carousel-caption rounded-lg h-1/2 d-md-block pb-0 position-absolute bottom-16 text-white text-left px-3">
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante.”</p>
                  <div className="max-w-[500px] flex justify-end">
                    <span className="font-bold">Mathis.R</span>
                  </div>
                </div>
              </div>

              <div className="carousel-item h-[300px] bg--form rounded-lg" data-bs-interval="3000">
                <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-white pl-4 pt-3" />
                <div className="carousel-caption rounded-lg h-1/2 d-md-block pb-0 position-absolute bottom-16 text-white text-left px-3">
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex. Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante.”</p>
                  <div className="max-w-[500px] flex justify-end ">
                    <span className="font-bold">Myriam.JD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nos Prix */}
          <div className="border-2 border-purple-500 w-full h-auto">
            <h3 className="text-3xl text-white pl-5">Nos Tarifs</h3>

            <div className="border-1 border-green-500 flex justify-center ">
              <div className="accordion border w-[650px] mt-3" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>


  );
}
