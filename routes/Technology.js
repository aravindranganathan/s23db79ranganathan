var express = require('express');
const technology_controllers= require('../controllers/technology');
var router = express.Router();
/* GET costumes */
router.get('/', technology_controllers.technology_view_all_Page )
router.get('/detail', technology_controllers.technology_view_one_Page);
router.get('/create', technology_controllers.technology_create_Page);
router.get('/update', technology_controllers.technology_update_Page);
module.exports = router;