import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { createConnection } from 'typeorm';
import userRoutes from './routes/user.routes';
import loginRoutes from './routes/login.routes';
import inicioRoutes from './routes/inicio.routes';
import 'reflect-metadata';

const app = express()
createConnection();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(userRoutes, loginRoutes, inicioRoutes);


app.listen(process.env.PORT || 5000);
console.log("server up ", process.env.PORT || 5000);