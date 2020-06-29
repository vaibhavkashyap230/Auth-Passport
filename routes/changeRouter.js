//require Express and Router
const express = require('express');
const changeRouter = express.Router();

// importing relevant controller
const controller = require('../controller/changeController');

// sending to relevant controller
changeRouter.use((req,res,next)=>{
    return controller.changeController(req,res,next);
});

//exporting router to index
module.exports = changeRouter;