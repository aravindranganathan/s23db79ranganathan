var express = require('express');
const technology_controllers= require('../controllers/technology');
var router = express.Router();
/* GET costumes */
router.get('/', technology_controllers.technology_view_all_Page )
router.get('/detail', technology_controllers.technology_view_one_Page);
router.get('/create', technology_controllers.technology_create_Page);
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
 router.get('/update',secured, technology_controllers.technology_update_Page);
module.exports = router;