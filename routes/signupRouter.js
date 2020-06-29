//require Express and Router
const express = require('express');
const signupRouter = express.Router();

// importing relevant controller
const controller = require('../controller/signupController');

// sending to relevant controller
signupRouter.use((req,res,next)=>{
    return controller.signupController(req,res,next);
});

//exporting router to index
module.exports = signupRouter;