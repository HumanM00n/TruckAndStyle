'use server';

import { useState } from "react";
import pool from "../_lib/db";
import { console } from "inspector";

// async (userId: string)  
export const getPersonalInfo = async () => {

    try {
        // Le premier any[] contient les resultats de la requêtes 
        // Le deuxième any[] contient les métadonnées des colonnes 
        const [pullPersonnalInfos]: [any[], any] = await pool.query("SELECT user_lastname, user_firstname, user_email, user_phone_number, user_password FROM tns_users WHERE id_users = 1; ");

        if (!pullPersonnalInfos || pullPersonnalInfos.length === 0) {
            throw new Error("Une erreur lors de la récupérations des informations:")
        }

        return pullPersonnalInfos[0];


    } catch (error) {
        console.error(" Erreur lors de la récupération des informations :", error);
        return null;
    }
};


export const updatPersonalInfo = async (newInfo: { lastname: string; firstname: string; phone: string; email: string; password: string }) => {

    try {
        await pool.query(`UPDATE tns_users 
                          SET
                            user_lastname = COALESCE(?, user_lastname),
                            user_firstname = COALESCE(?, user_firstname),
                            user_email = COALESCE(?, user_email),
                            user_password = COALESCE(?, user_password),
                            user_phone_number = COALESCE(?, user_phone_number)
                          WHERE id_users = ? ;`,
            [newInfo.lastname, newInfo.firstname, newInfo.phone, newInfo.email, newInfo.password]);
        return { ...newInfo }; // Retourne infos après mise à jour
    
    } catch (error) {
        console.error("Erreur lors de la mise à jour des informations :", error)
        return null;
    }
};