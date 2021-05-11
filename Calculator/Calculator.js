const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+"/BmiCalci.html");
})

app.post("/",function(req,res){
    res.send("" + (Number(req.body.num1) + Number(req.body.num2)));
})

app.post("/bmiCalculator",function(req,res){
    var w = Number(req.body.weight);
    var h = Number(req.body.height);
    var bmi = w/(h*h);
    
    res.send(""+ bmi); 
})

app.listen(3000, function(){
    console.log("server started");
})