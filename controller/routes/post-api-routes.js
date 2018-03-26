var db = require("../../models");

module.exports = function(app) {

// Add a review
app.post("/api/new/review", function(req, res) {
    
        console.log("Review Data:");
        console.log(req.body);

        var index = req.body;
    
        db.Review.create({
          bootcampName: index.bootcampName,
          curriculum: parseInt(index.curriculum),
          instructor: parseInt(index.instructor),
          jobAssistance: parseInt(index.jobAssistance),
          jobFound: index.jobFound, 
          jobPosition: index.jobPosition,
          salaryRange: parseInt(index.salaryRange),
          overallExperience: parseInt(index.overallExperience)
        }).then(function(results) {
          console.log(results);
          // `results` here would be the newly created review
        //   res.end();
          return res.redirect("/");
        });
    
      });
    
    };