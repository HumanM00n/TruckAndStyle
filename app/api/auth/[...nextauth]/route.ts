/* eslint-disable @typescript-eslint/prefer-as-const */
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from '@/app/_lib/db';

export const authOptions = {

    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { type: "email" },
                password: { type: "password" }
            },

            async authorize(credentials) {
                const { email, password } = credentials!;

                // Requête vers la base de données
                const [users] = await pool.query("SELECT * FROM tns_users WHERE user_email = ?", [email]);

                if ((users as any[]).length === 0) {
                    return null; // L'utilisateur n'existe pas || Ajouter un message d'erreur
                }

                const user = (users as any[])[0];

                // Vérifie le mot de passe (ici on le compare de manière simple)
                if (password !== user.user_password) {
                    return null; // Mot de passe incorrect || Ajouter un message d'erreur
                }

                return { id: user.id_users, email: user.user_email };
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                // Si un utilisateur se connecte, on lui ajoute le token JWT

                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },

        async session({ session, token }: any) {
                session.user.id = token.id;
                session.user.email = token.email;

            return session;
        },
    },

    session: {
        strategy: 'jwt' as 'jwt',
        maxAge: 3600
    },    

    secret: process.env.JWT_SECRET, 
};

const handler = NextAuth(authOptions); 

export const GET = handler;
export const POST = handler;

