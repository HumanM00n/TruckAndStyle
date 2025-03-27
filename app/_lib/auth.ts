import jwt from 'jsonwebtoken';

export const verifyToken = (token: string) => {

    const secret = process.env.JWT_SECRET;

    if (!secret) {
        throw new Error('La clé JWT n\'est pas définie dans les variables d\'environnement');
    }

    try {
        const decoded = jwt.verify(token, secret);
        return decoded;

    } catch (error) {
        return null;
    };
}

export default verifyToken;