export enum LogLevel {
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

export const CLog = (level: LogLevel, message: string): void => {
  const colors: Record<LogLevel, string> = {
    [LogLevel.INFO]: "\x1b[36m",  // Cyan
    [LogLevel.WARN]: "\x1b[33m",  // Yellow
    [LogLevel.ERROR]: "\x1b[31m", // Red
  };

  const timestamp: string = new Date().toISOString();
  console.log(`${colors[level] || ""}[${level.toUpperCase()}] ${timestamp}: ${message}\x1b[0m`);
};
