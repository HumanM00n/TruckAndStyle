import { Metadata } from "next";

// FONTAWESOME
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// export const metadata: Metadata = {
//     title: '404',
//     description: 'Cette pag est introuvable'
// }

export default function ErrorLayout() {
    return (
        <html lang="en">
            <head>
                <title>Erreur | Mon Site</title>
            </head>
            <body>
                <main></main> {/* Ce layout ne dépend pas du parent */}
            </body>
        </html>
    );
}