"use server";

import { signIn } from "next-auth/react";

export async function connectionUser(email: string, password: string) {
    try {
        const responseConnection = await signIn("credentials", {
            redirect: false, // Important pour éviter la redirection automatique
            email,
            password,
        });

        if (responseConnection?.error) {
            return { error: responseConnection.error };
        }

        return { success: true };
    } catch (error) {
        console.error("Erreur lors de la connexion :", error);
        return { error: "Erreur interne du serveur" };
    }
}
