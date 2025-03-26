'use client';

import { useSession } from "next-auth/react";

export default function TestSession() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Chargement...</p>;
    }

    return (
        <div className="text-white">
            <h1>Test de Session</h1>
            {session ? (
                <pre>{JSON.stringify(session, null, 2)}</pre>
            ) : (
                <p>Pas de session active.</p>
            )}
        </div>
    );
}
