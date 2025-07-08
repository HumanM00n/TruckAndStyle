'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { handleClientScriptLoad } from "next/script";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useRef, useEffect } from "react";

export default function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const countClick = useRef(0);

    function handleClick() {
        countClick.current = countClick.current +1;
        alert('Vous avez cliqué ' + countClick.current + ' fois !' );

    }


    return (
        <>
            <div className="text-white w-full flex flex-col items-center gap-4">
                <input type="button"
                    className="btn btn-outline-primary w-56"
                    //(e) = Event = Function d'évènement   
                    value={countClick.current}
                    onClick={handleClick}
                    //(e.target.value) = l'évènement déclenché sera target sur la value 
                />

            </div>

        </>
    );

}



