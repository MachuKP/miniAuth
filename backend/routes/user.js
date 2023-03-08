const express = require('express');
const router = express.Router();
const { getUser, createUser, editUser, deleteUser, login } = require('../controllers/user')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getUser).post(createUser)

router.route('/login').post(login)

router.route('/:id').put(protect, editUser).delete(protect, deleteUser)

module.exports = router;