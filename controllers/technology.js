var technology = require('../models/technology');
// List of all technologys
exports.technology_list = function(req, res) {
 res.send('NOT IMPLEMENTED: technology list');
};
// for a specific technology.
exports.technology_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await technology.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle technology create on POST.
exports.technology_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Customer create POST');
};
// Handle technology delete form on DELETE.
exports.technology_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await technology.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle technology update form on PUT.
exports.technology_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await technology.findById( req.params.id)
    // Do updates of properties
    if(req.body.Tech_Name) toUpdate.Tech_Name = req.body.Tech_Name;
    if(req.body.Tech_Type) toUpdate.Tech_Type = req.body.Tech_Type;
    if(req.body.Tech_Age) toUpdate.Tech_Age = req.body.Tech_Age; 
    let result = await toUpdate.save();
    console.log("Success " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
   };

// List of all Customer
exports.technology_list = async function(req, res) {
    try{
    thetechnology = await technology.find();
    res.send(thetechnology);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.technology_view_all_Page = async function(req, res) {
  try{
  thetechnology = await technology.find();
  res.render('technology', { title: 'Technology Search Results', results: thetechnology });
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };
   // Handle technology create on POST.
exports.technology_create_post = async function(req, res) {
    console.log(req.body)
    let document = new technology();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"technology_type":"goat", "cost":12, "size":"large"}
    document.Tech_Name = req.body.name;
    document.Tech_Type = req.body.type;
    document.Tech_Age = req.body.age;
    
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.technology_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await technology.findById( req.query.id)
    res.render('technologydetail',
   { title: 'Technology Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };