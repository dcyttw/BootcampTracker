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
  
  
      // Get Updated Form Data to generate charts
      app.post("/api/chartData", function(req, res) {

        //set initial variables
        var chartResults = {};
        var bootcampName = req.body.bootcampName;
    
        //query database for latest chart numbers
        db.Review.findAll({
          where: {bootcampName:bootcampName}
        }).then(function(results) {
          var jobFoundYes = 0;
          var jobFoundNo = 0;

          results.forEach((entry) => {

            // Calculate job found
            if (entry.jobFound === 'Yes') {
              jobFoundYes++;
            } else {
              jobFoundNo++;
            }
          });

          chartResults.jobFound = [
            ['Yes', jobFoundYes],
            ['No',  jobFoundNo]
          ];
          console.log(chartResults.jobFound);

        //return results as JSON
          return res.json({data: chartResults});
        });
      });
};