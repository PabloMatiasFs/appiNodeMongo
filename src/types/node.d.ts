// Tipos específicos para Node.js

declare namespace NodeJS {
  interface Process {
    env: ProcessEnv;
    exit(code?: number): never;
    version: string;
    platform: string;
    arch: string;
    cwd(): string;
  }

  interface ProcessEnv {
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
  }

  interface Global {
    process: Process;
    Buffer: typeof Buffer;
    console: Console;
    global: Global;
    __dirname: string;
    __filename: string;
    clearImmediate(immediateId: Immediate): void;
    clearInterval(intervalId: Timeout): void;
    clearTimeout(timeoutId: Timeout): void;
    setImmediate(callback: (...args: any[]) => void, ...args: any[]): Immediate;
    setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): Timeout;
    setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): Timeout;
  }
}

declare var process: NodeJS.Process;
declare var global: NodeJS.Global;
declare var __dirname: string;
declare var __filename: string; 