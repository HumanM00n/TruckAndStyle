import pool from "@/app/_lib/db";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const dataForm = await req.formData();
    const email = dataForm.get("inputEmail")?.toString().trim();
    const numeroTel = dataForm.get("phoneNumber")?.toString().trim();
    const messageContent = dataForm.get("contentTextarea")?.toString().trim();
    const csrfTokenFromBody = dataForm.get("csrfToken")
    const cookieStore = await cookies();
    const csrfTokenFromCookie = cookieStore.get("csrfToken")?.value;
    
    if (!csrfTokenFromBody || !csrfTokenFromCookie || csrfTokenFromBody !== csrfTokenFromCookie) {
        return NextResponse.json(
            { success: false, message: 'Échec de vérification CSRF' },
            { status: 403 }
        )
    }

    const mailSendForUser = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });


    if (!email || !numeroTel || !messageContent) {
        return NextResponse.json({ succes: false, message: "Tous les champs * doivent être renseignés." }, { status: 401 });
    }

    if (numeroTel.length !== 10 || !/^\d+$/.test(numeroTel)) {
        return NextResponse.json({ success: false, message: "Le numéro de téléphone est incorrecte." }, { status: 401 });
    }

    if (messageContent.length < 20) {
        return NextResponse.json({ success: false, message: "Le texte doit contenir au moins 20 caractères" }, { status: 401 });
    }

    const [rows] = await pool.execute(`SELECT id_contact FROM tns_contact WHERE phone_user = ? AND create_at > (NOW() - INTERVAL 1 HOUR)`,
        [numeroTel]
    );

    if ((rows as never[]).length > 0) {
        return NextResponse.json({ success: false, message: "Vous avez déjà envoyé un message récemment. Veuillez patienter." }, { status: 429 })
    }

    try {
        const queryPostContact = `INSERT INTO tns_contact (email_user, phone_user, message_content) VALUES (?, ?, ?)`;
        const valuesPostContact = [email, numeroTel, messageContent];

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [resultQuery] = await pool.execute(queryPostContact, valuesPostContact);

        await mailSendForUser.sendMail({
            from: ' " Support TruckNStyle" <no-reply@truckandstyle.com>',
            to: email,
            subject: "Confirmation de Votre message",
            text: `Bonjour,

Nous avons bien reçu votre message,

Nous vous répondrons dans les plus brefs délais.

Merci de votre confiance !

Cordialement,
L'équipe TruckAndStyle`
        })

        return NextResponse.json({ success: true, message: "Votre message a bien été envoyé !" }, { status: 200 });

    } catch (error) {
        console.error('Erreur MySQL :', error)
        return NextResponse.json({ success: false, message: 'Erreur serveur' }, { status: 500 })
    }
}
