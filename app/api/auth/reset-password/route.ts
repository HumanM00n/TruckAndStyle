import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from '@/app/_lib/db';
import { ResultSetHeader } from "mysql2";

export async function POST(req: Request) {
    const body = await req.json();
    const newPassword = body.newPassword?.trim();
    const confirmNewPassword = body.confirmNewPassword?.trim();
    const token = body.token?.trim();
    
    if (!token) {
        return NextResponse.json({ message: "Une erreur est survenue lors du processus. Veuillez réessayer." }, { status: 400 });
    }

    const [isTokenExpires] = await pool.execute(`SELECT u.id_users, t.token FROM password_reset_tokens t
                                                    JOIN tns_users u ON t.user_id = u.id_users 
                                                    WHERE t.token = ? AND expires_at > NOW();`, [token],)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = (isTokenExpires as any)[0];

    if (!user) {
        return NextResponse.json({ message: "Token invalide ou expiré." }, { status: 400 });
    }

    if (!newPassword || !confirmNewPassword) {
        return NextResponse.json({ message: "Veuillez remplir tous les champs !" }, { status: 400 })
    }

    if (newPassword != confirmNewPassword) {
        return NextResponse.json({ message: "Les mots de passe ne correspondent pas." }, { status: 400 })
    }

    if (newPassword.length < 8) {
        return NextResponse.json({ message: "Le mot de passe doit contenir au moins 8 caractères." }, { status: 400 })
    }

    try {
        const newPasswordHash = await bcrypt.hash(newPassword, 10);

        const queryModifyPassword = `UPDATE tns_users SET user_password = ? WHERE id_users = ?`;
        const valuesModifyPassword = [newPasswordHash, user.id_users];
        
        const [resultQuery] = await pool.execute(queryModifyPassword, valuesModifyPassword)

        const result = resultQuery as ResultSetHeader;

        await pool.execute(`DELETE FROM password_reset_tokens WHERE token = ?`, [token]);

        if (result.affectedRows > 0) {
            return NextResponse.json({ success: true, message: "Votre nouveau mot de passe a été enregistré !"}, { status: 200 })
        } else {
            return NextResponse.json({ success: false, message: "Aucune mise à jour effectuée." }, {status: 400})
        }

    } catch (error) {
        console.error("Erreur interne :", error)
    }
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
        return NextResponse.json({ message: "Token manquant dans l'URL." }, { status: 400 });
    }

    const [rows] = await pool.execute(
        `SELECT u.id_users, t.token FROM password_reset_tokens t
         JOIN tns_users u ON t.user_id = u.id_users 
         WHERE t.token = ? AND t.expires_at > NOW();`,
        [token]
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = (rows as any[])[0];

    if (!user) {
        return NextResponse.json({ message: "Lien expiré ou invalide." }, { status: 400 });
    }

    return NextResponse.json({ message: "Token valide." }, { status: 200 });
}
