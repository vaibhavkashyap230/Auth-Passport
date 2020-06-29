//require DB model
const db = require('../models/usersDb');

//for using bcrypt
const bcrypt = require('bcrypt');

//for showing list of items
module.exports.signinController = (req,res,next)=>{

    return res.render('profile',{
        name: req.user.name,
        email: req.user.email
    });
}