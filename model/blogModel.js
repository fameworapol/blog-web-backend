const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    content:{
        type:{},
        require:true
    },
    author:{
        type:String
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }
},{timestamps:true})
module.exports = mongoose.model("Blog",blogSchema)