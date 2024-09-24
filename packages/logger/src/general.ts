import path from 'path';
import { Constants } from '@repo/constants';
import { createLogger, format, transports } from 'winston';

const saveLogsInMonorepoRoot = true;
const serviceName = path.basename(__filename).split('.')[0];
const logDirectory = path.join(__dirname, saveLogsInMonorepoRoot ? `../../../logs/${serviceName}` : `../logs/${serviceName}`);
const maxSingleFileSize = Constants.BYTES_IN_ONE_GB * 10;

const mixedLogger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: serviceName },
  transports: [
    new transports.File({
      dirname: logDirectory,
      filename: 'errors.log',
      level: 'error',
      maxsize: maxSingleFileSize / 5,
      maxFiles: 5,
    }),
    new transports.File({
      dirname: logDirectory,
      filename: 'combined.log',
      maxsize: maxSingleFileSize / 5,
      maxFiles: 5,
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  mixedLogger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    ),
  }));
}

export default mixedLogger;
