const { Types } = require('mongoose');
const {Schema, model} = require('../connection');  
const mySchema = new Schema({
    size : String,
    rate : String,
    facilities : String,
    location : String,
    user : {type : Types.ObjectId, ref: 'users'}

})

module.exports = model('addSpaces', mySchema);