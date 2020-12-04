function loggedForTasks(req, res, next){
    if(req.session.userLoggedIn !== undefined){
        next();
    }else{
        let login = {
            alreadyLoggedin: false
        }
        res.send(JSON.stringify(login));
    }
}

module.exports = loggedForTasks;