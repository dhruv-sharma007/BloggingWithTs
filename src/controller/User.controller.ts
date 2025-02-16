import User from "../model/User.model.ts"
import { Request, Response } from "express"
import { ApiError, asyncHandler } from "../utils/index.ts"

const signupHandler = asyncHandler(async(req: Request, res: Response)=>{
	const { fullName, password, email, userName } = req.body
})

