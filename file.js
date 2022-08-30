const express=require("express")
const app=express()
app.get("/",(req,res)=>{
  console.log(req)
res.sendFile(__dirname+"/index.html")
})

app.listen(process.env.PORT||8080,()=>{
console.log("server running on port 8080")
})
