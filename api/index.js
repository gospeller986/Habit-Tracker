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

const jwt = require("jsonwebtoken")
const moment = require("moment") ;

mongoose.connect('mongodb+srv://palsatyajit986:Jitu%401234@cluster0.rxcfq2l.mongodb.net/').then(()=>{
    console.log("Connected to DB")
}).catch((error)=>{
    console.log("Error connecting to DB: " + error)
})

app.listen(port, ()=>{
    console.log("Server listening at port " + port ) 
}); 


const User = require("./models/user") ;
const Todo = require("./models/todo") ; 

app.post("/register",async(req, res) =>  {
    try { 

        const {name , email , password} = req.body ;

        // check if user is already registered 

        const existingUser = await User.findOne({email}) ;

        if (existingUser) {
            res.status(400).json({message : "User already registered"})
        }

        const newUser = new User({name, email, password})

        await newUser.save() ; 

        res.status(200).json({message : "User registered successfully"})
        
    } catch (error) {
         console.log("Error registering" , error)
         res.status(500).json({message : "Error registering"})
    }
}) 

const generateSecretKey =() => {
    const secretKey = crypto.randomBytes(32).toString("hex") ;

    return secretKey ;
}

const secretKey = generateSecretKey() ;
 
app.post("/login",async(req, res) =>  {
     try { 

        const {email , password} = req.body ; 

        const user = await User.findOne({email}) ;

        if(!user) {
            res.status(400).json({message : "User not registered , Invalid Email"})
        }

        if(user.password !== password) {
            res.status(400).json({message : "Invalid Password"}) 
        }

        const token = jwt.sign({userId: user._id} , secretKey) 

        res.status(200).json({token})
        
     } catch (error) {
         console.log("Error logging in" , error)
         res.status(500).json({message : "Error logging in"})
     }
}) 

app.post("/todo/:userId" , async(req, res) => {
     try {

        const {userId} = req.params.userId ; 
        const {title, category} = req.body ;
        
        const newTodo = new Todo({
             title,
             category,
             dueDate : moment().format('YYYY-MM-DD')
        })

        await newTodo.save() ;

        const user = await User.findById(userId) ;
        if(!user) {
            res.status(400).json({message : "User not registered"})
        }

        user?.todos.push(newTodo._id) ;
        await user.save() ;

        res.status(200).json({message : "Todo created successfully" , todo : newTodo})


        
     } catch ( error ) {
          res.status(500).json({message : "Todo could not be created"})
     }
})