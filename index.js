//set port, import express & get bodyParser
const port = 8000;
const express = require('express');

// for using DB
const db = require('./config/mongoose');

//for using bcrypt
const bcrypt = require('bcrypt');

// imports for passport authentication & session
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

//create express appliaction
const app = express();

// set view engine
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');

//setting up session cookies
app.use(session({
    name: 'auth',
    secret: 'Abc1234',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*60)
    }
}));

//for using passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// link static files
app.use(express.static("./assets"));

//import all the Routers
const indexRouter = require('./routes/indexRouter');
const signupRouter = require('./routes/signupRouter');
const signinRouter = require('./routes/signinRouter');
const logoutRouter = require('./routes/logoutRouter');
const google = require('./routes/google');
const changeRouter = require('./routes/changeRouter');

// sending requests to respective Routers
app.post('/signin',signinRouter);
app.post('/signup',signupRouter);
app.use('/logout',logoutRouter);
app.use('/google',google);
app.use('/change',changeRouter);
app.use('/',indexRouter);

// adding listener
app.listen(port,(err)=>{
    if(err)
    {
        console.log('Error : '+err);
        return;
    }

    console.log('The Server is live at Port :'+ port);
});