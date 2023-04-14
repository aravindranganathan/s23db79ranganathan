var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var technology_controller = require('../controllers/technology');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// technology ROUTES ///
// POST request for creating a technology.
router.post('/technologys', technology_controller.technology_create_post);
// DELETE request to delete technology.
router.delete('/technologys/:id', technology_controller.technology_delete);
// PUT request to update technology.
router.put('/technologys/:id', technology_controller.technology_update_put);
// GET request for one technology.
router.get('/technologys/:id', technology_controller.technology_detail);
// GET request for list of all technology items.
router.get('/technologys', technology_controller.technology_list);
module.exports = router;