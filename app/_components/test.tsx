'use client';

import { useState } from "react";

type Coupe = {
  coupes: string;
  cout: string;
  temps: string;
};


type CoupeDataMap = {
    [key: string]: Coupe[];
}

type Props = {
    data: CoupeDataMap;
} 


export default function DynamicDisplay({ data }: Props) {

  const [view, setView] = useState<string>('courtes');

  const boutons = Object.keys(data);

  const coupesActuelles = data[view];

    return (
        <div className="p-4">
            <div className="flex gap-4 mb-6">
                {boutons.map((key) => (
                    <button
                        key={key}
                        onClick={() => setView(key)}
                        className={`px-4 py-2 rounded ${view === key ? 'bg-blue-600 text-white' : 'bg-gray-200'
                            }`}
                    >
                        {key}
                    </button>
                ))}
            </div>

            <ul className="space-y-4">
                {coupesActuelles.map((item, index) => (
                    <li key={index} className="p-4 border rounded shadow">
                        <p className="font-bold">{item.coupes}</p>
                        <p>Prix : {item.cout}</p>
                        <p>Durée : {item.temps}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}