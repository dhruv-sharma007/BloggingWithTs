import {Request, Response, NextFunction} from "express";

const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await fn(req, res, next);
		} catch (error: any){
			res.status(error.statusCode || 500).json({
				success: false,
				message: error.message || "server error !!"
			})
		}
	}
}

export  { asyncHandler } 