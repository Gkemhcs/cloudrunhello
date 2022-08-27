const express=require("express")
const app=express()
app.get("/",(req,res)=>{
res.send("<h1>HELLO FRIENDS<img src="gs://kotiitok/shangai.jpeg"></h1>")
})

app.listen(process.env.PORT||8080,()=>{
console.log("server running on port 8080")
})
