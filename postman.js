const express = require('express')
const userdata= require("./data.json")
const fs = require('fs')
const app = express()
const port = 8000

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get("/:id", (req, res) => {
    const id=Number(req.params.id);
    const userData=userdata.find((user)=>user.id===id)
    console.log("ok")
      res.send(userdata)
})

app.post("/post", (req, res) => {
    const body = req.body
    userdata.push({body,id:userdata.length+1})
    fs.writeFile("data.text",JSON.stringify(userdata),()=>{
        console.log("ok")
        return  res.json({"message":"success"}) 
    })
    
})

app.listen(port,()=>{
    console.log("server connected")
})