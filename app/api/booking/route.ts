import { NextResponse } from "next/server";
import pool from "@/app/_lib/db";
import { RowDataPacket } from "mysql2";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

// Récupération de toutes les réservations
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");

        let query = "SELECT id_reservation, id_haircut, reservation_datetime, reservation_price_haircut, id_hairdresser FROM tns_reservation";
        const values: (string | number)[] = [];

        if (userId) {
            query += " WHERE id_hairdresser = ?";
            values.push(userId);
        }

        const [reservations] = await pool.query(query, values);

        // Typage explicite du résultat de la requête
        const formattedReservations = reservations as RowDataPacket[];

        return NextResponse.json(formattedReservations);
    } catch (error) {
        console.error("Erreur lors de la récupération des réservations :", error);
        return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
    }
}

// Création d'une réservation
export async function POST(req: Request) {
   const body = await req.json();
   const userId = body.userId;
   const coupeChoisie = body.coupeChoisie;
   const datetime = body.datetime;

   const session = await getServerSession(authOptions);

    console.log(session);
    console.log("userId:", userId);
    console.log("Type de userId:", typeof userId);
    console.log("coupeChoisie:", coupeChoisie);
    console.log("datetime:", datetime);

   if(!userId) {
    return NextResponse.json({ message: "Informations manquantes !"}, { status: 401 });
   }

   if(!coupeChoisie) {
    return NextResponse.json({ message: "Veuillez Choisir une coupe de cheveux !"}, { status: 400 });
   }

   if(!datetime) {
    return NextResponse.json({ message: "Veuillez choisir une date et une heure ! "}, { status: 400 });
   }

    try {
        const queryReservation = `INSERT INTO tns_reservation
        (id_customer, reservation_haircut_name, reservation_datetime, reservation_duration_haircut, reservation_price_haircut) 
        VALUES (?, ?, ?, 30, 10.00)`;

        const valuesReservation = [userId, coupeChoisie, datetime, 30, 10.00];

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [resultQuery] = await pool.execute(queryReservation, valuesReservation);

        return NextResponse.json({ message: "Votre réservation a bien été prise en compte"}, {status: 200});
    } catch (error) {
        console.error("Erreur lors de la création de la réservation :", error);
        return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
    }
}

// Mise à jour d'une réservation
export async function PUT(req: Request) {
    try {
        const { id_reservation, reservation_datetime, reservation_duration_haircut, reservation_price_haircut } = await req.json();

        if (!id_reservation) {
            return NextResponse.json({ message: "ID de réservation requis" }, { status: 400 });
        }

        const checkQuery = "SELECT id_reservation FROM tns_reservation WHERE id_reservation = ?";
        const [existingReservations] = await pool.query(checkQuery, [id_reservation]);

        // Typage explicite de la réponse SQL
        const formattedReservations = existingReservations as RowDataPacket[];

        if (formattedReservations.length === 0) {
            return NextResponse.json({ message: "Réservation introuvable" }, { status: 404 });
        }

        const query = `
            UPDATE tns_reservation
            SET reservation_datetime = COALESCE(?, reservation_datetime),
                reservation_duration_haircut = COALESCE(?, reservation_duration_haircut),
                reservation_price_haircut = COALESCE(?, reservation_price_haircut)
            WHERE id_reservation = ?
        `;

        await pool.query(query, [reservation_datetime, reservation_duration_haircut, reservation_price_haircut, id_reservation]);

        return NextResponse.json({ message: "Réservation mise à jour avec succès" });
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la réservation :", error);
        return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
    }
}

// Suppression d'une réservation
export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id_reservation = parseInt(searchParams.get("id") || "", 10);

        const checkQuery = "SELECT id_reservation FROM tns_reservation WHERE id_reservation = ?";
        const [existingReservations] = await pool.query(checkQuery, [id_reservation]);

        // Typage explicite de la réponse SQL
        const formattedReservations = existingReservations as RowDataPacket[];

        if (formattedReservations.length === 0) {
            return NextResponse.json({ message: "Réservation introuvable" }, { status: 404 });
        }

        const deleteQuery = "DELETE FROM tns_reservation WHERE id_reservation = ?";
        await pool.query(deleteQuery, [id_reservation]);

        return NextResponse.json({ message: "Réservation supprimée avec succès" });
    } catch (error) {
        console.error("Erreur lors de la suppression de la réservation :", error);
        return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
    }
}
