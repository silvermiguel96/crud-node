const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/Users');

router.post('/add', controllerUser.createUser);
router.get('/list', controllerUser.getUser);

module.exports = router;