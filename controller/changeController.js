//require DB model
const db = require('../models/usersDb');

//for using bcrypt
const bcrypt = require('bcrypt');

//for showing list of items
module.exports.changeController = (req,res,next)=>{

    if(req.body.new!=req.body.repeat)
    {
        res.redirect('back');
    }

    console.log(req.body);

    res.redirect('/');
}