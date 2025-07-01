/* This JavaScript code is defining a Mongoose schema for a user in a MongoDB database. */
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

module.exports = mongoose.model("User", userSchema);
