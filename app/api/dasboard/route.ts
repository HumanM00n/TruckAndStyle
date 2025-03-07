import { NextResponse } from "next/server";
import pool from "@/app/_lib/db";
import { RowDataPacket } from "mysql2";

// Récupération des statistiques du dashboard
export async function GET() {
    try {
        // Nombre total d'utilisateurs
        const [userCountRows] = await pool.query("SELECT COUNT(*) as totalUsers FROM tns_users");
        const totalUsers = (userCountRows as RowDataPacket[])[0]?.totalUsers || 0;

        // Nombre total de réservations
        const [reservationCountRows] = await pool.query("SELECT COUNT(*) as totalReservations FROM tns_reservation");
        const totalReservations = (reservationCountRows as RowDataPacket[])[0]?.totalReservations || 0;

        // Nombre de réservations à venir
        const [upcomingReservationsRows] = await pool.query(
            "SELECT COUNT(*) as upcomingReservations FROM tns_reservation WHERE reservation_datetime >= CURDATE()"
        );
        const upcomingReservations = (upcomingReservationsRows as RowDataPacket[])[0]?.upcomingReservations || 0;

        return NextResponse.json({
            totalUsers,
            totalReservations,
            upcomingReservations,
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des statistiques :", error);
        return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
    }
}
