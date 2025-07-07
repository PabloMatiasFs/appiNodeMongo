import { Request, Response, NextFunction } from 'express';
import { validateCreateUser, validateUpdateUser, validateLogin, validateMongoId } from '../utils/validation';
import { ApiResponse } from '../utils/types';

export const validateCreateUserMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const validation = validateCreateUser(req.body);
    
    if (!validation.isValid) {
        const response: ApiResponse = {
            success: false,
            message: 'Datos de entrada inválidos',
            error: validation.errors?.join(', ')
        };
        
        res.status(400).json(response);
        return;
    }
    
    next();
};

export const validateUpdateUserMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const validation = validateUpdateUser(req.body);
    
    if (!validation.isValid) {
        const response: ApiResponse = {
            success: false,
            message: 'Datos de entrada inválidos',
            error: validation.errors?.join(', ')
        };
        
        res.status(400).json(response);
        return;
    }
    
    next();
};

export const validateLoginMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const validation = validateLogin(req.body);
    
    if (!validation.isValid) {
        const response: ApiResponse = {
            success: false,
            message: 'Datos de login inválidos',
            error: validation.errors?.join(', ')
        };
        
        res.status(400).json(response);
        return;
    }
    
    next();
};

export const validateMongoIdMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const id = req.params.id;
    const validation = validateMongoId(id);
    
    if (!validation.isValid) {
        const response: ApiResponse = {
            success: false,
            message: 'ID inválido',
            error: validation.errors?.join(', ')
        };
        
        res.status(400).json(response);
        return;
    }
    
    next();
}; 