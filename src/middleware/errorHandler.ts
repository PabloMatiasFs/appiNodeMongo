import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/types';

export interface AppError extends Error {
    statusCode?: number;
    isOperational?: boolean;
}

export const createError = (message: string, statusCode: number = 500): AppError => {
    const error = new Error(message) as AppError;
    error.statusCode = statusCode;
    error.isOperational = true;
    return error;
};

export const errorHandler = (
    error: AppError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    console.error('Error:', {
        message: error.message,
        stack: error.stack,
        url: req.url,
        method: req.method,
        timestamp: new Date().toISOString()
    });

    const statusCode = error.statusCode || 500;
    const message = error.message || 'Error interno del servidor';

    const response: ApiResponse = {
        success: false,
        message,
        error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    };

    res.status(statusCode).json(response);
};

export const notFoundHandler = (req: Request, res: Response): void => {
    const response: ApiResponse = {
        success: false,
        message: `Ruta no encontrada: ${req.method} ${req.url}`
    };

    res.status(404).json(response);
}; 