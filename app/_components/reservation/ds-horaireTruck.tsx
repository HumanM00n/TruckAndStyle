'use client';

export default function DsHoraireAndTruck() {
    return (
        <section className="border-1 border-blue-500 min-h-screen w-auto text-white relative px-4">
            <div className="">
                <div className="border w-[400px] bg--form flex flex-col items-center ">
                    <div className="mb-4">
                        <h2 className="text-xl">Nos horaires</h2>
                    </div>

                    <div className="mb-3">
                        <p className="font-bold mb-2">Lundi - Mardi - Mercredi - Jeudi - Vendredi</p>
                        <span className="pl-36">10h-18h</span>
                    </div>

                    <div className="">
                        <p className="font-bold">Samedi</p>
                        <span>10h-20h</span>
                    </div>
                </div>

                <div className="border-1 border-red-500">

                </div>
            </div>
        </section>
    )
}