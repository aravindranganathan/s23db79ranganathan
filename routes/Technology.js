var express = require('express');
const technology_controllers= require('../controllers/technology');
var router = express.Router();
/* GET costumes */
router.get('/', technology_controllers.technology_view_all_Page )
router.get('/detail', technology_controllers.technology_view_one_Page);
module.exports = router;