"use client";

export default function PsInformations() {
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
        </section>
    );
}