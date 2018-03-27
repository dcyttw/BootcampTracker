var db = require("../../models");

module.exports = function(app) {

// Add a review
app.post("/api/new/review", function(req, res) {
    
        // console.log("Review Data:");
        // console.log(req.body);

        var index = req.body;
    
        db.Review.create({
          bootcampName: req.body.bootcampName,
          curriculum: parseInt(req.body.curriculum),
          instructor: parseInt(req.body.instructor),
          jobAssistance: parseInt(req.body.jobAssistance),
          jobFound: req.body.jobFound, 
          jobPosition: req.body.jobPosition,
          salaryRange: parseInt(req.body.salaryRange),
          overallExperience: parseInt(req.body.overallExperience)
        }).then(function(results) {

        // var newChart = {
        //   userExperience: results[i].overallExperience,
        //   userJob: results[i].jobPosition,
        //   userSalary: result[i].salaryRange
        // }
          // for (var i=0; i<results.length; i++){
        
            // console.log(results[i].overallExperience);
            // console.log(results[i].jobPosition);
            // console.log(results[i].salaryRange);  

        // }
         
          return res.redirect("/");
        });
    
      });
    
    };