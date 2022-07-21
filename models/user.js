const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    FirstName :{ 
        type :String,
    require : true
},
    LastName :{ 
        type :String,
    require : true
},
    Email :{ 
        type :String,
    require : true,
    unique: true
},
    CIN :{ 
        type : Number,
    require : true,
    unique: true
    },
    Num :{ 
        type : Number ,
    require : true,
    unique: true
    }

});
const user = mongoose.model("user",userschema);
module.exports = user;


