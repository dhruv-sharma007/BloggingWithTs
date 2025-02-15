import app from "./app.ts"

const port = 80;

app.listen(port, ()=>{
	console.log("Server running http://localhost",port)
})
