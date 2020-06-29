
//for loging out User
module.exports.logoutController = (req,res,next)=>{

    console.log('Here at controller');
    req.logout();
    return res.redirect('/');
}