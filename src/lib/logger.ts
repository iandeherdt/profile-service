import * as winston from 'winston';

const loggerInstance: winston.LoggerInstance = new winston.Logger({
  level: process.env.LOG_LEVEL || 'info',
  transports: [
    new winston.transports.Console(),
  ],
});

export const logger = {
  info: (message: string, ...args: any[]) => loggerInstance.log('info', message, args),
  debug: (message: string, ...args: any[]) => loggerInstance.log('debug', message, args),
  error: (message: string, ...args: any[]) => loggerInstance.log('error', message, args),
};
