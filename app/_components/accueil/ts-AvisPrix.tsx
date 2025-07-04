"use client";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import typesCoupes from '@/app/_lib/typeCoupes';
import { playfair } from '@/app/styles/fonts';

export default function TsAvisPrix() {
    // Création d'un tableau d'avis 
    const avisUtilisateurs = [
        {
            nom: 'Come.T',
            texte: `Super pratique ! J’ai réservé en 2 minutes pendant ma pause dej, et le truck était à deux pas de mon bureau. 
            L’équipe est pro, rapide et le résultat est top. Je recommande à 100 %.`
        },
        {
            nom: 'Rayane.L',
            texte: `J’ai testé le truck pendant sa tournée en ville et j’ai adoré l’expérience. Aucun stress, 
            une coupe nickel, et le tout en moins de 30 minutes. Idéal pour les gens pressés comme moi !`
        },
        {
            nom: 'Alex.D',
            texte: `Simple et efficace ! L'équipe de coiffeur est cool.`
        },
    ]
    return (
        <section className="w-full min-h-auto">
            <div className="flex flex-col justify-center text-white mt-14
            lg:flex-row-reverse
            lg:justify-between
            lg:mt-28">
                
                {/* NOS PRIX */}
                <div className="w-full relative mt-8 mb-4 px-4 h-auto
                lg:min-h-max
                lg:m-0
                lg:pt-5
                ">
                    <h2 className={`${playfair.className} text-2xl lg:text-3xl`}>Nos <span className="color--form">Prix</span></h2>
                    <div className="mt-2 font-montserrat">
                        {typesCoupes.map((group, content) => (
                            <Accordion key={content} className='bg-transparent text-white !shadow-[0px_2px_1px_0px_rgba(115,62,52,0.44)]'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${content}-content`}
                                    id={`panel${content}-header`}
                                    className="text-white"
                                >
                                    <Typography>
                                        <span className='font-semibold'>{group.libCoupe}</span>
                                        <span className='font-normal'>{group.typeCoupe}</span>
                                    </Typography>
                                </AccordionSummary>

                                {group.coupes.map((coupe, j) => (
                                    <AccordionDetails key={j} className='w-full flex justify-between'>
                                            {coupe}
                                            <span className="text-sm">{group.cout}</span>
                                    </AccordionDetails>
                                ))}
                            </Accordion>
                        ))}
                    </div>
                </div>

                {/* COMMENTAIRES */}
                <div className="w-full h-auto mt-3">
                    <h2 className={`${playfair.className} text-2xl pl-5 lg:pl-16 lg:text-3xl`}>Vos <span className="color--form">Avis</span></h2>
                    <div id="carouselExampleDark" className="carousel carousel-light slide min-h-[400px] px-9" data-bs-ride="carousel">
                        {/* Indicateurs */}
                        <div className="carousel-indicators mb-28">
                            {avisUtilisateurs.map((_, index) =>( 
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#carouselExampleDark"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-current="true"
                                    aria-label={`Slide ${index + 1}`}
                                />
                            ))}
                        </div>                        
                        <div className="carousel-inner h-[340px] w-full mt-2 px-6 pt-2 pb-4">
                            {avisUtilisateurs.map((item, i) => (
                                <div
                                    key={i}
                                    className={`carousel-item ${i === 0 ? "active" : ""} h-[300px] bg--form rounded-lg`}
                                    data-bs-interval="10000"
                                >
                                    <FontAwesomeIcon icon={faCircleUser} className="text-5xl text-white pl-4 pt-3" />
                                    <div className="carousel-caption rounded-lg h-1/2 d-md-block pb-0 position-absolute bottom-16 text-white text-left px-3 object-fill">
                                        <p>{item.texte}</p>
                                        <div className="max-w-[500px] flex justify-end">
                                            <span className="font-bold">{item.nom}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}