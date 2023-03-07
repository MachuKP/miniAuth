const express = require('express');
const router = express.Router();
const { getDailyLog, createGoal } = require('../controllers/goal')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getDailyLog).post(protect, createGoal)

module.exports = router;