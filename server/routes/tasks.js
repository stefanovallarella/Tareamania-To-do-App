const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');
const tasksAccessMiddleware = require('../middlewares/loggedForTasks');


router.get('/', tasksAccessMiddleware, tasksController.allTasks);



module.exports = router;
