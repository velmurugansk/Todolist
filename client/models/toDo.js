const mongoose = require('mongoose');

const todoSchema =new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String
    }
},{timestamps:true});

module.exports = mongoose.model("toDo",todoSchema);