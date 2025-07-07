import { ConnectionOptions } from 'typeorm';
import { User } from '../entity/User';

export const dbConfig: ConnectionOptions = {
    type: "mongodb" as const,
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "27017"),
    database: process.env.DB_NAME || "myapp",
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    entities: [User],
    synchronize: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
    useUnifiedTopology: true,
    useNewUrlParser: true
}; 