const router = require("express").Router();
const menuController = require('../controllers/menuController');

router.get('/:menuType', menuController.getSingleMenu);

module.exports = router;