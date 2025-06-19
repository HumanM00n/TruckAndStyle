import pool from "@/app/_lib/db";
import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import { createHash } from "crypto";

export async function POST(req: Response) {
    const dataForm = await req.formData();
    const email = dataForm.get("inputEmail")?.toString().trim();
    const numeroTel = dataForm.get("phoneNumber")?.toString().trim();
    const messageContent = dataForm.get("contentTextarea")?.toString().trim();
    // const csrfToken = dataForm.get("csrfToken")?.toString();


    if (!email || !numeroTel || !messageContent) {
        return NextResponse.json({ succes: false, message: "Tous les champs * doivent être renseignés." }, { status: 401 });
    }

    if (numeroTel.length !== 10 || !/^\d+$/.test(numeroTel)) {
        return NextResponse.json({ success: false, message: "Le numéro de téléphone est incorrecte." }, { status: 401 });
    }

    if (messageContent.length < 20) {
        return NextResponse.json({ success: false, message: "Le texte doit contenir au moins 20 caractères" }, { status: 401 });
    }

    // const csrfCookie = (await cookies()).get("next-auth.csrf-token")?.value;
    // if (!csrfToken || !csrfCookie) {
    //     return ({ success: false, message: "Informations incomplètes" });
    // }

    // const [tokenFromCookie, tokenHash] = csrfCookie.split("|");
    // const validToken =
    //     tokenFromCookie &&
    //     createHash("sha256").update(csrfToken).digest("hex") === tokenHash;

    // if (!validToken) {
    //     return ({ success: false, message: "Non autorisé" });
    // }

    try {
        const queryPostContact = `INSERT INTO tns_contact (email_user, phone_user, message_content) VALUES (?, ?, ?)`;
        console.log(queryPostContact);

        const valuesPostContact = [email, numeroTel, messageContent];
        console.log(valuesPostContact);

        const [resultQuery] = await pool.execute(queryPostContact, valuesPostContact);
        console.log(resultQuery);
        

        console.log("Message envoyé", { email, numeroTel, messageContent });

        return NextResponse.json({ success: true, message: "Votre message a bien été envoyé !" }, { status: 200 });
    } catch (error) {
        console.error('Erreur MySQL :', error)
        return NextResponse.json({ success: false, message:'Erreur serveur' }, { status: 500 })
    }
}
