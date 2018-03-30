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
      }).then(function(results) {
          // return res.json(results);
          return res;
      });
    
  });
    
};