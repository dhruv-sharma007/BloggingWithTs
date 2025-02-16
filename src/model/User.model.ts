import mongoose, { Schema, Model, Document } from "mongoose";

interface IUser extends Document{
	fullName: string;
	userName: string;
	email: string;
	passowrd: string;
	createdAt: Date;
}

const userSchema: Schema<IUser> = new Schema({
	fullName:{
		type: String,
		required: true,
	},
	userName:{
		type: String,
		required: true,
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	passowrd:{
		type: String,
		required: true,
	},
	createdAt:{
		type: Date,
		default: Date.now()
	}
},{timestamps: true})

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema)

export default ( User )
export { IUser }