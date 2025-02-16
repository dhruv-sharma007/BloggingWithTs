import { ApiError } from "./ApiError";

export const Check = (condition: any, statusCode: number = 400, message: string = "Bad Request")=> {
    if (!condition) {
      throw new ApiError(statusCode, message);
    }
  }