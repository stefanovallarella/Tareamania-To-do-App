function loginMiddleware(req, res, next){
    if(req.session.userLoggedIn == undefined){
        next();
    }else{
        let login = {
            alreadyLoggedin: true
        }
        res.send(JSON.stringify(login));
    }
}

module.exports = loginMiddleware;