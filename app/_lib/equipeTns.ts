export type Presentation = {
    nom: string;
    prenom: string;
    poste: string;
    photo: string;
    informations: string;
}

export type View = "CEO" | "Coiffeur" | "Conducteur";

export const dataEquipe: Record<View, Presentation[]> = {
    CEO: [
        { nom: 'Rouy', prenom: 'Mathis', poste: "CEO de Hair'Truck", photo: "/CEO/Ceo_Mathis.png", informations: "Bonjour, je suis un test" },
        { nom: "J'Dir", prenom: 'Myriam', poste: "CEO de Hair'Truck", photo: "/CEO/Ceo_Myriam.png", informations: "" },
    ],
    Conducteur: [
        { nom: "Bonhomme", prenom: "Simon", poste: "Conducteur", photo: "/Conducteur/Conducteur_Simon.png", informations: "" },
    ],
    Coiffeur: [
        { nom: 'Khouri', prenom: "Giulio", poste: "Coiffeur", photo: "/Coiffeurs/Coiffeur_Giulio.png", informations: "" },
        { nom: "Gounine", prenom: "Quentin", poste: "Coiffeur", photo: "/Coiffeurs/Coiffeur_Quentin.png", informations: "" },
        { nom: "Furtado", prenom: "Daivy", poste: "Coiffeur", photo: "/Coiffeurs/Coiffeur_Daivy.png", informations: "" },
    ]
}

