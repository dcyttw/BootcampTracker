var Review = require("../models/review.js");

module.exports = function(app) {

    app.get("/", function(req, res){
        Review.FindAll(function (data) {
            console.log("View all review data");            
            var reviewObject = {
            reviewData: data
        };

        console.log("review object" + JSON.stringify(data));

        return res.render("index", reviewObject);

    });
    })
    
      // Get all chirps
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
    
      // Add a review
      app.post("/api/new", function(req, res) {
    
        console.log("Review Data:");
        console.log(req.body);
    
        Review.create({
          bootcampName: req.body.bootcampName,
          curriculum: req.body.curriculum,
          instructor: req.body.instructor,
          jobAssistance: req.body.jobAssistance,
          jobFound: req.body.jobFound, 
          jobPosition: req.body.jobPosition,
          salaryRange: req.body.salaryRange
        }).then(function(results) {
          // `results` here would be the newly created review
        //   res.end();
          return res.redirect("/");
        });
    
      });
    
    };