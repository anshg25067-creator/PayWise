const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    username:String,
    amount:Number,
    ispaid:Boolean
});
const noteModel = mongoose.model("note", noteSchema);
module.exports = noteModel;