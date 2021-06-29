const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
name : String,
description : String,
time : String,
status : String 
});

const todoModel = mongoose.model('Todo', todoSchema);

module.exports = todoModel;