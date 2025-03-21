import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from 'jsonwebtoken'; 
import pool from '@/app/_lib/db';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
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

                // Vérifie le mot de passe (ici on le compare de manière simple)
                if (password !== user.user_password) {
                    return null; // Mot de passe incorrect
                }

                // Génération du Toekn pour l'utilisateur
                const secret = process.env.JWT_SECRET;
                const token = jwt.sign({ id: user.id_users, email: user.user_email }, secret!, { expiresIn: "1h" });

                return { id: user.id_users, email: user.user_email, token };
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                // Si un utilisateur se connecte, on lui ajoute le token JWT
                token.accessToken = user.token;
            }

            return token;
        },

        async session({ session, token }: any) {
            if (token) {
                session.user.accessToken = token.accessToken;
            }
            return session;
        },
    },

    session: {
        strategy: 'jwt' as 'jwt',  // Utilisation explicite de la valeur 'jwt'
    },    

    secret: process.env.JWT_SECRET,  // Assure-toi que cette clé est définie dans ton .env
};

const handler = NextAuth(authOptions);  // Utilisation de authOptions ici
export { handler as GET, handler as POST };
