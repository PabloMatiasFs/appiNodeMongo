// Interfaces para respuestas de la API
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    message: string;
    error?: string;
}

// Interfaces para usuarios
export interface UserResponse {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
}

export interface CreateUserRequest {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
}

export interface UpdateUserRequest {
    firstName?: string;
    lastName?: string;
    age?: number;
    email?: string;
    password?: string;
}

// Interfaces para autenticación
export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    token: string;
    user: UserResponse;
}

// Interfaces para paginación
export interface PaginationParams {
    page?: number;
    limit?: number;
}

export interface PaginatedResponse<T> {
    success: boolean;
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

// Tipos para validación
export type ValidationResult = {
    isValid: boolean;
    errors?: string[];
}; 