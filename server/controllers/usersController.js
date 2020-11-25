
const controller = {
    login: (req,res) => {
        console.log(req.body);
        res.send("Login");
    },
    register: (req,res) => {
        console.log(req.body);
        res.send("Register");
    }



}

module.exports = controller;