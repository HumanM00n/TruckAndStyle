import jwt from 'jsonwebtoken';

interface JwtPayload {
    id: number; // permet de spécifier le type des propriétés
    email: string;
}

export const verifyToken = (token: string): JwtPayload | null => {

    const secret = process.env.JWT_SECRET;

    if (!secret) {
        throw new Error('La clé JWT n\'est pas définie dans les variables d\'environnement');
    }

    try {
        const decoded = jwt.verify(token, secret) as JwtPayload;
        return decoded;

    } catch (error) {
        return null;
    };
}

export default verifyToken;