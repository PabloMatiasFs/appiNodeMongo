// Declaraciones de tipos globales para resolver problemas de linter

// Declaración de process global
declare var process: {
  env: {
    NODE_ENV?: 'development' | 'production' | 'test';
    PORT?: string;
    DB_HOST?: string;
    DB_PORT?: string;
    DB_NAME?: string;
    DB_USERNAME?: string;
    DB_PASSWORD?: string;
    JWT_SECRET?: string;
    JWT_EXPIRES_IN?: string;
    BCRYPT_ROUNDS?: string;
    LOG_LEVEL?: string;
    CORS_ORIGIN?: string;
    [key: string]: string | undefined;
  };
  exit(code?: number): never;
};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      PORT?: string;
      DB_HOST?: string;
      DB_PORT?: string;
      DB_NAME?: string;
      DB_USERNAME?: string;
      DB_PASSWORD?: string;
      JWT_SECRET?: string;
      JWT_EXPIRES_IN?: string;
      BCRYPT_ROUNDS?: string;
      LOG_LEVEL?: string;
      CORS_ORIGIN?: string;
    }
  }
}

declare module 'express' {
  interface Request {
    user?: any;
  }
}

declare module 'typeorm' {
  interface ConnectionOptions {
    type: 'mongodb';
    host: string;
    port: number;
    database: string;
    username?: string;
    password?: string;
    entities: any[];
    synchronize?: boolean;
    logging?: boolean;
    useUnifiedTopology?: boolean;
    useNewUrlParser?: boolean;
  }
}

export {}; 