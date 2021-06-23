const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path")
const port = process.env.PORT || 8000;


//console.log(path.join(__dirname, "../public"));
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");



app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("/" ,(req, res)=>{
    res.render("index")
})

app.get("/about" ,(req, res)=>{
    res.render("about")
})

app.get("/wheather" ,(req, res)=>{
    res.render("wheather")
})

app.get("*" ,(req, res)=>{
    res.render("error", {
        error_msg:"Page not found!!!!!!"
    })
})



app.listen(port ,()=>{
    console.log(`listening to port at ${port}`)
})