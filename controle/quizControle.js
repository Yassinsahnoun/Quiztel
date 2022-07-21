


const quiz = require('../models/quiz');
const Quiz = require('../models/quiz');
const jwt = require('jsonwebtoken');


/************** CREATE (POST) **************/
const create =  async(req, res,creattoken,next) => {
    try {
        console.log("req.body:", req.body);

        const newquiz = new Quiz({:
            text: req.body.text,
            answer: req.body.answer,
            choices: req.body.choices
        })

        await Quiz.create(newquiz);
        res.send("ADDED !!");

    } catch (err) {
        console.log("the error:", err); // specify on the log the error !
    }
};
/************** read (get) **************/
const read=  async (req, res,next) => {
    try {
        
        await Quiz.find({id: req.params.id})
        .then((result) => {
            res.send(result);
        });

    } catch (err) { console.log("Error:", err); }
};
/************** delete  **************/
    const deletequiz = async(req, res,next) =>  {
        const _id = req.params.id;
        try {
    
            await Quiz.findByIdAndDelete(_id)
    
            res.send("supprimé") //sur browser
    
        } catch (err) { console.log("Error:", err) }
    };
/************** UPDATE (PUT) **************/

const updatequiz = async(req, res,next) => {
    try {
        await Quiz.findOneAndUpdate({ _id: req.params.id }, {
            text: req.body.text,
            answer: req.body.answer,
            choices: req.body.choices
        })
        res.send('mise a jour effectué');
        console.log('maj!!');

    } catch (err) { console.log("Error:", err); }
};

/************** authorization **************/
const secretkey = "wxcsgsvvzeekmod"
const verifyToken = (req,res,next) => {
    if (!req.headers.authorization) {
        return res.status(401).send("unauthorized req")
    }

    if (token == 'null') {
        return res.status(401).send("unauthorized req")
    }

    let token = req.header("authorization"); 
    
    try{
        let data = jwt.verify(token,secretkey)
        res.json(data)
    }catch(err){
        res.json({user:false})
    }
    next()
}

/************** creation du token **************/
const creattoken = (req,res,next) => {
    let token = jwt.sign({text: req.body.text,
        answer: req.body.answer,
        choices: req.body.choices},secretkey,{expiresIn:'120h'})
    req.header= token 
    next()
}



module.exports = {
    read,create,updatequiz,deletequiz,verifyToken, creattoken
}
