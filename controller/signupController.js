//require DB model
const db = require('../models/usersDb');

//for using bcrypt
const bcrypt = require('bcrypt');

//for signing up user
module.exports.signupController = (req,res,next)=>{

    if(req.body.password!=req.body.confirmPassword)
    {
        return res.redirect('back');
    }

    const hashedPassword = bcrypt.hashSync(req.body.password,10);

    db.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    return res.redirect('back');
}