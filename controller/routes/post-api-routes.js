var db = require("../../models");

module.exports = function(app) {

// Add a review
app.post("/api/new/review", function(req, res) {
    
        // console.log("Review Data:");
        // console.log(req.body);

        var field = req.body;
    
        db.Review.create({
          bootcampName: field.bootcampName,
          curriculum: parseInt(field.curriculum),
          instructor: parseInt(field.instructor),
          jobAssistance: parseInt(field.jobAssistance),
          jobFound: field.jobFound, 
          jobPosition: field.jobPosition,
          salaryRange: field.salaryRange,
          overallExperience: parseInt(field.overallExperience),
          // email: field.email
        }).then(function(results) {

        // var chartObject = {
        //   userExperience: results[i].overallExperience,
        //   userJob: results[i].jobFound,
        //   userJob: results[i].jobPosition,
        //   userSalary: result[i].salaryRange
        // }
          // for (var i=0; i<results.length; i++){

            // console.log(results[i].bootcampName);
            // console.log(results[i].curriculum);
            // console.log(results[i].instructor); 
            // console.log(results[i].jobAssistance);  
            // console.log(results[i].jobFound); 
            // console.log(results[i].jobPosition);
            // console.log(results[i].salaryRange); 
            // console.log(results[i].overallExperience);
      

        // }
         
          return res;
        });
    
      });
    
    };