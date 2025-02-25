import { NextResponse } from "next/server";
import pool from "@/app/_lib/db";
import bcrypt from 'bcryptjs'; 
import { ResultSetHeader } from "mysql2";

//Création d'un utilisateur
export async function POST(req: Request) {
    const { lastName, firstName, email, password, birthdate, phone_number, department, city, user_type, create_at } = await req.json();

    try {
        // Vérifie si l'email existe déjà
        const existingUser = await pool.query('SELECT * FROM tns_users WHERE user_email = ?', [email]);
        if (existingUser.length > 0) {
            return NextResponse.json({ message: 'Email déjà utilisé' }, { status: 400 });
        }

        // Hashage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Création de l'utilisateur
        const createUser = await pool.query(
            'INSERT INTO tns_users (user_lastname, user_firstname, user_email, user_password, user_birthdate, user_phone_number, user_department, user_city, user_type, create_at) VALUES (?,?,?,?,?,?,?,?,?,?)',
            [lastName, firstName, email, hashedPassword, birthdate, phone_number, department, city, user_type, create_at]
        );

        return NextResponse.json({ message: 'Utilisateur créé avec succès', id: createUser });
    } catch (error) {
        console.error(error); // Affiche l'erreur dans la console
        return NextResponse.json({ message: 'Problème lors de la création de l\'utilisateur' }, { status: 500 });
    }
}

// Récupération des utilisateurs 
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('id');

        let query;
        let values: string[]; 

        if (userId) {
            query = 'SELECT * FROM tns_users WHERE id_users = ?';
            values = [userId];
        } else {
            query = 'SELECT * from tns_users';
            values = [];
        }

        const [rows] = await pool.query(query, values);
        return NextResponse.json(rows);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Problème lors de la récupération des utilisateurs" })
    } 
}


    // Mise à jour de l'uilisateur 
    export async function PUT(req: Request) {
        const { id, lastName, firstName, email, password, phone_number, city } = await req.json();

    try {
      let hashedPassword;
      if (password) {
        hashedPassword = bcrypt.hash(password, 10);
      }  
    

    const query = `UPDATE tns_users
                   SET
                     user_lastname = COALESCE(?, user_lastname),
                     user_firstname = COALESCE(?, user_firstname),
                     user_email = COALESCE(?, user_email),
                     user_password = COALESCE(?, user_password),
                     user_phone_number = COALESCE(?, user_phone_number),
                     user_city = COALESCE(?, user_city)
                   WHERE id_users = ?`;

    const values = [id, lastName, firstName, email, hashedPassword, phone_number, city];
    const [result] = await pool.execute<ResultSetHeader>(query, values);
    

    if (result.affectedRows === 0 ) {
        return NextResponse.json({ message: 'Utilisateur non trouvé' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Utilisateur mis à jour avec succès!' })
} catch (error) {

    console.error(error);
    return NextResponse.json({ message: 'Problème lors de la mise à jour de l\'utilisateur' }, { status: 500 });
}

}

// Suppression d'un utilisateur 
export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('id');

   if (!userId) {
    return NextResponse.json({ message: 'Id de l\'utilisateur introuvable' }, { status: 400 });
   } 

   try {
    const query = 'DELETE FROM tns_users WHERE id_users = ?';
    const [result] = await pool.execute<ResultSetHeader>(query, [userId]);

    if (result.affectedRows === 0 ) {
        return NextResponse.json({ message: 'Utilisateur non trouvé' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Utilisateur supprimé avec succès!' })
   } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Problème lors de la suppression de l\'utilisateur' });   
   }

} 