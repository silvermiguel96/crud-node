const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/Users');

router.post('/add', controllerUser.createUser);
router.get('/list', controllerUser.getUsers);
router.get('/list/:id', controllerUser.getUserById)

module.exports = router;