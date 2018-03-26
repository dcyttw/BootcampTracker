var db = require("../../models");

module.exports = function(app) {

// Add a review
app.post("/api/new/review", function(req, res) {
    
        console.log("Review Data:");
        console.log(req.body);
    
        db.Review.create({
          bootcampName: req.body.bootcampName,
          curriculum: parseInt(req.body.curriculum),
          instructor: parseInt(req.body.instructor),
          jobAssistance: parseInt(req.body.jobAssistance),
          jobFound: req.body.jobFound, 
          jobPosition: req.body.jobPosition,
          salaryRange: parseInt(req.body.salaryRange)
        }).then(function(results) {
          console.log(results);
          // `results` here would be the newly created review
        //   res.end();
          return res.redirect("/");
        });
    
      });
    
    };