import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../entity/User'

export const getUsers = async (req: Request, res: Response): Promise<Response>=>{
    const result = await getRepository(User).find();
    if(result)
        return res.json(result);
    else
        return res.status(404).json({mgs:"No se encuentran usuarios registrardos."})
}

export const createUser = async (req: Request, res: Response): Promise<Response>=>{
    try {
        const newUser = getRepository(User).create(req.body);
        const result = await getRepository(User).save(newUser);
        return res.json(result);   
    } catch (error) {
        return  res.status(400).json({msg: error});
    }
        
}

export const updateUser = async (req: Request, res: Response): Promise<Response>=>{
    const user = await getRepository(User).findOne(req.params.id);
    if(user){
        const updateUser = getRepository(User).merge(user, req.body);
        const result = await getRepository(User).save(updateUser);
        return res.json(result); 
    }else{
        return  res.status(400).json({msg: "No se encuentra el usuario."});
    }
        
}

export const getUser = async (req: Request, res: Response): Promise<Response>=>{
    const result = await getRepository(User).findOne(req.params.id);
    if(result)
        return res.json(result);
    else
        return res.status(404).json({mgs:"No se encuentra el usuario."})
}

export const getUserAge = async (req: Request, res: Response): Promise<Response>=>{
    let age :number = parseInt (req.params.number);
    const result = await getRepository(User).find({ age: age});
    if(result)
        return res.json(result);
    else
        return res.status(404).json({mgs:"No se encuentra el usuario con esa edad."})
}

export const getUserNombre = async (req: Request, res: Response): Promise<Response>=>{
    const result = await getRepository(User).find({ firstName: req.params.string });
    if(result)
        return res.json(result);
    else
        return res.status(404).json({mgs:"No se encuentra el usuario con ese nombre."})
}