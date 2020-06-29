//require Express and Router
const express = require('express');
const indexRouter = express.Router();

// importing relevant controller
const controller = require('../controller/indexController');

// sending to relevant controller
indexRouter.use((req,res,next)=>{
    return controller.indexController(req,res,next);
});

//exporting router to index
module.exports = indexRouter;