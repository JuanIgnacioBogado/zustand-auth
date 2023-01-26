import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const handleError = (res: Response) => res.status(401).json({ message: 'Unauthorized' });

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return handleError(res);

  const token = authHeader.split(' ')[1];
  if (!token) return handleError(res);

  jwt.verify(token, 'secret', (err, user) => {
    if (err) return handleError(res);

    req.user = user;
    next();
  });
};
