"use client";

export default function DynamicDisplay() {
  return (
    <div className="w-full max-w-lg p-4">
        <div className="mb-4 border-none border-bottom text-white">

          <div className="flex justify-between mb-4">
            <span className="font-bold">Slide Part</span>
            <span>10€</span>
          </div>

          <div className="flex justify-between items-center pb-2">
            <span>30 minutes</span>
            <button className="btn text-sm text-white rounded bg-[#733E34] px-3 py-1 hover:bg-[#733e3471]">
              Réserver cette coupe
            </button>
          </div>

        </div>
    </div>
  );
}
