'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { playfair } from '@/app/styles/fonts';

export default function QsFaq() {
    const faqUtilisateur = [
        {
            titre: 'Comment prendre rendez-vous ?',
            texte: `Pour réserver, il faut d'abord vous connecter si vous avez un compte ou créer un compte et vous connecter juste après.
            Ensuite accéder à la page de réservation :\n
            - Selectionner le type de coiffure \n
            - Selectionner la coupe de cheveux \n
            - Selectionner la date et l'heure du rendez-vous\n  
            Et la place est prise !`
        },
        {
            titre: 'Comment se passe le rendez-vous ?',
            texte: `Pour ce qui est du rendez-vous, il vous suffit de consulter la map sur la page de réservation pour récupérer l'adresse du Hair'Truck.
            Puis, présentez-vous à l'emplacement du Hair'Truck, avec votre réservation et vous serez prit en charge par l'un de nos coiffeur.`
        },
        {
            titre: 'Comment gérer mes rendez-vous ?',
            texte: `Vous avez un empêchement de dernière minute ? Ou un oublie ? Pas de problème, vous pouvez annuler le rendez-vous. \n
            Il vous suffit de vous rendre sur : \n
            - Votre "Profil" \n
            - Cliquer sur "Mes réservations \n
            - Puis, cliquer sur "Annuler ma réservations \n
            
            ATTENTION ! Un fort nombre d'annulation de rendez-vous pourrait être suivit d'un avertissement, à terme une suspension de votre compte. \n
            Plus plus d'informations, n'hésitez pas à nous contacter via l'espace "Contactez-nous". `
        },
    ]

    return ( // border-1 border-blue-500 // border-1 border-red-500
        <section className='bg--grisArdoiseMid w-full h-auto md:min-h-[700px] px-3 pb-3 text-white'>
            <h2 className={`${playfair.className} text-2xl pt-14 md:text-3xl lg:pl-11`}>Foire <span className='color--form'><br />aux questions</span></h2>
            <div className="w-full flex flex-col items-center mt-2 font-montserrat mb-28">
                {faqUtilisateur.map((block, text) => (
                    <Accordion defaultExpanded key={text} className='bg-transparent text-white !shadow-[0px_2px_1px_0px_rgba(115,62,52,0.44)] 
                    sm:min-w-[600px]
                    md:w-2/3
                    lg:min-w-[700px]
                    xl:min-w-2/3'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${text}-text`}
                            id={`panel${text}-header`}
                            className="text-white">
                            <Typography>
                                <span className='font-semibold'>{block.titre}</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className='w-full flex'>
                            <p style={{ whiteSpace: "pre-line" }}>{block.texte}</p>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </section>
    );
}