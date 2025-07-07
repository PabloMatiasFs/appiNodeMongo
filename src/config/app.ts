export const appConfig = {
    port: parseInt(process.env.PORT || "5000"),
    nodeEnv: process.env.NODE_ENV || "development",
    jwtSecret: process.env.JWT_SECRET || "default_secret_change_in_production",
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "24h",
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || "10"),
    logLevel: process.env.LOG_LEVEL || "info",
    corsOrigin: process.env.CORS_ORIGIN || "http://localhost:3000"
}; 