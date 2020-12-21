const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');
const tasksAccessMiddleware = require('../middlewares/loggedForTasks');


router.get('/', tasksAccessMiddleware, tasksController.allTasks);

router.put('/edit/:id', tasksController.update);

/* router.post('/category-create', tasksController.categoryCreate); */

router.get('/categories', tasksController.allCategories);

router.post('/create', tasksController.newTask);

router.delete('/delete', tasksController.deleteTask);



module.exports = router;
