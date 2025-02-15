import mongoose from "mongoose";
import dotenv from "dotenv"; 
import express, { Request, Response, Application } from "express";
import cors from "cors";

 dotenv.config();

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): void => {
	res.send("hello")
});

export default app;
