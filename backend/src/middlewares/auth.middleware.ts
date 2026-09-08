import "dotenv/config";
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload { 
    userId: string;
    role?: string;
    }
const authenticateToken = (
    req:Request, 
    res:Response, 
    next:NextFunction
): void=>{
    
        const authHeader = req.headers.authorization;


if(!authHeader){
    res.status(401).json({
        messege:"Access token required",
    });
    return;
}

const token = authHeader.split(" ")[1];

if (!token){
    res.status(401).json({
        message:"Token missing",
    });
    return;
}

try{

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    req.user =decoded;
    next();
}catch(error){
    res.status(403).json({
        message:"Invalid or expired Token",
    });
    }
}
    export default authenticateToken;