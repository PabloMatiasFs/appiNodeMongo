import {Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface Ipayload{
    _id: String;
    iat: number;
    exp: number;
}

export const  TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    
    const token = req.header('auth-token');

    if(!token) 
        return res.status(401).json('Access denied');

    const payload = jwt.verify(token, 'asdfghjklñ') as Ipayload;

    console.log(payload);

    req.userId = payload._id;

    console.log(payload._id);

    next();

}