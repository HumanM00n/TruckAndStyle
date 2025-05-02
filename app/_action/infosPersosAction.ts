'use server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import pool from "../_lib/db";
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


export const updatPersonalInfo = async (newInfo: Partial<{ lastname: string; firstname: string; phone: string; email: string }>) => {
    try {
        console.log("📥 Données reçues par updatPersonalInfo :", newInfo);

        const queryParts: string[] = []; 
        const values: any[] = []; 

        Object.entries(newInfo).forEach(([key, val]) => {
            if (val !== undefined && val !== "") { // Évite d'inclure des valeurs vides
                queryParts.push(`${key} = ?`);
                values.push(val);
            }
        });
        
        console.error("Partie de la requête :", queryParts);
        console.log("Valeurs envoyées :", values);
        

        if (queryParts.length === 0) return null; // Aucun changement

        const updateUserQuery = `UPDATE tns_users SET ${queryParts.join(", ")} WHERE id_users = ?`;
        console.log("Requête Final :", updateUserQuery);

        await pool.query(updateUserQuery, values);

        console.log("✅ Mise à jour des données réussie !");
        
        return { ...newInfo }; // Retourne les nouvelles données mises à jour
    } catch (error) {
        console.error("Erreur lors de la mise à jour des informations :", error);
        return null;
    }
};
