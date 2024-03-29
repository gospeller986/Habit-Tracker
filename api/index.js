const express = require('express'); 

const bodyParser = require('body-parser'); 

const mongoose = require('mongoose'); 


const crypto = require('crypto');

const app = express(); 

const port = 3000; 

const cors = require('cors');

app.use(cors()); 

app.use(bodyParser.urlencoded({ extended :false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://palsatyajit986:Jitu%401234@cluster0.rxcfq2l.mongodb.net/').then(()=>{
    console.log("Connected to DB")
}).catch((error)=>{
    console.log("Error connecting to DB: " + error)
})

app.listen(port, ()=>{
    console.log("Server listening at port " + port ) 
});