const {Schema, model} = require('../connection');  
const mySchema = new Schema({
    size : String,
    rate : String,
    facilities : String,
    location : String,
    
})

module.exports = model('addSpaces', mySchema);