import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createConnection } from 'typeorm';
import userRoutes from './routes/user.routes';
import loginRoutes from './routes/login.routes';
import inicioRoutes from './routes/inicio.routes';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import 'reflect-metadata';

const app = express();

// Función helper para obtener variables de entorno
const getEnvVar = (key: string, defaultValue: string = ''): string => {
  try {
    return (globalThis as any).process?.env?.[key] || defaultValue;
  } catch {
    return defaultValue;
  }
};

// Configuración básica de CORS
app.use(cors({
    origin: getEnvVar('CORS_ORIGIN', 'http://localhost:3000'),
    credentials: true
}));

// Middlewares básicos
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Conexión a la base de datos
createConnection()
    .then(() => {
        console.log('✅ Conexión a la base de datos establecida');
    })
    .catch((error: any) => {
        console.error('❌ Error conectando a la base de datos:', error);
        // Usar función helper para process.exit
        try {
          (globalThis as any).process?.exit?.(1);
        } catch {
          console.error('No se pudo salir del proceso');
        }
    });

// Rutas
app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/', inicioRoutes);

// Middleware de manejo de errores (debe ir después de las rutas)
app.use(notFoundHandler);
app.use(errorHandler);

// Iniciar servidor
const PORT = parseInt(getEnvVar('PORT', '5000'));
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en puerto ${PORT}`);
    console.log(`📊 Entorno: ${getEnvVar('NODE_ENV', 'development')}`);
    console.log(`🌐 URL: http://localhost:${PORT}`);
});