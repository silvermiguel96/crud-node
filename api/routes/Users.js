const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/Users');

router.post('/add', controllerUser.createUser);
router.get('/list', controllerUser.getUsers);
router.get('/list/:id', controllerUser.getUserById);
router.delete('/:id', controllerUser.deleteUsers);
// Tener en cuenta la empresa como nos dice que seria lo indicado de trabajar.
router.put('/cambiar/todos/datos/:userId',controllerUser.updateUsersPut )

module.exports = router;