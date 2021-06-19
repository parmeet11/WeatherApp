const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path") 

//console.log(path.join(__dirname, "../public"));
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

app.get("/" ,(req, res)=>{
    res.send("hello from home page")
})

app.get("/about" ,(req, res)=>{
    res.send("hello from about page")
})

app.get("/wheather" ,(req, res)=>{
    res.send("hello from wheather page")
})

app.get("*" ,(req, res)=>{
    res.send("404 error page")
})



app.listen(port ,()=>{
    console.log(`listening to port at ${port}`)
})