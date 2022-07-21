const express = require("express");
const mongoose = require("mongoose"); // mongoose will help us connect our app to the database
const user = require("./models/user"); //import the schema 
const Quiz = require("./models/quiz");
const userroute = require("./routes/userroute");
const quizroute = require("./routes/quizroute");


const app = express();
app.use(express.json()); // same thing as bodyparse


const port = 3001;







/************** CONNECTION **************/

mongoose.connect('mongodb+srv://newuser:new12345678@cluster0.clm9g.mongodb.net/?retryWrites=true&w=majority' , {
    useNewUrlParser: true, // required in the mongoose doc
    //useCreateIndex: true, no longer supported
    useUnifiedTopology: true,
})

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB database connection established successfully")
}); // to make sure the connection is established!!



app.listen(port, () => {
    console.log('App is listening at http://localhost:3001');
});












// use all routes
app.use(userroute)
app.use(quizroute)
