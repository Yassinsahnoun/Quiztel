const mongoose = require("mongoose");

const testschema = mongoose.Schema({
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
        type : String,
    require : true,
    unique: true
    },
    Num :{ 
        type : String ,
    require : true,
    unique: true
    }

});
const Test = mongoose.model("test",testschema);
module.exports = Test;


