import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from '@/app/_lib/db';

export async function POST(req: Request) {
    const body = await req.json();
    const newPassword = body.newPassword?.trim();
    const confirmNewPassword = body.confirmNewPassword?.trim();
    const token = body.token?.trim();

    if (!token) {
        return NextResponse.json({ message: "Une erreur est survenue lors du processus. Veuillez réessayer." });
    }

    const [isTokenExpires] = await pool.execute(`SELECT u.id_users, t.token FROM password_reset_tokens t
                                                    JOIN tns_users u ON t.user_id = u.id_users 
                                                    WHERE t.token = ? AND expires_at > NOW();`, [token],)
    const expiredToken = (isTokenExpires as unknown[])[0];

    console.log("Résultat de la requête", expiredToken)

    if (expiredToken) {
        return NextResponse.json({ message: "Le lien a expiré. Merci de refaire une demande." }, { status: 400 });
    }

    if (!newPassword || !confirmNewPassword) {
        return { success: false, message: "Veuillez remplir tous les champs !" }
    }

    if (newPassword != confirmNewPassword) {
        return NextResponse.json({ message: "Les mots de passe ne correspondent pas." }, { status: 400 })
    }

    if (newPassword.length && confirmNewPassword.length < 8) {
        return { success: false, message: "Le mot de passe doit contenir au moins 8 caractères." }
    }

    try {

        // const newPasswordHash = await bcrypt.hash(newPassword, 10);

        // const queryModifyPassword = await pool.execute(`UPDATE user_password`)


    } catch (error) {
        console.error("Erreur interne :", error)
    }
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
        return NextResponse.json({ message: "Token manquant." }, { status: 400 });
    }

    const [result] = await pool.execute(
        `SELECT u.id_users FROM password_reset_tokens t
     JOIN tns_users u ON t.user_id = u.id_users 
     WHERE t.token = ? AND expires_at > NOW();`,
        [token]
    );

    const user = (result as never)[0];

    if (!user) {
        return NextResponse.json({ message: "Token invalide ou expiré." }, { status: 400 });
    }

    return NextResponse.json({ message: "Token valide." }, { status: 200 });
}