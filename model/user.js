const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobNumber: Number,
    password: String 
}) ;

module.exports = mongoose.model("userss", userSchema);