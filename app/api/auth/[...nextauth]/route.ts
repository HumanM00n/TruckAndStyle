/* eslint-disable @typescript-eslint/prefer-as-const */
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"; 
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
                    return null; // L'utilisateur n'existe pas
                }

                const user = (users as any[])[0];

                // Vérifie le mot de passe hashé
                const passwordMatch = await bcrypt.compare(password, user.user_password);

                if (!passwordMatch) {
                    return null; // Mot de passe incorrect
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
