// Logger simplificado sin Winston
enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug'
}

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  service: string;
  stack?: string;
}

class Logger {
  private service: string;
  private logLevel: LogLevel;

  constructor() {
    this.service = 'api-service';
    // Usar una función helper para obtener variables de entorno
    this.logLevel = this.getEnvVar('LOG_LEVEL') as LogLevel || LogLevel.INFO;
  }

  private getEnvVar(key: string): string | undefined {
    try {
      return (globalThis as any).process?.env?.[key];
    } catch {
      return undefined;
    }
  }

  private shouldLog(level: LogLevel): boolean {
    const levels = [LogLevel.ERROR, LogLevel.WARN, LogLevel.INFO, LogLevel.DEBUG];
    const currentLevelIndex = levels.indexOf(this.logLevel);
    const messageLevelIndex = levels.indexOf(level);
    return messageLevelIndex <= currentLevelIndex;
  }

  private formatLog(level: LogLevel, message: string, error?: Error): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      service: this.service,
      stack: error?.stack
    };
  }

  private writeLog(entry: LogEntry): void {
    const logString = JSON.stringify(entry);
    
    const nodeEnv = this.getEnvVar('NODE_ENV');
    if (nodeEnv !== 'production') {
      console.log(logString);
    }
    
    // En producción, aquí se escribiría a archivos
    // Por ahora solo usamos console.log
  }

  error(message: string, error?: Error): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      this.writeLog(this.formatLog(LogLevel.ERROR, message, error));
    }
  }

  warn(message: string): void {
    if (this.shouldLog(LogLevel.WARN)) {
      this.writeLog(this.formatLog(LogLevel.WARN, message));
    }
  }

  info(message: string): void {
    if (this.shouldLog(LogLevel.INFO)) {
      this.writeLog(this.formatLog(LogLevel.INFO, message));
    }
  }

  debug(message: string): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      this.writeLog(this.formatLog(LogLevel.DEBUG, message));
    }
  }
}

const logger = new Logger();
export default logger; 