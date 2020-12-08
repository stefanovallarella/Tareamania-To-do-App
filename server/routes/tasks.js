const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');
const tasksAccessMiddleware = require('../middlewares/loggedForTasks');


router.get('/', tasksAccessMiddleware, tasksController.allTasks);

router.put('/edit/:id', tasksController.update);



module.exports = router;
