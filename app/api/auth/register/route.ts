import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "@/app/_lib/db";

export async function POST(req: Request) {
    try {
        console.log(" Requête d'inscription reçue !");
        const {
            user_lastname,
            user_firstname,
            user_email,
            user_birthdate,
            user_password,
            user_phone_number,
            user_department,
            user_postcode,
            user_city,
            user_type,
        } = await req.json();

        // Vérification des champs obligatoires
        if (!user_lastname || !user_firstname || !user_email || !user_birthdate || !user_password || !user_phone_number || !user_department || !user_postcode || !user_city) {
            console.log("⚠️ Tous les champs sont requis !");
            return NextResponse.json({ error: "Tous les champs doivent être remplis." }, { status: 400 });
        }

        // Vérification si l'utilisateur existe déjà
        const [existingUsers] = await pool.query("SELECT * FROM tns_users WHERE user_email = ?", [user_email]);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((existingUsers as any[]).length > 0) {
            console.log("⚠️ L'utilisateur existe déjà !");
            return NextResponse.json({ error: "L'utilisateur existe déjà." }, { status: 409 });
        }

        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(user_password, 10);

        // Insérer l'utilisateur dans la base
        const [result] = await pool.query(
            `INSERT INTO tns_users (user_lastname, user_firstname, user_email, user_password, user_birthdate, user_phone_number, user_department, user_postcode, user_city, user_type) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [user_lastname, user_firstname, user_email, hashedPassword, user_birthdate, user_phone_number, user_department, user_postcode, user_city, user_type]
        );

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!(result as any).insertId) {
            console.error(" Erreur lors de l'insertion de l'utilisateur !");
            return NextResponse.json({ error: "Erreur lors de la création du compte." }, { status: 500 });
        }

         // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const userId = (result as any).insertId;

        // Vérifier la clé JWT
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            console.error(" JWT_SECRET manquant !");
            return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
        }

        // Générer un token JWT
        const token = jwt.sign({ userId, user_email }, secret, { expiresIn: "1h" });

        console.log(" Inscription réussie, token généré :", token);
        return NextResponse.json({ token, userId, email: user_email }, { status: 201 });

    } catch (error) {
        console.error(" Erreur serveur :", error);
        return NextResponse.json({ error: "Une erreur interne est survenue." }, { status: 500 });
    }
}
