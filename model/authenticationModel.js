const mongoose = require('mongoose')
const authSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:{},
        require:true
    },
},{timestamps:true})
module.exports = mongoose.model("Auth",authSchema)