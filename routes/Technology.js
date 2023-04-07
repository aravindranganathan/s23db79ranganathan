var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Technology', { title: 'Searching Results for Technology' });    
});

module.exports = router;  