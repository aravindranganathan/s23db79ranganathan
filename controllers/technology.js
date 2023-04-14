var technology = require('../models/technology');
// List of all technologys
exports.technology_list = function(req, res) {
 res.send('NOT IMPLEMENTED: technology list');
};
// for a specific technology.
exports.technology_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: technology detail: ' + req.params.id);
};
// Handle technology create on POST.
exports.technology_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: technology create POST');
};
// Handle technology delete form on DELETE.
exports.technology_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: technology delete DELETE ' + req.params.id);
};
// Handle technology update form on PUT.
exports.technology_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: technology update PUT' + req.params.id);
};