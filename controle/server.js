const express = require('express');
const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let secretKey= "jddjdj";


const data = [{
    film : "titanic",
    year: 1991,
},
{
    film: "silent hill",
    year: 2016,
},
];

app.get("/data/:id",(req,res)=>{
    if(req.params.id==secretKey){
        res.json(data);
    }
    else{
        res.json({error :"vous n'est pas reussir a effectuer cette tache !!!"});
    }
});







app.listen(3002,()=> {
    console.log("serveur en marche !!");
});


function CreateToken(req,res,next){
    const user = {username:req.body.username}
    jwt.sign(user,secretKey,(err,resultat)=>{
        if(err){
            res.json({error:err});
        }else{
            res.json({token:resultat});
        }
    });
    next();
}


app.post("/login",CreateToken,(req,res)=>{

})

