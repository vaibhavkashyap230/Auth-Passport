//require Express and Router and Passport
const express = require('express');
const logoutRouter = express.Router();

// importing relevant controller
const controller = require('../controller/logoutController');

// sending to relevant controller after passing throuth Passport Middleware
logoutRouter.use((req,res,next)=>{
    
    console.log('here at logout router');
    return controller.logoutController(req,res,next);
});

//exporting router to index
module.exports = logoutRouter;