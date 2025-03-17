import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "@/app/_lib/db"; // Connexion à la base de données

export async function POST(req: Request) {
    try {
        console.log(" Requête d'inscription reçue !");

        //  Lire et parser les données JSON UNE SEULE FOIS
        const body = await req.json();
        console.log(" Données reçues (sans mot de passe) :", { 
            nom: body.nom,
            prenom: body.prenom,
            email: body.email,
            telephone: body.telephone,
            departement: body.departement,
            codePostal: body.codePostal,
            ville: body.ville,
            password: "********" //  Mot de passe masqué dans les logs
        });

        //  Extraction des données
        const {
            nom: user_lastname,  
            prenom: user_firstname,
            email: user_email,
            password: user_password,
            telephone: user_phone_number,
            departement: user_department,
            codePostal: user_postcode,
            ville: user_city
        } = body;

        const user_type = 2; // Type d'utilisateur normal

        //  Vérification des champs obligatoires
        if (!user_lastname || !user_firstname || !user_email || !user_password || 
            !user_phone_number || !user_department || !user_postcode || !user_city) {
            console.log("⚠️ Tous les champs sont requis !");
            return NextResponse.json({ error: "Tous les champs doivent être remplis." }, { status: 400 });
        }

        //  Hashage sécurisé du mot de passe
        const hashedPassword = await bcrypt.hash(user_password, 10);
        console.log(" Mot de passe hashé avec succès");

        //  Vérifier si l'utilisateur existe déjà
        const [existingUsers] = await pool.query("SELECT * FROM tns_users WHERE user_email = ?", [user_email]);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((existingUsers as any[]).length > 0) {
            console.log("⚠️ L'utilisateur existe déjà !");
            return NextResponse.json({ error: "L'utilisateur existe déjà." }, { status: 409 });
        }

        //  Insérer l'utilisateur dans la base de données
        const [result] = await pool.query(
            `INSERT INTO tns_users (user_lastname, user_firstname, user_email, user_password, user_phone_number, 
                user_department, user_postcode, user_city, user_type) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [user_lastname, user_firstname, user_email, hashedPassword, user_phone_number, 
                user_department, user_postcode, user_city, user_type]
        );

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!(result as any).insertId) {
            console.error("Erreur lors de l'insertion de l'utilisateur !");
            return NextResponse.json({ error: "Erreur lors de la création du compte." }, { status: 500 });
        }

    } catch (error) {
        console.error(" Erreur serveur :", error);
        return NextResponse.json({ error: "Une erreur interne est survenue." }, { status: 500 });
    }
}
