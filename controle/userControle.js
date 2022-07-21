
const user = require('../models/user');


/************** CREATE (POST) **************/

const create =  async(req, res,next) => {
    try {
        console.log("req.body:", req.body); //specify on the log the added data

        const newuser = new user ({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            CIN: req.body.CIN,
            Email: req.body.Email,
            Num: req.body.Num
        })

        await user.create(newuser);
        res.send("ADDED !!");

    } catch (err) {
        console.log("the error:", err); // specify on the log the error !
    }
};



    /************** read (get) **************/

const read=  async (req, res,next) => {
    try {

        await user.find({_id: req.params.id})
        .then((result) => {
            res.send(result);
        });

    } catch (err) { console.log("Error:", err); }
};


    /************** readall (getall) **************/


const readall = async (req,res,next) => {
        try {

        await user.find({})
        .then((result) => {
            res.send(result);
        });

    } catch (err) { console.log("Error:", err); }
}






    /************** delete  **************/

const delete_user = async(req, res,next) =>  {
    try {

        await user.findByIdAndDelete( req.params.id )

        res.send("supprimé") //sur browser

    } catch (err) { console.log("Error:", err) }
};








    /************** UPDATE (PUT) **************/
const update = async(req, res, next ) => {
    try {

        await user.findOneAndUpdate({ _id: req.params.id }, {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            CIN: req.body.CIN,
            Email: req.body.Email,
            Num: req.body.Num
        })
        res.send('mise a jour effectué');
        console.log('maj!!');

    } catch (err) { console.log("Error:", err); }
};


    module.exports = {
        read,create,update,delete_user,readall
    }