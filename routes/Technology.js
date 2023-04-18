// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Technology', { title: 'Search Results for Technology' });
// });

// module.exports = router;

var express = require('express');
const technology_controlers= require('../controllers/technology');
var router = express.Router();
/* GET costumes */
router.get('/', technology_controlers.technology_view_all_Page );
router.get('/detail', technology_controlers.technology_view_one_Page);
module.exports = router;
// GET request for one costume.
router.get('/technology/:id', technology_controlers.technology_detail);