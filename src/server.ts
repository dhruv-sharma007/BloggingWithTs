import app from "./app.ts"
 import connectDb from "./config/db.ts";

const port = 3000;

connectDb()
.then(()=>{
	app.listen(port, ()=>{
	console.log("Server running http://localhost",port)
	})

})
.catch((error: any)=>{
	console.log("Error n connecting db")
})

