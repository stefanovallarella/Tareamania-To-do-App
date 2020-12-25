const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');
const tasksAccessMiddleware = require('../middlewares/loggedForTasks');


router.get('/', tasksAccessMiddleware, tasksController.allTasks);

/* router.post('/category-create', tasksController.categoryCreate); */

router.get('/categories', tasksController.allCategories);

router.post('/create', tasksController.create);

router.delete('/delete', tasksController.deleteTask);

router.put('/edit', tasksController.update);




module.exports = router;
