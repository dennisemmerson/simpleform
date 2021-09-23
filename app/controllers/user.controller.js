const User = require('../models/user.model.js');
 
// Save FormData - User to MongoDB
exports.save = (req, res) => {
	console.log('Post a User: ' + JSON.stringify(req.body));
	
    // Create a Customer
    const user = new User({
        firstname: req.body.firstname,
		lastname: req.body.lastname
    });
 
    // Save a Customer in the MongoDB
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
 
// Fetch all Users
exports.findAll = (req, res) =>  {
	console.log("Fetch all Users");
	
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// Delete all Users
exports.deleteAll = (req, res) =>  {
	console.log("Delete all Users");
	
    User.deleteMany().then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure;
    });
};