var Review = require("../../models/review.js");

module.exports = function(app) {

    app.get("/", function(req, res) {

        Review.findAll({}).then(function (data) {
            
            console.log("View all review data");            
            
            var reviewObject = {
            reviewData: data
            };
            
            console.log("review object" + JSON.stringify(data));

            return res.render("index", reviewObject);
        });

    });
   
    
      // Get all Reviews
      app.get("/api/all", function(req, res) {
    
        // Finding all Reviews, and then returning them to the user as JSON.
        // Sequelize queries are asynchronous, which helps with perceived speed.
        // If we want something to be guaranteed to happen after the query, we'll use
        // the .then function
        Review.findAll({}).then(function(results) {
            console.log("Find All");
          // results are available to us inside the .then
          return res.json(results);
        });
    
    });

};