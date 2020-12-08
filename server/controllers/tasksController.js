const { task, user, category, status } = require('../database/models');


const controller = {
    allTasks: (req,res) => {    
        console.log(req.session.userLoggedIn);
        let userAccessed = req.session.userLoggedIn;
        /*       {
            id: 16,
            first_name: 'stefanito',
            last_name: 'pepito',
            email: 'pepito@pepito.com',
            password: '$2a$10$ACTza3VtdHBCqDFAlEM8Qe/XpOSEKIWnwjb6dduExffA4vnB1KoHW',
            tasks: []
            } */
        let userInSession = req.session.userLoggedIn;
        let id = userInSession.id;

        task.findAll({
            where:{
                user_id: id
            },
            include: [ user, category, status]
        })
        .then(tasks => {
            console.log(tasks);
        })
        .catch(error => console.log(error));
        
        return res.send(JSON.stringify(userAccessed));
    },
    update: async (req,res) => {

        let id = req.params.id;
        console.log(req.body);
        console.log(id);
      /*   try{
            taskExists = await task.findByPk(id);

            



        } */



    }



}

module.exports = controller;