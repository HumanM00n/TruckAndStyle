/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import pool from '@/app/_lib/db';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials!;

        const [users] = await pool.query("SELECT * FROM tns_users WHERE user_email = ?", [email]);

        if ((users as any[]).length === 0) {
          return null;
        }

        const user = (users as any[])[0];

        const passwordMatch = await bcrypt.compare(password, user.user_password);

        if (!passwordMatch) {
          return null;
        }

        return { id: user.id_users, email: user.user_email };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
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
    strategy: 'jwt',
    maxAge: 3600,
  },

  secret: process.env.JWT_SECRET,
});

export { handler as GET, handler as POST };
