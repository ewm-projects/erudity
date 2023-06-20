import { join } from "path";
import {
  format as _format,
  transports as _transports,
  createLogger,
} from "winston";
import "winston-daily-rotate-file";

import { env } from "./env.js";
import Utility from "./utils.js";

// src: https://levelup.gitconnected.com/better-logs-for-expressjs-using-winston-and-morgan-with-typescript-1c31c1ab9342

// Winston default log levels
// src: https://github.com/winstonjs/winston#logging-levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

// Console configs
// ----------------
const consoleFormat = _format.combine(
  _format.colorize(),
  _format.splat(), // allows you to use string interpolation + print objects
  _format.printf((event) => `${event.level} - ${event.message}`)
);

const consoleTransports = [
  new _transports.Console({ handleExceptions: true, handleRejections: true }),
];

const consoleMaxLevel = Object.keys(levels).slice(-1)[0];

const consoleLoggerConfigs = {
  level: consoleMaxLevel,
  levels,
  format: consoleFormat,
  transports: consoleTransports,
};

// File configs
// ----------------
const logsDir = join(Utility.getDirPath("backend"), "logs");

// src: https://stackoverflow.com/questions/1521082/what-is-a-good-size-in-bytes-for-a-log-file
const logFileLimit = 10 * 1024 * 1024;

// src: https://github.com/winstonjs/logform#timestamp
// src: https://github.com/taylorhakes/fecha
const timestampFormat = {
  format: "YYYY-MM-DD [at] HH:mm:ss",
};

const fileFormat = _format.combine(
  _format.timestamp(timestampFormat),
  _format.splat(),
  _format.printf(
    (event) =>
      `[${event.timestamp}] (${event.level.toUpperCase()}): ${event.message}`
  )
);

const fileLoggerConfigs = () => {
  const opts = {
    dirname: logsDir,
    filename: "err-%DATE%-.log",
    datePattern: "YYYY-MM-DD-HH",
    maxsize: logFileLimit,
    maxFiles: 5,
    handleExceptions: true,
    handleRejections: true,
  };

  // Moved transports here to prevent creation of logs folder if NODE_ENV == 'dev'
  const fileTransports = [new _transports.DailyRotateFile(opts)];

  return {
    level: Object.keys(levels).slice(2)[0],
    levels,
    format: fileFormat,
    transports: fileTransports,
  };
};

const Logger =
  env.NODE_ENV === "production"
    ? createLogger(fileLoggerConfigs())
    : createLogger(consoleLoggerConfigs);

export default Logger;
