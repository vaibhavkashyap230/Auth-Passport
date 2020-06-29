//require Express and Router
const express = require('express');
const google = express.Router();

// importing relevant controller
const controller = require('../controller/googleController');

// sending to relevant controller
google.use((req,res,next)=>{
    return controller.googleController(req,res,next);
});

//exporting router to index
module.exports = google;