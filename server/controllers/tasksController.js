const { task, user, category, status } = require('../database/models');


const controller = {
    allTasks: (req,res) => {    
        
        let userInSession = req.session.userLoggedIn;
        let id = userInSession.id;

       /*  user.findOne({ 
            attributes: ['id', 'first_name', 'last_name', 'email', 'password'], 
            where: {id},
            include: [task]})
        .then(user => {
            
            console.log(user.tasks[0]);
            console.log(user.tasks[1]);
            console.log(user.tasks[0].name);
        })
        .catch(err => console.log(err)); */

       task.findAll({
            where:{
                user_id: Number(id)
            },
            include: [ user, category, status]
        })
        .then(tasks => {

            let response = {
                meta: {
                     status: 200,
                     count: tasks.length
                },
                data: tasks
             }

             res.json(response) 
        })
        .catch(error => console.log(error)); 


     



        
       /*  return res.send(JSON.stringify(userTasks));  */
    },
    create: async (req,res) => {

        console.log(req.body);

    },
    update: async (req,res) => {

        let id = req.params.id;
        console.log(req.body);
        console.log(id);
      /*   try{
            taskExists = await task.findByPk(id);

            



        } */

        let respo = {editDone: true};
        return res.send(JSON.stringify(respo));

    },
    categoryCreate: async (req,res) => {



    },
    allCategories: async (req,res) => {

        category.findAll()
        .then(category => {

            let response = {
                meta: {
                     status: 200,
                     count: category.length
                },
                data: category
             }
             
             console.log(response);

             res.json(response) 
        })
        .catch(error => console.log(error)); 
    },



}

module.exports = controller;