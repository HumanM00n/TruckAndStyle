"use server";

export async function registerUser(formData: FormData) {
    // Extraction et nettoyage des données du formulaire
    const user_lastname = formData.get("nom")?.toString().trim();
    const user_firstname = formData.get("prenom")?.toString().trim();
    const user_email = formData.get("email")?.toString().trim();
    const user_password = formData.get("password")?.toString().trim();
    const user_phone_number = formData.get("telephone")?.toString().trim();
    const user_department = formData.get("departement")?.toString().trim();
    const user_postcode = formData.get("codePostal")?.toString().trim();
    const user_city = formData.get("ville")?.toString().trim();

    // Vérification des champs obligatoires
    if (!user_lastname || !user_firstname || !user_email || !user_password || 
        !user_phone_number || !user_department || !user_postcode || !user_city) {
        return { success: false, message: "Tous les champs doivent être remplis." };
    }

    // Vérification du format de l'email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) {
        return { success: false, message: "L'adresse email est invalide." };
    }

    // Vérification du mot de passe (min. 8 caractères)
    if (user_password.length < 8) {
        return { success: false, message: "Le mot de passe doit contenir au moins 8 caractères." };
    }

    // Vérification du numéro de téléphone (10 chiffres)
    if (!/^\d{10}$/.test(user_phone_number)) {
        return { success: false, message: "Le numéro de téléphone est incorrect." };
    }

    try {
        // Envoi des données à l’API d’inscription
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom: user_lastname,
                prenom: user_firstname,
                email: user_email,
                password: user_password, // Mot de passe en clair (sera hashé côté serveur)
                telephone: user_phone_number,
                departement: user_department,
                codePostal: user_postcode,
                ville: user_city,
            }),
        });

        // Récupérer la réponse de l'API
        const data = await response.json();

        if (!response.ok) {
            return { success: false, message: data.error || "Une erreur est survenue." };
        }

        //  Succès de l'inscription
        return { success: true, message: "Inscription réussie !", userId: data.userId, email: data.email };

    } catch (error) {
        console.error(" Erreur serveur :", error);
        return { success: false, message: "Une erreur est survenue, veuillez réessayer plus tard." };
    }
}
