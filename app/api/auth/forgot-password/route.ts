import pool from "@/app/_lib/db";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
    const body = await req.json();
    const email = body.emailVerify?.trim();
    const sendEmailForResetPassword = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    if (!email) {
        return NextResponse.json({ message: "Adresse email manquante." }, { status: 400 });
    }

    const [queryEmailVerify] = await pool.execute(`SELECT id_users, user_email FROM tns_users WHERE user_email = ?`, [email]);
    if ((queryEmailVerify as never[]).length === 0) {
        return NextResponse.json({ message: "Indentifiant incorrect." }, { status: 401 });
    }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const user = (queryEmailVerify as any)[0];
        const userId = user.id_users;
    
        const token = crypto.randomBytes(32).toString("hex");

        const queryPostToken = `INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES (?, ?, NOW() + INTERVAL 1 HOUR)`;
        
        const valuesPostToken = [userId, token];

        await pool.execute(queryPostToken, valuesPostToken);

        const resetPasswordLink = `${process.env.TNS_PUBLIC_BASE_URL}/mot-de-passe-oublie?token=${token}`;
        await sendEmailForResetPassword.sendMail({
            from: ' " Support TruckNStyle" <no-reply@truckandstyle.com>',
            to: email,
            subject: "Réinitialisation de votre mot de passe",
text: `Bonjour,

Vous avez demandé la réinitialisation de votre mot de passe.

Veuillez cliquer sur ce lien pour le réinitialiser :
${resetPasswordLink}

Ce lien expirera dans 1 heure. Si vous n’avez pas fait cette demande, vous pouvez ignorer cet e-mail.

Merci,
L’équipe TruckNStyle`

        })        
        return NextResponse.json({ success: true, message: "Le lien de réinitialisation de votre mot de passe a été envoyé." }, { status: 200 });
    } catch (error) {
        console.error("Erreur MySQL :", error)
        return NextResponse.json({ message: "Erreur interne" }, { status: 500 });
    }

}