//require DB model
const db = require('../models/usersDb');

//for showing list of items
module.exports.indexController = (req,res,next)=>{

    return res.render('index');
}