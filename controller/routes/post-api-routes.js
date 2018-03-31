var Review = require("../../models/review.js");

module.exports = function(app) {

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