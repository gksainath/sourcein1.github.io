const express = require('express');
const router = express.Router();
const { getItems, getItemById, createItem } = require('../controllers/itemController');

router.route('/').get(getItems).post(createItem);
router.route('/:id').get(getItemById);

module.exports = router;
