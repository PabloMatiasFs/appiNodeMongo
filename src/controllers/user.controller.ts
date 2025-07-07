import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import { ApiResponse, UserResponse } from '../utils/types';
import { createError } from '../middleware/errorHandler';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const users = await getRepository(User).find();
        
        const response: ApiResponse<UserResponse[]> = {
            success: true,
            data: users.map(user => ({
                id: user.id.toString(),
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                email: user.email
            })),
            message: users.length > 0 ? 'Usuarios obtenidos exitosamente' : 'No hay usuarios registrados'
        };
        
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error getting users:', error);
        throw createError('Error al obtener usuarios', 500);
    }
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const newUser = getRepository(User).create(req.body);
        const result = await getRepository(User).save(newUser);
        
        const response: ApiResponse<UserResponse> = {
            success: true,
            data: {
                id: result.id.toString(),
                firstName: result.firstName,
                lastName: result.lastName,
                age: result.age,
                email: result.email
            },
            message: 'Usuario creado exitosamente'
        };
        
        return res.status(201).json(response);
    } catch (error) {
        console.error('Error creating user:', error);
        
        if (error.code === 11000) {
            throw createError('El email ya está registrado', 400);
        }
        
        throw createError('Error al crear usuario', 500);
    }
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await getRepository(User).findOne(req.params.id);
        
        if (!user) {
            throw createError('Usuario no encontrado', 404);
        }
        
        const updatedUser = getRepository(User).merge(user, req.body);
        const result = await getRepository(User).save(updatedUser);
        
        const response: ApiResponse<UserResponse> = {
            success: true,
            data: {
                id: result.id.toString(),
                firstName: result.firstName,
                lastName: result.lastName,
                age: result.age,
                email: result.email
            },
            message: 'Usuario actualizado exitosamente'
        };
        
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error updating user:', error);
        
        if (error.message === 'Usuario no encontrado') {
            throw error;
        }
        
        throw createError('Error al actualizar usuario', 500);
    }
};

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await getRepository(User).findOne(req.params.id);
        
        if (!user) {
            throw createError('Usuario no encontrado', 404);
        }
        
        const response: ApiResponse<UserResponse> = {
            success: true,
            data: {
                id: user.id.toString(),
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                email: user.email
            },
            message: 'Usuario obtenido exitosamente'
        };
        
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error getting user:', error);
        
        if (error.message === 'Usuario no encontrado') {
            throw error;
        }
        
        throw createError('Error al obtener usuario', 500);
    }
};

export const getUserAge = async (req: Request, res: Response): Promise<Response> => {
    try {
        const age: number = parseInt(req.params.number);
        
        if (isNaN(age)) {
            throw createError('La edad debe ser un número válido', 400);
        }
        
        const users = await getRepository(User).find({ age: age });
        
        const response: ApiResponse<UserResponse[]> = {
            success: true,
            data: users.map(user => ({
                id: user.id.toString(),
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                email: user.email
            })),
            message: users.length > 0 ? `Usuarios de ${age} años encontrados` : `No se encontraron usuarios de ${age} años`
        };
        
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error getting users by age:', error);
        
        if (error.message.includes('número válido')) {
            throw error;
        }
        
        throw createError('Error al buscar usuarios por edad', 500);
    }
};

export const getUserNombre = async (req: Request, res: Response): Promise<Response> => {
    try {
        const firstName = req.params.string;
        const users = await getRepository(User).find({ firstName: firstName });
        
        const response: ApiResponse<UserResponse[]> = {
            success: true,
            data: users.map(user => ({
                id: user.id.toString(),
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                email: user.email
            })),
            message: users.length > 0 ? `Usuarios con nombre ${firstName} encontrados` : `No se encontraron usuarios con nombre ${firstName}`
        };
        
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error getting users by name:', error);
        throw createError('Error al buscar usuarios por nombre', 500);
    }
};