import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'local-demo-secret';

export type AppUser = {
  id: string;
  email: string;
  name: string;
  role: 'USER' | 'ADMIN';
};

export function signToken(user: AppUser) {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as AppUser;
  } catch {
    return null;
  }
}
