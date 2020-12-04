const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validator = require('../validators/users');

const loginAuth = require('../middlewares/loginAuth');

router.post('/login', loginAuth, validator.login, usersController.login);
router.post('/register', validator.register ,usersController.register);
router.get('/loggedin', usersController.isLoggedIn);
router.get('/logout', usersController.logOut);

module.exports = router;
