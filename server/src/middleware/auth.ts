import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

interface AuthenticatedRequest extends Request {
    user?: any;
}

const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided' });
    }
    
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access Denied: Invalid Token Format' });
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden: Invalid Token' });
        }
        req.user = user;
        return next();
    });
    
    return res.status(500).json({ message: 'Unexpected Error in Authentication Middleware' });
};

export default authenticateToken;