const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
    title:String,
    description:String
});

module.exports = mongoose.model('Task',TaskSchema,'Tasks');