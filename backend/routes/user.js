const express = require('express');
const router = express.Router();
const { getUser, createUser, editUser, deleteUser } = require('../controllers/user')

router.route('/').get(getUser).post(createUser)

router.route('/:id').put(editUser).delete(deleteUser)

module.exports = router;