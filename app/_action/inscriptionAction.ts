"use server";

import bcrypt from "bcryptjs";
import pool from "@/app/_lib/db"; 

export async function registerUser(formData: FormData) {
    const user_lastname = formData.get("nom")?.toString().trim();
    const user_firstname = formData.get("prenom")?.toString().trim();
    const user_email = formData.get("email")?.toString().trim();
    const user_password = formData.get("motDePasse")?.toString().trim();
    const user_phone_number = formData.get("telephone")?.toString().trim();
    const user_birthdate = formData.get("dateNaissance")?.toString().trim();
    const user_department = formData.get("departement")?.toString().trim();
    const user_postcode = formData.get("codePostal")?.toString().trim();
    const user_city = formData.get("ville")?.toString().trim();

    // Vérifications des champs
    if (!user_lastname || !user_firstname || !user_email || !user_password ||
        !user_phone_number || !user_birthdate || !user_department || !user_postcode || !user_city) {
        return { success: false, message: "Tous les champs doivent être remplis." };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) {
        return { success: false, message: "L'adresse email est invalide." };
    }

    if (user_password.length < 12) {
        return { success: false, message: "Le mot de passe doit contenir au moins 12 caractères." };
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(user_password)) {
        return { success: false, message: "Le mot de passe doit contenir au moins un caractère spécial." };
    }

    if (!/^\d{10}$/.test(user_phone_number)) {
        return { success: false, message: "Le numéro de téléphone est incorrect." };
    }

    // Vérification si le numéro est déjà utilisé
    try {
        const [existingPhoneNumber] = await pool.query("SELECT * FROM tns_users WHERE user_phone_number = ?", [user_phone_number]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((existingPhoneNumber as any[]).length > 0) {
            return { success: false, message: "Le numéro de téléphone est déjà associé à un utilisateur." };
        }

    } catch(error) {
        console.error("Erreur serveur :", error);
        return { success: false, message: "Une erreur interne est survenue." };
    }

    try {
        // Vérifier si l'utilisateur existe déjà
        const [existingUsers] = await pool.query("SELECT * FROM tns_users WHERE user_email = ?", [user_email]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((existingUsers as any[]).length > 0) {
            return { success: false, message: "Cette adresse mail est déjà utilisée. Veuillez en choisir une autre." };
        }

        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(user_password, 10);

        // Insérer l'utilisateur en base
        const [result] = await pool.query(
            `INSERT INTO tns_users (user_lastname, user_firstname, user_email, user_password, user_birthdate, user_phone_number, 
                user_department, user_postcode, user_city, user_type) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [user_lastname, user_firstname, user_email, hashedPassword, user_birthdate, user_phone_number, user_department, user_postcode, user_city, 3]
        );
        
      
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!(result as any).insertId) {
            return { success: false, message: "Erreur lors de la création du compte." };
        }

        return { success: true, message: "Votre compte a bien été crée ! Vous allez être redirigé." };

    } catch (error) {
        console.error("Erreur serveur :", error);
        return { success: false, message: "Une erreur interne est survenue." };
    }
}
