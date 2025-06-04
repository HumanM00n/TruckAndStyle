export type Coupe = {
  coupes: string;
  cout: string;
  temps: string;
};

export type View = 'courtes' | 'mi-longues' | 'degrades' | 'tendances';

export const dataMap: Record<View, Coupe[]> = {
  courtes: [
    { coupes: 'Buzz cut', cout: '10 €', temps: '30 minutes' },
    { coupes: 'Crew cut', cout: '10 €', temps: '30 minutes' },
    { coupes: 'French crop', cout: '10 €', temps: '30 minutes' },
    { coupes: 'High and Tight', cout: '10 €', temps: '30 minutes' },
  ],
  'mi-longues': [
    { coupes: 'Slide Back', cout: '10 €', temps: '30 minutes' },
    { coupes: 'Slide Part', cout: '10 €', temps: '30 minutes' },
    { coupes: 'Middle Part', cout: '10 €', temps: '30 minutes' },
  ],
  degrades: [
    { coupes: 'High, Mid, Low Fade', cout: '10 €', temps: '30 minutes' },
    { coupes: 'Drop Fade', cout: '10 €', temps: '30 minutes' },
    { coupes: 'Brust Fade', cout: '10 €', temps: '30 minutes' },
    { coupes: 'Dégradé Espagnol', cout: '10 €', temps: '30 minutes' },
  ],
  tendances: [
    { coupes: 'French Crop', cout: '10 €', temps: '30 minutes' },
    { coupes: 'Taper', cout: '10 €', temps: '30 minutes' },
    { coupes: 'High Top Fade', cout: '10 €', temps: '30 minutes' },
  ],
};
