'use server';

import pool from "../_lib/db";
import { console } from "inspector";
export const getPersonalInfo = async (userId: number) => {

    try {
        // Le premier any[] contient les resultats de la requêtes 
        // Le deuxième any[] contient les métadonnées des colonnes 
        const [pullPersonnalInfos]: [any[], any] = await pool.query(`SELECT user_lastname, user_firstname, user_email, user_phone_number FROM tns_users WHERE id_users = ${userId};`);

        if (!pullPersonnalInfos || pullPersonnalInfos.length === 0) {
            throw new Error("Une erreur lors de la récupérations des informations:")
        }

        return pullPersonnalInfos[0];

    } catch (error) {
        console.error(" Erreur lors de la récupération des informations :", error);
        return null;
    }
};

export const updatPersonalInfo = async (newInfo: Partial<{ lastname: string; firstname: string; phone: string; email: string }>, userId: number) => {

    const fieldMapddb: Record<string, string> = {
        lastname: "user_lastname",
        firstname: "user_firstname",
        phone: "user_phone_number",
        email: "user_email",
    }

    try {

        const partsRequest: string[] = [];
        const newValues: any[] = [];

        Object.entries(newInfo).forEach(([key, value]) => {
            if (value !== undefined && value !== "") {
                const dbField = fieldMapddb[key];
                partsRequest.push(`${dbField} = ?`)
                newValues.push(value)
            }
        });

        if (newInfo.phone) {
            const [pullAllPhoneNumber]: [any[], any] = await pool.query(`SELECT * FROM tns_users WHERE user_phone_number = ? AND id_users != ?`,
                [newInfo.phone, userId]
            );

            if (pullAllPhoneNumber.length > 0) {
                return {
                    success: false,
                    message: "Le numéro saisi est déjà attribué, veuillez en saisir un autre",
                };
            }
        }

        if (newInfo.email) {
            const [pullAllEmail]: [any[], any] = await pool.query(`SELECT * FROM tns_users WHERE user_email = ? AND id_users != ?`,
                [newInfo, userId]
            );
        
            if (pullAllEmail.length > 0) {
                return {
                    success: false,
                    message: "L'adresse email saisi est déjà attribué, veuillez en saisir une autre",
                };
            }
        }

        if (partsRequest.length === 0) return null;

        const updateUserQuery = `UPDATE tns_users SET ${partsRequest.join(",")} WHERE id_users = ?`;
        newValues.push(userId)

        console.log("Requête final :", updateUserQuery);
        console.log("Valeurs envoyées :", newValues);

        await pool.query(updateUserQuery, newValues);

        return { 
            success: true,
            message: "Les informations ont été mises à jour.",
            ...newInfo };
    } catch (error) {
        console.error("Erreur serveur :", error);
        return { success: false, message: "Une erreur est survenue." };
    };    
}
