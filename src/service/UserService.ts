import { promises } from "dns";
import User, { IUser } from "../model/User.model.ts"

class UserService{
	async createUser(userData: IUser): Promise<IUser> {
		const user = new User(userData);
		return await user.save();
	}

	async 
}