import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "@/app/_lib/db";

export async function POST(req: Request) {
    try {
        console.log("🔹 Requête d'inscription reçue !");
        const { email, password } = await req.json();

        // Vérifier si email et mot de passe sont bien fournis
        if (!email || !password) {
            console.log("⚠️ Email et mot de passe requis !");
            return NextResponse.json({ error: "Email et mot de passe requis" }, { status: 400 });
        }

        // Vérifier si l'utilisateur existe déjà
         const [existingUsers] = await pool.query("SELECT * FROM tns_users WHERE user_email = ?", [email]);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((existingUsers as any[]).length > 0) {
            console.log("⚠️ L'utilisateur existe déjà !");
            return NextResponse.json({ error: "L'utilisateur existe déjà" }, { status: 409 });
        }

        // Hasher le mot de passe avant de l'enregistrer
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insérer le nouvel utilisateur dans la base de données
        const [result] = await pool.query(
            "INSERT INTO tns_users (user_email, user_password) VALUES (?, ?)", 
            [email, hashedPassword]
        );

        // Vérifier si l'insertion a bien fonctionné
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!(result as any).insertId) {
            console.error("❌ Erreur lors de l'insertion de l'utilisateur !");
            return NextResponse.json({ error: "Erreur lors de la création du compte" }, { status: 500 });
        }
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const userId = (result as any).insertId;

        // Vérifier que la variable d'environnement contenant la clé secrète existe
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            console.error("❌ JWT_SECRET manquant !");
            return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
        }

        // Générer un token JWT pour authentifier l'utilisateur après l'inscription
        const token = jwt.sign({ userId, email }, secret, { expiresIn: "1h" });

        console.log("✅ Inscription réussie, token généré :", token);
        return NextResponse.json({ token }, { status: 201 });

    } catch (error) {
        console.error("❌ Erreur serveur :", error);
        return NextResponse.json({ error: error instanceof Error ? error.message : "Erreur serveur" }, { status: 500 });
    }
}
