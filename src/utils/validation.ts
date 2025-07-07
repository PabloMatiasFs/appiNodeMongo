import { ValidationResult } from './types';

// Funciones de validación simplificadas sin Joi
const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validateStringLength = (value: string, min: number, max: number): boolean => {
    return value.length >= min && value.length <= max;
};

const validateNumberRange = (value: number, min: number, max: number): boolean => {
    return value >= min && value <= max;
};

const validateMongoIdFormat = (id: string): boolean => {
    const mongoIdRegex = /^[0-9a-fA-F]{24}$/;
    return mongoIdRegex.test(id);
};

export const validateCreateUser = (data: any): ValidationResult => {
    const errors: string[] = [];

    // Validar firstName
    if (!data.firstName || typeof data.firstName !== 'string') {
        errors.push('El nombre es requerido');
    } else if (!validateStringLength(data.firstName, 2, 50)) {
        errors.push('El nombre debe tener entre 2 y 50 caracteres');
    }

    // Validar lastName
    if (!data.lastName || typeof data.lastName !== 'string') {
        errors.push('El apellido es requerido');
    } else if (!validateStringLength(data.lastName, 2, 50)) {
        errors.push('El apellido debe tener entre 2 y 50 caracteres');
    }

    // Validar age
    if (!data.age || typeof data.age !== 'number') {
        errors.push('La edad es requerida y debe ser un número');
    } else if (!validateNumberRange(data.age, 1, 120)) {
        errors.push('La edad debe estar entre 1 y 120 años');
    }

    // Validar email
    if (!data.email || typeof data.email !== 'string') {
        errors.push('El email es requerido');
    } else if (!validateEmail(data.email)) {
        errors.push('El email debe tener un formato válido');
    }

    // Validar password
    if (!data.password || typeof data.password !== 'string') {
        errors.push('La contraseña es requerida');
    } else if (!validateStringLength(data.password, 6, 100)) {
        errors.push('La contraseña debe tener entre 6 y 100 caracteres');
    }

    return {
        isValid: errors.length === 0,
        errors: errors.length > 0 ? errors : undefined
    };
};

export const validateUpdateUser = (data: any): ValidationResult => {
    const errors: string[] = [];

    // Validar firstName si está presente
    if (data.firstName !== undefined) {
        if (typeof data.firstName !== 'string') {
            errors.push('El nombre debe ser una cadena de texto');
        } else if (!validateStringLength(data.firstName, 2, 50)) {
            errors.push('El nombre debe tener entre 2 y 50 caracteres');
        }
    }

    // Validar lastName si está presente
    if (data.lastName !== undefined) {
        if (typeof data.lastName !== 'string') {
            errors.push('El apellido debe ser una cadena de texto');
        } else if (!validateStringLength(data.lastName, 2, 50)) {
            errors.push('El apellido debe tener entre 2 y 50 caracteres');
        }
    }

    // Validar age si está presente
    if (data.age !== undefined) {
        if (typeof data.age !== 'number') {
            errors.push('La edad debe ser un número');
        } else if (!validateNumberRange(data.age, 1, 120)) {
            errors.push('La edad debe estar entre 1 y 120 años');
        }
    }

    // Validar email si está presente
    if (data.email !== undefined) {
        if (typeof data.email !== 'string') {
            errors.push('El email debe ser una cadena de texto');
        } else if (!validateEmail(data.email)) {
            errors.push('El email debe tener un formato válido');
        }
    }

    // Validar password si está presente
    if (data.password !== undefined) {
        if (typeof data.password !== 'string') {
            errors.push('La contraseña debe ser una cadena de texto');
        } else if (!validateStringLength(data.password, 6, 100)) {
            errors.push('La contraseña debe tener entre 6 y 100 caracteres');
        }
    }

    return {
        isValid: errors.length === 0,
        errors: errors.length > 0 ? errors : undefined
    };
};

export const validateLogin = (data: any): ValidationResult => {
    const errors: string[] = [];

    // Validar email
    if (!data.email || typeof data.email !== 'string') {
        errors.push('El email es requerido');
    } else if (!validateEmail(data.email)) {
        errors.push('El email debe tener un formato válido');
    }

    // Validar password
    if (!data.password || typeof data.password !== 'string') {
        errors.push('La contraseña es requerida');
    }

    return {
        isValid: errors.length === 0,
        errors: errors.length > 0 ? errors : undefined
    };
};

export const validateMongoId = (id: string): ValidationResult => {
    if (!validateMongoIdFormat(id)) {
        return {
            isValid: false,
            errors: ['ID de usuario inválido']
        };
    }
    
    return { isValid: true };
}; 