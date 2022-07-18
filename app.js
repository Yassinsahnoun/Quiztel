const express = require("express");
const mongoose = require("mongoose"); // mongoose will help us connect our app to the database
const Test = require("./models/test"); //import the schema 
const Quiz = require("./models/quiz");



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








/************** CREATE (POST) **************/

app.post("/testadd", async(req, res) => {
    try {
        console.log("req.body:", req.body); //specify on the log the added data

        const newTest = new Test({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            CIN: req.body.CIN,
            Email: req.body.Email,
            Num: req.body.Num
        })

        await Test.create(newTest);
        res.send("ADDED !!");

    } catch (err) {
        console.log("the error:", err); // specify on the log the error !
    }
});






/************** READ (GET) **************/

// app.get("/testlist", async(req, res) => { // the endpoint is "/testlist"
//     await Test.find({}, (err, result) => {
//         console.log("test from db: ", result);
//         res.send(result);
//     })
// });

/************** READ (GET) 2nd Method**************/
app.get("/testlist", async(req, res) => {
    try {

        await Test.find({})
        .then((result) => {
            res.send(result);
        });

    } catch (err) { console.log("Error:", err); }
})






/************** DELETE **************/
/* avec findOneAndDelete on peut utiliser d'autre criteres a part l'ID */



// app.delete("/testdelete/:key", async(req, res) => {
//    
//     try {

//         await Test.findOneAndDelete({ CIN: req.params.key });
//         res.send("supprimé") //sur browser

//     } catch (err) { console.log("Error:", err) }
// });

/************** DELETE 2eme methode **************/
app.delete("/testdelete/:id", async(req, res) => {
    const _id = req.params.id;
    try {

        await Test.findByIdAndDelete(_id)

        res.send("supprimé") //sur browser

    } catch (err) { console.log("Error:", err) }
});







/************** UPDATE (PUT) **************/
app.put("/testupdate/:key", async(req, res) => {
    try {

        await Test.findOneAndUpdate({ CIN: req.params.key }, {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            CIN: req.body.CIN,
            Email: req.body.Email,
            Num: req.body.Num
        })
        res.send('mise a jour effectué');
        console.log('maj!!');

    } catch (err) { console.log("Error:", err); }
})


/************** SEARCH (GET) **************/


app.get("/search/:key", async(req, res) => {
    try {

        let data = await Test.find({
            "$or": [
                { FirstName: { $regex: req.params.key } },
                { LastName: { $regex: req.params.key } },
                //{ CIN: { $regex: req.params.key } },
                { Email: { $regex: req.params.key } }
            ]
        })
        res.send(data);

    } catch (err) { console.log("Error:", err); }
})


/************** TEST **************/

app.listen(port, () => {
    console.log('App is listening at http://localhost:3001');
});







/* 
app.X("/path", async (req,res)=>{
    try {
        await
    } catch(err){console.log("Error:", err)}
})
*/




/*--------------------------------------------------------*/