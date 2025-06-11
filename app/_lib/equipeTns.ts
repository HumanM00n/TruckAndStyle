export type Presentation = {
    nom: string;
    prenom: string;
    poste: string;
}

export type View = "CEO" | "Coiffeur" | "Conducteur";

export const dataEquipe: Record<View, Presentation[]> = {
    CEO: [
        { nom: 'Rouy', prenom: 'Mathis', poste: "CEO de Hair'Truck" },
        { nom: "J'Dir", prenom: 'Myriam', poste: "CEO de Hair'Truck" },
    ],
    Coiffeur: [
        { nom: 'Khouri', prenom: "Giulio", poste: "Coiffeur" },
        { nom: "Furtado", prenom: "Daivy", poste: "Coiffeur" },
        { nom: "Gounine", prenom: "Quentin", poste: "Coiffeur" },
    ],
    Conducteur: [
        { nom: "NDoye", prenom: "Moussa", poste: "Conducteur" },
        { nom: "Bonhomme", prenom: "Simon", poste: "Conducteur" },
    ]
}

