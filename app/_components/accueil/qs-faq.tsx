'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function QsFaq() {
    const faqUtilisateur = [
        {
            titre: 'Comment prendre rendez-vous ?',
            texte: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl ex...”'
        },
        {
            titre: 'Comment se passe le rendez-vous ?',
            texte: '“Suspendisse erat augue, maximus at dui at, pulvinar ullamcorper ante.”'
        },
        {
            titre: 'Comment gérer mes rendez-vous ?',
            texte: '“Duis et nisl ex. Suspendisse erat augue, maximus at dui at...”'
        },
    ]

    return ( // border-1 border-blue-500 // border-1 border-red-500
        <section className='bg--grisArdoiseMid w-full h-auto md:min-h-[700px] px-3 pb-3 text-white'>
            <h2 className='text-2xl pt-14 md:text-3xl lg:pl-11'>Foire <span className='color--form'><br />aux questions</span></h2>
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
                            {block.texte}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </section>
    );
}