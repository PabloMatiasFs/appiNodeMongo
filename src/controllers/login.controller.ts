import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../entity/User'

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const Singin = async (req: Request, res: Response): Promise<Response>=>{

    const user = await getRepository(User).findOne({email: req.body.email});
    console.log(user);
    if(user){
        const pass = await bcrypt.compare(req.body.password, user.password);
        if(pass){
            const token: string = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET || 'asdfghjklñ',{
                expiresIn: '1h'
            });
            return res.header('auth-token', token).json({Id: user?.id, Apellido: user?.lastName, Nombre: user?.firstName , Edad: user?.age, Email: user?.email});
        }else
            return res.status(404).json({mgs:"Contraseña incorrecta."});
    }else
        return res.status(404).json({mgs:"Usuario no valido"});
}

export const singUp = async (req: Request, res: Response): Promise<Response>=>{
    try {
        const newUser = getRepository(User).create(req.body);
        const result = await getRepository(User).save(newUser);
        const user = await getRepository(User).findOne({email: req.body.email});
        const token: string = jwt.sign({_id: user?.id}, process.env.TOKEN_SECRET || 'asdfghjklñ',{
            expiresIn: '1h'
        });

        return res.header('auth-token', token).json({Id: user?.id, Apellido: user?.lastName, Nombre: user?.firstName , Edad: user?.age, Email: user?.email});  

    } catch (error) {
        return  res.status(400).json({msg: error});
    }

        
}

export const getUser = async (req: Request, res: Response): Promise<Response>=>{
    console.log(req.userId)
    const result = await getRepository(User).findOne(req.userId);
    console.log(result)
    if(result)
        return res.json({Id: result.id, Apellido: result.lastName, Nombre: result.firstName , Edad: result.age, Email: result.email});
    else
        return res.status(404).json({mgs:"No se encuentra el usuario."})
}