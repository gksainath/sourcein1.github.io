const express = require('express');
const router = express.Router();
const { authUser, getUserDashboard } = require('../controllers/userController');

router.post('/auth', authUser);
router.get('/:id/dashboard', getUserDashboard);

module.exports = router;
