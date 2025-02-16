import mongoose from "mongoose"
import asyncHandler from "../utils/Asynchandler"
import { ApiError } from "../utils/ApiError"

const db_uri: string | undefined = process.env.DATABASE_URL

const connectDb = async()=>{
	try{
		if(!db_uri){
		throw new ApiError(500, "Error on db.ts")
	}

	const connect = await mongoose.connect(db_uri);
	console.log(`MongoDB connected successfully: ${connect.connection.host}`)
} catch(error) {
	console.log("catch error in config/db", error)
}}

export default connectDb
