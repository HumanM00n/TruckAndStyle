"use client";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRef } from "react";


export default function TsAvisPrix() {

    const scrollCard = useRef<HTMLDivElement>(null);

    const scrollOpinion = (direction: number) => {
        if (scrollCard.current) {
            const scrollAmount = 220 * direction;
            scrollCard.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className=" w-full min-h-auto bg--grisArdoiseMid ">
            <div className="flex flex-col justify-center text-white">

                {/* NOS PRIX */}
                <div className="w-full relative mt-8 mb-4 px-4 h-auto">
                    <h2 className="text-2xl">Nos <span className="color--form">Prix</span></h2>
                    <div className="mt-2 font-montserrat">
                        <Accordion className='bg-transparent text-white !shadow-[0px_2px_1px_0px_rgba(115,62,52,0.44)]'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className="text-white"
                            >
                                <Typography><span className='font-semibold'>Coupe de cheveux - </span><span className='font-normal'>Courtes</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails className='w-full'>
                                Buzz Cut
                                <span className="text-sm ml-20">10 €</span>
                                <hr className='w-48 mt-2'/>                                
                            </AccordionDetails>

                            <AccordionDetails>
                                Crew Cut
                                <span className="text-sm ml-20">10 €</span>
                                <hr className='w-48 mt-2'/>        
                            </AccordionDetails>

                            <AccordionDetails>
                                French Crop
                                <span className="text-sm ml-14">10 €</span>
                                <hr className='w-48 mt-2'/>
                            </AccordionDetails>

                            <AccordionDetails>
                                High and Tight
                                <span className="text-sm ml-9">10 €</span>
                                <hr className='w-48 mt-2'/>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className="bg-transparent text-white !shadow-[0px_2px_1px_0px_rgba(115,62,52,0.44)]">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                className='text-white'
                            >
                                <Typography><span className='font-semibold'>Coupes de cheveux - </span><span>mi-longs</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Slide Back
                                <span className="text-sm ml-[80px]">10 €</span>
                                <hr className='w-48 mt-2'/>
                            </AccordionDetails>

                            <AccordionDetails>
                                Slide Part
                                <span className="text-sm ml-[85px]">10 €</span>
                                <hr className='w-48 mt-2'/>
                            </AccordionDetails>

                            <AccordionDetails>
                                Middle Part
                                <span className="text-sm ml-[68px]">10 €</span>
                                <hr className='w-48 mt-2'/>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className="bg-transparent text-white !shadow-[0px_2px_1px_0px_rgba(115,62,52,0.44)]">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography><span className='font-semibold'>Coupes de cheveux - </span><span>Déradés (Fade)</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                High, Mid, Low Fade
                                <span className="text-sm ml-[68px]">10 €</span>
                                <hr className='w-72 mt-2'/>
                            </AccordionDetails>

                            <AccordionDetails>
                                Taper
                                <span className="text-sm ml-[185px]">10 €</span>
                                <hr className='w-72 mt-2'/>
                            </AccordionDetails>

                            <AccordionDetails>
                                Drop Fade
                                <span className="text-sm ml-[148px]">10 €</span>
                                <hr className='w-72 mt-2'/>
                            </AccordionDetails>

                            <AccordionDetails>
                                Burst Fade
                                <span className="text-sm ml-36">10 €</span>
                                <hr className='w-72 mt-2'/>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className="bg-transparent text-white !shadow-[0px_2px_1px_0px_rgba(115,62,52,0.44)]">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4-content"
                                id="panel4-header"
                            >
                                <Typography><span className='font-semibold'>Coupes de cheveux -</span> <span>Tendances</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                French Crop
                                <span className="text-sm ml-36">10 €</span>
                                <hr className='w-72 mt-2'/>
                            </AccordionDetails>

                            <AccordionDetails>
                                Dégradé Espagnol
                                <span className="text-sm ml-24">10 €</span>
                                <hr className='w-72 mt-2'/>
                            </AccordionDetails>

                            <AccordionDetails>
                                Taper
                                <span className="text-sm ml-[200px]">10 €</span>
                                <hr className='w-72 mt-2'/>
                            </AccordionDetails>

                            <AccordionDetails>
                                High Top Fade
                                <span className="text-sm ml-32">10 €</span>
                                <hr className='w-72 mt-2'/>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>

                {/* COMMENTAIRES */}
                <div className="border-1 border-blue-500 w-full h-auto">
                    
                </div>

            </div>
        </section>
    );
}