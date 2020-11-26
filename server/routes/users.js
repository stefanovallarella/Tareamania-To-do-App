const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validator = require('../validators/users');

router.post('/login', validator.login, usersController.login);
router.post('/register', validator.register ,usersController.register);

module.exports = router;
