import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; 
import pool from '@/app/_lib/db';

export async function POST(req: Request) {
    // Verif : Si le nv mot de passe n'est pas le nouveau 
    // Verif : Que le mot de passe saisie dépasse 8 caractères
     
}   