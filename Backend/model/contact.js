var mongoose = require('mongoose')

var Schema = mongoose.Schema
var ContactSchema = new Schema ({
    firstname: {
        type: String,
        required: [true, 'Please enter your first name.']
    },
    lastname: {
        type: String,
        required: [true, 'Please enter your last name.']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email.'],
        lowercase: true,
        
    },
    country:{type:String},
    mobile:{type:Number},
})

module.exports=mongoose.model('Contact',ContactSchema)
