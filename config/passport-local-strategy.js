//import passport && passport-local

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/usersDb');

//for using bcrypt
const bcrypt = require('bcrypt');

//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    (email,password,done)=>{
        //finding from the Users DataBase
        Users.findOne({email:email},(error,user)=>{
            
            if(error)
            {
                console.log(`Error in Db in passport ${error}`);
                return done(error,null);
            }

            //de-encrypting password to compare            
            if(!user || !bcrypt.compareSync(password,user.password))
            {
                return done(null,false);
            }

            //authentication successfull
            return done(null,user);
        });
    }
));


//serialising & deserialising from the cookie
passport.serializeUser((user,done)=>{
    return done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    Users.findById(id,(error,user)=>{
        if(error)
        {
            console.log(`Error in Db in deserialisation ${error}`);
            return done(error,null);
        }
        return (null,user);
    });
});

passport.checkAuthentication = (req,res,next)=>{

    if(req.isAuthenticated())
    {
        return next();
    }

    return res.redirect('/');
}

passport.setAuthenticatedUser = (req,res,next)=>{

    if(req.isAuthenticated())
    {
        res.locals.user = req.user;
    }

    next();
}

//exporting passport
module.exports = passport;