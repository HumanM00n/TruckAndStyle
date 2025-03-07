'use server';

import pool from "../_lib/db";
import { console } from "inspector";

export async function sendPostContact(FormData: FormData) {
    const email = FormData.get("inputEmail");
    const telephone = FormData.get("phoneNumber") as string;
    const content = FormData.get("contentTextarea") as string;

    // Vérification des champs vides
    if (!email || !telephone || !content) {
        return { success: false, message: "Tous les champs * doivent être renseignés." };
    }

    // Vérifie la longueur du numéro de téléphone
    if (telephone.length !== 10) {
        return { success: false, message: "Le numéro de téléphone est incorrecte." };
    }


    if (content.length < 20) {
        return { success: false, message: "Le texte doit contenir au moins 20 caractères" }
        
    }


    try {
        
       // Insertion des données 
        await pool.query(`INSERT INTO tns_contact (email_user, phone_user, message_content) VALUES (?, ?, ?)`, [
            email,
            telephone,
            content,
        ]);

        console.log(email, telephone, content);
        return { success: true, message: "Votre message a été envoyé !" };

    } catch (error) {
        console.error("Erreur MySQL:", error);
        return { success: false, message: "Une erreur est survenue lors de l'envoie, réessayez plus tard." };

    }
}