import jwt from 'jsonwebtoken';

export default function AuthUser(id: string): string {
    return jwt.sign({ id }, process.env.JWT_SECRET!, {
        expiresIn: '1d',
    });
}