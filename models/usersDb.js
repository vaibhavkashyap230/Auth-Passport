//importing mongoose
const mongoose = require('mongoose');

//declaring Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

//creating the DB model
const Users = mongoose.model('Users',userSchema);

module.exports = Users;