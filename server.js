const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("Hello");
})

app.get("/contact", function(req,res){
    res.send("Contcact me on 7017182727");
})

app.get("/about", function(req,res){
    res.send("Developed by TUSHAR SINGLA");
})

app.listen(3000, function(){
    console.log("server started");
})