//require Express and Router and Passport
const express = require('express');
const signinRouter = express.Router();
const passport = require('passport');

// importing relevant controller
const controller = require('../controller/signinController');

// sending to relevant controller after passing throuth Passport Middleware
signinRouter.use('/',passport.authenticate(
    'local',
    {
        failureRedirect: '/'
    }
),(req,res,next)=>{
    return controller.signinController(req,res,next);
});

//exporting router to index
module.exports = signinRouter;