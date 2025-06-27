import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from '@/app/_lib/db';

export async function POST(req: Request) {

    const body = await req.json();
    const newPassword = body.newPassword?.trim();
    const token = body.token?.trim();

    // verif: Si le token existe  
    if (!token) {
        return NextResponse.json({ message: "Limite de temps atteinte" });
    }

    const [isTokenExpires] = await pool.execute(`SELECT token, expires_at FROM password_reset_tokens WHERE token = ? AND expires_at <= NOW();`, [token],)

    // Verif: Si le token depasse la valeur expires_at
    // if()


    // const [ isExistingPassword ] = await pool.execute(``)

    // Verif : Si le nv mot de passe n'est pas le nouveau 
    // Verif : Que le mot de passe saisie dépasse 8 caractères

}   