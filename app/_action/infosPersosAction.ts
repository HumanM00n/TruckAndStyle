'use server';

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

        if (partsRequest.length === 0) return null;

        const updateUserQuery = `UPDATE tns_users SET ${partsRequest.join(",")} WHERE id_users = ${userId}`;      

        await pool.query(updateUserQuery, newValues);

        return { ...newInfo };
    } catch (error) {
        return null;
    };
}
