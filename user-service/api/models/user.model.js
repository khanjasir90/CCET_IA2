const mongoose = require('mongoose')
var conn = mongoose.Collection

var UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
    },
    lastName: {
        type: String,
    },
    email_id: {
        type: String,
    },
    phone_no: {
        type: String,
    }
},
)

var Users = mongoose.model('User',UserSchema)
module.exports = Users